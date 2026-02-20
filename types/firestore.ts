export type UserRole = "owner" | "staff";
export type PosType = "retail" | "restaurant" | "wholesale";

export interface UserDoc {
  name: string;
  email: string;
  role: UserRole;
  subscriptionId?: string;
  createdAt: number;
}

export interface Address {
  shopNumber: string;
  streetName: string;
  townVillage?: string;
  city: string;
  district?: string;
  stateProvince: string;
  postalCode: string;
  country: string;
}

export interface ShopDoc {
  ownerId: string;
  shopName: string;
  posType: PosType;
  platformStatus: "active" | "inactive" | "dead" | "banned" | "suspended";
  address: Address;
  subscriptionPlan: string;
  settings: Record<string, any>;
  createdAt: number;
}

export interface StaffDoc {
  staffId: string;
  name: string;
  role: string;
  createdAt: number;
}

export interface ProductDoc {
  productId: string;
  name: string;
  categoryId: string;
  price: number;
  stockQty: number;
  barcode: string;
  createdAt: number;
  updatedAt: number;
}
