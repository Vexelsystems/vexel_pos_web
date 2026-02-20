import React, { useEffect, useState } from "react";
import {
  MapPin,
  Building,
  Store,
  Plus,
  Trash2,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import {
  getCountries,
  getStates,
  getDistricts,
  getCities,
} from "@/lib/locationData";

interface StepBranchProps {
  data: any;
  updateData: (newData: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepBranch({
  data,
  updateData,
  nextStep,
  prevStep,
}: StepBranchProps) {
  // Local state to manage which branch is currently being edited
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);

  // -- Dropdown Population Logic --
  const [countriesList, setCountriesList] = useState<any[]>([]);
  const [statesList, setStatesList] = useState<any[]>([]);
  const [districtsList, setDistrictsList] = useState<any[]>([]);
  const [citiesList, setCitiesList] = useState<any[]>([]);

  // Helper to get current branch safely
  const currentBranch = data.branches[activeBranchIndex] || {};

  /**
   * DATA INITIALIZATION
   */
  useEffect(() => {
    setCountriesList(getCountries());

    // Ensure at least one branch exists
    if (!data.branches || data.branches.length === 0) {
      updateData({
        branches: [
          {
            id: crypto.randomUUID(),
            branchName: "Main Branch",
            branchCode: "BR-001",
            countryCode: "LK",
            country: "Sri Lanka",
            shopNumber: "",
            streetName: "",
            townVillage: "",
            city: "",
            district: "",
            stateProvince: "",
            postalCode: "",
          },
        ],
      });
    }
  }, []);

  /**
   * Refresh Dependent Dropdowns when Active Branch Changes
   */
  useEffect(() => {
    refreshLocationData(currentBranch);
  }, [
    activeBranchIndex,
    currentBranch.countryCode,
    currentBranch.stateProvince,
    currentBranch.district,
  ]);

  const refreshLocationData = (branch: any) => {
    if (!branch) return;

    // 1. States
    if (branch.countryCode) {
      setStatesList(getStates(branch.countryCode));
    } else {
      setStatesList([]);
    }

    // 2. Districts/Cities based on State
    if (branch.countryCode && branch.stateProvince) {
      const dists = getDistricts(branch.countryCode, branch.stateProvince);
      setDistrictsList(dists || []); // ensure array

      if (!dists || dists.length === 0) {
        // If no districts, check for cities directly under state
        const stateObj = getStates(branch.countryCode).find(
          (s) => s.name === branch.stateProvince,
        );
        if (stateObj) {
          setCitiesList(getCities(branch.countryCode, stateObj.code));
        } else {
          setCitiesList([]);
        }
      } else {
        // If districts exist, clear cities until district selected
        setCitiesList([]);
      }
    } else {
      setDistrictsList([]);
      setCitiesList([]);
    }

    // 3. Cities based on District
    if (
      branch.countryCode &&
      branch.stateProvince &&
      branch.district &&
      districtsList.length > 0
    ) {
      setCitiesList(
        getCities(branch.countryCode, branch.stateProvince, branch.district),
      );
    }
  };

  /**
   * GENERIC UPDATE HANDLER
   * Updates a field in the CURRENTLY ACTIVE branch
   */
  const handleUpdate = (field: string, value: string) => {
    const updatedBranches = [...data.branches];
    updatedBranches[activeBranchIndex] = {
      ...updatedBranches[activeBranchIndex],
      [field]: value,
    };

    // Special Logic: If Country Changes, reset down-stream
    if (field === "countryCode") {
      const countryObj = countriesList.find((c) => c.code === value);
      updatedBranches[activeBranchIndex].country = countryObj?.name || "";
      updatedBranches[activeBranchIndex].stateProvince = "";
      updatedBranches[activeBranchIndex].district = "";
      updatedBranches[activeBranchIndex].city = "";
      updatedBranches[activeBranchIndex].postalCode = "";
    }
    // Special Logic: If State Changes, reset down-stream
    if (field === "stateProvince") {
      updatedBranches[activeBranchIndex].district = "";
      updatedBranches[activeBranchIndex].city = "";
    }
    // Special Logic: If District Changes, reset down-stream
    if (field === "district") {
      updatedBranches[activeBranchIndex].city = "";
    }

    // City Auto-Postcode
    if (field === "city") {
      const cityObj = citiesList.find((c) => c.name === value);
      if (cityObj && cityObj.postcode) {
        updatedBranches[activeBranchIndex].postalCode = cityObj.postcode;
      }
    }

    updateData({ branches: updatedBranches });
  };

  /**
   * ADD NEW BRANCH
   */
  const addNewBranch = () => {
    const nextIndex = data.branches.length + 1;
    // Helper for ordinal suffix (2nd, 3rd, 4th, etc.)
    const getOrdinal = (n: number) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const newBranch = {
      id: crypto.randomUUID(),
      branchName: `${getOrdinal(nextIndex)} Branch`,
      branchCode: `BR-${String(nextIndex).padStart(3, "0")}`,
      countryCode: "LK",
      country: "Sri Lanka",
      shopNumber: "",
      streetName: "",
      townVillage: "",
      city: "",
      district: "",
      stateProvince: "",
      postalCode: "",
    };
    updateData({ branches: [...data.branches, newBranch] });
    setActiveBranchIndex(data.branches.length); // Switch to new one
  };

  /**
   * REMOVE BRANCH
   */
  const removeBranch = (index: number) => {
    const updatedBranches = data.branches.filter(
      (_: any, i: number) => i !== index,
    );
    updateData({ branches: updatedBranches });
    setActiveBranchIndex(Math.max(0, index - 1));
  };

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Branch Setup
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage your business locations.
        </p>
      </div>
      {/* Form Container */}
      <div className="bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl p-6 sm:p-10 shadow-xl shadow-primary/5">
        {/* Branch Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-primary/10 pb-4">
          {data.branches?.map((branch: any, idx: number) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranchIndex(idx)}
              type="button"
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeBranchIndex === idx
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <Store className="w-4 h-4" />
              {branch.branchName || `Branch ${idx + 1}`}
              {idx > 0 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    removeBranch(idx);
                  }}
                  className="ml-1 p-0.5 rounded-full hover:bg-white/20"
                >
                  <Trash2 className="w-3 h-3" />
                </span>
              )}
            </button>
          ))}

          {((data.package === "Standard" && data.branches.length < 5) ||
            data.package === "Enterprise") && (
            <button
              onClick={addNewBranch}
              type="button"
              className="px-4 py-2 rounded-lg text-sm font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 dark:border-emerald-900/30 dark:bg-emerald-900/20 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Branch
            </button>
          )}
        </div>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          {/* Section 1: Main Branch Details */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Store className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Branch Details
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Branch Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={currentBranch.branchName || ""}
                  onChange={(e) => handleUpdate("branchName", e.target.value)}
                  placeholder="e.g. Headquarters"
                  className="bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Branch Code <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={currentBranch.branchCode || ""}
                  onChange={(e) => handleUpdate("branchCode", e.target.value)}
                  placeholder="e.g. HQ-001"
                  className="bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  required
                />
              </div>
            </div>
          </section>

          <hr className="border-slate-200 dark:border-primary/10" />

          {/* Section 2: Main Branch Location */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Branch Location
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Country <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <select
                    value={currentBranch.countryCode || ""}
                    onChange={(e) =>
                      handleUpdate("countryCode", e.target.value)
                    }
                    className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer"
                  >
                    {countriesList.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Shop Number/Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={currentBranch.shopNumber || ""}
                    onChange={(e) => handleUpdate("shopNumber", e.target.value)}
                    placeholder="e.g. No. 45"
                    className="bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Street Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={currentBranch.streetName || ""}
                    onChange={(e) => handleUpdate("streetName", e.target.value)}
                    placeholder="e.g. Galle Road"
                    className="bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Province / State <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <select
                    value={currentBranch.stateProvince || ""}
                    onChange={(e) =>
                      handleUpdate("stateProvince", e.target.value)
                    }
                    className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Select Province
                    </option>
                    {statesList.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    District
                  </label>
                  <div className="relative">
                    <select
                      value={currentBranch.district || ""}
                      onChange={(e) => handleUpdate("district", e.target.value)}
                      className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer"
                    >
                      <option value="" disabled>
                        Select District
                      </option>
                      {districtsList.map((d) => (
                        <option key={d.name} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-5 h-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Nearest Village / Town
                  </label>
                  <input
                    type="text"
                    value={currentBranch.townVillage || ""}
                    onChange={(e) =>
                      handleUpdate("townVillage", e.target.value)
                    }
                    placeholder="e.g. Bambalapitiya"
                    className="bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    City / Town <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={currentBranch.city || ""}
                      onChange={(e) => handleUpdate("city", e.target.value)}
                      className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select City
                      </option>
                      {citiesList.length > 0 ? (
                        citiesList.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name}
                          </option>
                        ))
                      ) : (
                        <option value="" disabled>
                          Select District first
                        </option>
                      )}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-5 h-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Postal/Zip Code
                  </label>
                  <input
                    type="text"
                    value={currentBranch.postalCode || ""}
                    onChange={(e) => handleUpdate("postalCode", e.target.value)}
                    placeholder="e.g. 00300"
                    className="bg-slate-50 dark:bg-background-dark/50 border border-slate-300 dark:border-primary/20 rounded-lg p-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6">
            <button
              onClick={prevStep}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-300 dark:border-primary/30 font-bold hover:bg-slate-100 dark:hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
              type="button"
            >
              <ArrowLeft className="text-xl" />
              Back
            </button>
            <button
              onClick={nextStep}
              className="w-full sm:w-auto px-10 py-3.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
              type="button"
            >
              Review Details
              <ArrowRight className="text-xl" />
            </button>
          </div>
        </form>
      </div>

      {/* Footer Help */}
      <p className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        Need help with your registration?{" "}
        <a className="text-primary font-semibold hover:underline" href="#">
          Contact our support team
        </a>
      </p>
    </div>
  );
}
