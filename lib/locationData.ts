import { Country, State, City } from "country-state-city"; // Library: Industry-standard ISO location data provider.
import { customLocationData } from "./customLocationData"; // Custom Data: Specialized Vexel regions (e.g. Sri Lankan Districts) not found in standard libraries.

/**
 * UTILITY: getAllCountries
 * Logic: Fetches the entire global database of countries.
 * Transformation: Strips unnecessary library metadata, returning only UI-relevant fields (Name, Code, Phone, Flag).
 * Why: Used for the 'Country Code' selector in phone number inputs.
 */
export const getAllCountries = () => {
  // Variable: allCountries - The raw array from the standard library.
  const allCountries = Country.getAllCountries();

  // Logic: Map standard structure to Vexel's internal 'CountrySelect' interface.
  return allCountries.map((c) => ({
    name: c.name,
    code: c.isoCode,
    phoneCode: c.phonecode,
    flag: c.flag,
  }));
};

/**
 * UTILITY: getCountries (Addressing)
 * Logic: Current business requirement restricts physical shop addresses to Sri Lanka (LK).
 * Functional: Efficiently finds the LK object without iterating the entire global list manually.
 * Why: Prevents users from selecting invalid regions for the current product rollout.
 */
export const getCountries = () => {
  const allCountries = Country.getAllCountries();

  // Logical Target: Find a specific ISO match.
  const sriLanka = allCountries.find((c) => c.isoCode === "LK");

  if (sriLanka) {
    // Logic: Return as a singleton array to maintain compatibility with select components.
    return [
      {
        name: sriLanka.name,
        code: sriLanka.isoCode,
        phoneCode: sriLanka.phonecode,
        flag: sriLanka.flag,
      },
    ];
  }
  return []; // Safeguard against library load failures.
};

/**
 * UTILITY: getStates
 * Logic: Fetches the second tier of the address hierarchy (Provinces/States).
 * Priority Strategy:
 * 1. Check 'customLocationData' - for regions with non-standard administrative names.
 * 2. Fallback to standard library.
 *
 * @param countryCode - ISO 2-letter code (e.g. 'LK').
 */
export const getStates = (countryCode: string) => {
  // Logic: Check if we have an 'override' dataset for this specific country.
  const customData = customLocationData[countryCode];

  if (customData) {
    // Transformation: Map custom state objects to the standard display interface.
    // Why: We use 'name' as 'code' here because our custom data lookups are name-indexed.
    return customData.states.map((s) => ({
      name: s.name,
      code: s.name,
      isoCode: s.isoCode,
      nativeName: s.native_name,
    }));
  }

  // Fallback Logic: Service global requests using the standard library.
  return State.getStatesOfCountry(countryCode).map((s) => ({
    name: s.name,
    code: s.isoCode,
  }));
};

/**
 * UTILITY: getDistricts
 * Logic: Retrieves the third tier specific to localized regional data.
 * Limitation: Districts are a 'custom-only' feature as most standard libraries skip this depth for SMB-tier data.
 *
 * @param countryCode - Used to locate the custom dataset.
 * @param stateName - Used to filter the province's children.
 */
export const getDistricts = (countryCode: string, stateName: string) => {
  const customData = customLocationData[countryCode];

  if (customData) {
    // Logic: Drill down into state -> districts.
    const state = customData.states.find((s) => s.name === stateName);
    if (state && state.districts) {
      return state.districts.map((d) => ({
        name: d.name,
        code: d.name,
      }));
    }
  }
  // Logic: Return empty if the country/state combination doesn't support a 3-tier system.
  return [];
};

/**
 * UTILITY: getCities
 * Logic: The most complex resolution function. Orchestrates a 3-path cascading search.
 * @param countryCode - Root filter.
 * @param stateCode - Mid-tier filter.
 * @param districtName - Optional leaf-level filter for localized data.
 */
export const getCities = (
  countryCode: string,
  stateCode: string,
  districtName?: string,
) => {
  const customData = customLocationData[countryCode];

  /**
   * PATH A: CUSTOM DATA PROCESSING
   * High fidelity path for Sri Lankan regional data.
   */
  if (customData) {
    // Variable: state - The province object containing nested districts or cities.
    const state = customData.states.find((s) => s.name === stateCode);

    if (state) {
      /**
       * Sub-Path 1: DISTRICT-BASED CITIES
       * Logic: Filter cities that belong to a specific administrative district.
       */
      if (districtName && state.districts) {
        const district = state.districts.find((d) => d.name === districtName);
        if (district) {
          return district.cities.map((c) => ({
            name: c.name,
            postcode: c.postcode || "", // Logic: Pass through optional postcodes for auto-fill.
          }));
        }
      }

      /**
       * Sub-Path 2: STATE-BASED CITIES
       * Logic: Return cities directly under a province if no districts are specified.
       */
      if (state.cities && state.cities.length > 0) {
        return state.cities.map((c) => ({
          name: c.name,
          postcode: c.postcode || "",
        }));
      }
    }
    return []; // Logic: No matches in custom data.
  }

  /**
   * PATH B: STANDARD LIBRARY FALLBACK
   * Standard Path for non-customized countries.
   */
  return City.getCitiesOfState(countryCode, stateCode).map((c) => ({
    name: c.name,
    postcode: "", // Standard library does not reliably provide ZIPs at this level.
  }));
};
