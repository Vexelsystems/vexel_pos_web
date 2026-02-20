import React, { useState } from "react";
import {
  Store,
  MapPin,
  Phone,
  Mail,
  Globe,
  Hash,
  User,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

interface StepIdentityProps {
  data: any;
  updateData: (newData: any) => void;
}

export default function StepIdentity({ data, updateData }: StepIdentityProps) {
  /**
   * showPassword (UI State Logic)
   * Toggle for masked/unmasked password input.
   */
  const [showPassword, setShowPassword] = useState(false);

  /**
   * handleChange (Binding Logic)
   * Maps input changes to the parent's generic state object.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h2 className="text-2xl font-black text-gray-900">Store Identity</h2>
        <p className="text-gray-500 text-sm">
          Tell us about your business and setup your admin account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Owner Name */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
            Owner Name *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="ownerName"
              value={data.ownerName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-sm"
              required
            />
          </div>
        </div>

        {/* Store Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
            Store Name *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <Store className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="storeName"
              value={data.storeName}
              onChange={handleChange}
              placeholder="e.g. Vexel Supermarket"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-sm"
              required
            />
          </div>
        </div>

        {/* Trade Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
            Trade/Legal Name
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <Hash className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="tradeName"
              value={data.tradeName}
              onChange={handleChange}
              placeholder="Registered business name"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-sm"
            />
          </div>
        </div>

        {/* Store Email */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
            Account Email *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              name="storeEmail"
              value={data.storeEmail}
              onChange={handleChange}
              placeholder="contact@business.com"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-sm"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
            Password *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="ownerPassword"
              value={data.ownerPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Store Address */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
            Store Address *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="storeAddress"
              value={data.storeAddress}
              onChange={handleChange}
              placeholder="Full physical address"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-sm"
              required
            />
          </div>
        </div>

        {/* Store Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
            Phone Number *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors z-10">
              <Phone className="w-4 h-4" />
            </div>
            <div className="absolute left-10 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-gray-200 pr-3 h-5 z-10 pointer-events-none select-none">
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider">
                LK
              </span>
              <span className="text-sm font-bold text-gray-900">+94</span>
            </div>
            <input
              type="tel"
              name="storePhone"
              value={data.storePhone}
              onChange={handleChange}
              placeholder="77 123 4567"
              className="w-full pl-[6rem] pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-sm"
              required
            />
          </div>
        </div>

        {/* Store Website */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
            Website (Optional)
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <Globe className="w-4 h-4" />
            </div>
            <input
              type="url"
              name="storeWebsite"
              value={data.storeWebsite}
              onChange={handleChange}
              placeholder="https://www.business.com"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
