/**
 * BaseEntity
 *
 * Shared audit fields common to all data models in the system.
 */
export interface BaseEntity {
  /** Soft delete flag */
  isDeleted?: boolean;
  /** Unix timestamp of deletion */
  deletedAt?: number;
  /** Auth UID of the user who created the record */
  createdBy: string;
  /** Auth UID of the user who last updated the record */
  updatedBy?: string;
  /** Unix timestamp of creation */
  createdAt: number;
  /** Unix timestamp of last update */
  updatedAt: number;
}

/**
 * UserProfile
 *
 * Represents the global user profile.
 */
export interface UserProfile extends Omit<BaseEntity, "updatedAt"> {
  uid: string;
  id: string; // Added for compatibility
  email: string;

  // Personal Info
  firstName: string;
  lastName: string;
  phone?: string;
  dob?: string; // Date of Birth (ISO or timestamp)

  // Business Info
  companyName?: string;
  country?: string;

  /** Primary platform role */
  role: "owner" | "staff" | "admin";

  // Subscription
  subscriptionId: string;
  subscriptionStatus?: "active" | "trial" | "expired" | "cancelled";
  isActive: boolean;

  /** Last accessed shop */
  currentShopId: string | null;
  platformStatus: "active" | "inactive" | "suspended" | "banned";
  lastLoginAt: number;
  emailVerified: boolean;
  phoneVerified: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  interval: "monthly" | "yearly";
  isActive: boolean;
}

export interface Subscription extends BaseEntity {
  id: string;
  userId: string;
  planId: string;
  status: "active" | "trial" | "past_due" | "cancelled";
  currentPeriodStart: number;
  currentPeriodEnd: number;
  cancelAtPeriodEnd: boolean;
}

/**
 * PosType
 *
 * Supported business categories for the POS system.
 */
export type PosType = "retail" | "restaurant" | "wholesale";

/**
 * Shop
 *
 * Represents a business entity.
 */
export interface Shop extends BaseEntity {
  id: string;
  ownerId: string; // Reference to users.userId
  subscriptionId?: string; // Link to global subscription
  shopName: string;
  /** Business category */
  posType: PosType;

  // Contact Info
  phone?: string;
  email?: string;
  website?: string;

  settings: {
    currency: string;
    timezone: string;
    taxRate: number;
    dateFormat: string;
    [key: string]: any;
  };

  // Status
  isActive: boolean;
  platformStatus?: "active" | "inactive" | "suspended" | "banned";

  logoUrl?: string;
  branches?: Branch[]; // Optional cached summary or just link
}

/**
 * Branch
 * Subcollection: /shops/{shopId}/branches/{branchId}
 */
export interface Branch extends BaseEntity {
  id: string;
  shopId: string;
  branchName: string;
  branchCode: string;
  address?: string;
  phone?: string;
  email?: string;
  isMainBranch: boolean;
  isActive: boolean;
  settings: Record<string, any>;
}

/**
 * Staff
 * Subcollection: /shops/{shopId}/branches/{branchId}/staff/{staffId}
 * OR /shops/{shopId}/staff/{staffId} (Depending on global vs local staff. Assuming Branch based on previous context, but user didn't specify parent. Sticking to Branch for now or Shop based on role)
 * Let's assume Shop Level for easier management, or Branch Level. User prompt had it separate.
 * Let's put it at Shop Level for now as employees often move, but assigned to branch.
 */
export interface Staff extends BaseEntity {
  id: string;
  userId?: string; // Link to global auth user if they have login
  fullName: string;
  email: string;
  phone: string;
  role: string; // admin, manager, cashier, etc.
  permissions: Record<string, boolean>;
  salary?: number;
  isActive: boolean;
  lastLoginAt?: number;
}

/**
 * Customer
 * Subcollection: /shops/{shopId}/customers/{customerId}
 */
export interface Customer extends BaseEntity {
  id: string;
  customerCode: string;
  fullName: string;
  phone: string;
  email?: string;
  address?: string;
  loyaltyPoints: number;
  totalSpent: number;
  creditBalance: number;
  isActive: boolean;
}

/**
 * Supplier
 * Subcollection: /shops/{shopId}/suppliers/{supplierId}
 */
export interface Supplier extends BaseEntity {
  id: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email?: string;
  address?: string;
  taxNumber?: string;
  totalPurchases: number;
  outstandingBalance: number;
  isActive: boolean;
}

/**
 * Category
 * Subcollection: /shops/{shopId}/categories/{categoryId}
 */
export interface Category extends BaseEntity {
  id: string;
  name: string;
  description?: string;
  parentCategoryId?: string;
  imageUrl?: string;
  isActive: boolean;
  sortOrder: number;
}

/**
 * Product (Global Definition)
 * Subcollection: /shops/{shopId}/products/{productId}
 */
export interface Product extends BaseEntity {
  id: string;
  productCode: string;
  barcode: string;
  name: string;
  categoryId: string;
  costPrice: number;
  sellingPrice: number; // Base selling price
  taxRate: number;
  unit: string;
  imageUrl?: string;
  trackStock: boolean;
  isActive: boolean;
}

/**
 * Inventory (Branch Specific)
 * Subcollection: /shops/{shopId}/branches/{branchId}/inventory/{productId}
 */
export interface InventoryRecord extends Omit<BaseEntity, "id"> {
  productId: string; // Document ID matches Product ID
  quantity: number;
  reorderLevel: number;
  branchSellingPrice?: number; // Override
}

/**
 * Purchase
 * Subcollection: /shops/{shopId}/branches/{branchId}/purchases/{purchaseId}
 */
export interface Purchase extends BaseEntity {
  id: string;
  supplierId: string;
  invoiceNumber: string;
  purchaseDate: number;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  paymentStatus: "paid" | "partial" | "unpaid";
  items: Array<{
    productId: string;
    quantity: number;
    costPrice: number;
    total: number;
  }>;
  branchId: string;
}

/**
 * Sale
 * Subcollection: /shops/{shopId}/branches/{branchId}/sales/{saleId}
 */
export interface Sale extends BaseEntity {
  id: string;
  saleCode: string;
  customerId?: string;
  soldByStaffId: string;

  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
    total: number;
    discount?: number;
  }>;

  totalAmount: number;
  taxAmount: number;
  discountAmount: number;
  grandTotal: number;

  paymentMethod: string;
  paymentStatus: "paid" | "partial" | "unpaid";
}

/**
 * Expense
 * Subcollection: /shops/{shopId}/branches/{branchId}/expenses/{expenseId}
 */
export interface Expense extends BaseEntity {
  id: string;
  expenseCode: string;
  categoryId?: string;
  description: string;
  amount: number;
  paymentMethod: string;
  paidTo?: string;
  incurredByStaffId?: string;
  date: number;

  isRecurring?: boolean;
  recurrencePattern?: string;
}

/**
 * Return (Sales Return)
 * Subcollection: /shops/{shopId}/branches/{branchId}/returns/{returnId}
 */
export interface SalesReturn extends BaseEntity {
  id: string;
  returnCode: string;
  saleId?: string;
  customerId?: string;
  returnedByStaffId: string;

  items: Array<{
    productId: string;
    quantity: number;
    refundAmount: number;
    condition: string;
  }>;

  totalAmount: number;
  taxAmount: number;
  discountAmount: number;
  refundAmount: number;
  reason: string;
}

/**
 * Purchase Return
 * Subcollection: /shops/{shopId}/branches/{branchId}/purchaseReturns/{returnId}
 */
export interface PurchaseReturn extends BaseEntity {
  id: string;
  purchaseId: string;
  supplierId: string;
  returnCode: string;
  processedByStaffId: string;

  items: Array<{
    productId: string;
    quantity: number;
    amount: number;
  }>;

  totalAmount: number;
  refundedAmount: number;
  reason: string;
}
