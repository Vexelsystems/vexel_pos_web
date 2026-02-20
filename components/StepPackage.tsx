import {
  Check,
  Star,
  Zap,
  Crown,
  MessageSquare,
  Smartphone,
  Mail,
} from "lucide-react";

interface StepPackageProps {
  data: any;
  updateData: (data: any) => void;
}

export default function StepPackage({ data, updateData }: StepPackageProps) {
  /**
   * TOGGLE FEATURE LOGIC
   * Strategy: Multi-select array management.
   * Logic:
   * 1. Clone existing features array.
   * 2. If 'feature' exists, remove it (deselect).
   * 3. Else, push to array (select).
   * 4. Call updateData to sync with parent state.
   */
  const toggleFeature = (feature: string) => {
    const features = [...(data.features || [])];
    if (features.includes(feature)) {
      updateData({ features: features.filter((f: string) => f !== feature) });
    } else {
      updateData({ features: [...features, feature] });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-black tracking-tight text-foreground">
          Choose Your Power
        </h2>
        <p className="text-muted-foreground font-medium">
          Select the perfect engine for your business growth.
        </p>
      </div>

      {/* 
        POS CATEGORY SWITCH LOGIC
        - Strategy: Dual-toggle binding.
        - Logic: Shifts 'posCategory' state between 'Wholesale' and 'Retail'.
      */}
      <div className="flex justify-center mb-8">
        <div className="bg-muted p-1 rounded-2xl inline-flex relative">
          {["Wholesale", "Retail"].map((type) => (
            <button
              key={type}
              onClick={() => updateData({ posCategory: type })}
              className={`px-8 py-3 rounded-xl text-sm font-black transition-all duration-300 relative z-10 ${
                data.posCategory === type
                  ? "text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {type}
            </button>
          ))}
          <div
            className={`absolute top-1 bottom-1 w-[50%] bg-primary rounded-xl transition-all duration-300 ease-in-out shadow-md ${
              data.posCategory === "Retail"
                ? "left-[50%] translate-x-[-4px]"
                : "left-1"
            }`}
          />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div
          onClick={() => updateData({ plan: "starter" })}
          className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
            data.plan === "starter"
              ? "border-primary bg-primary/5 shadow-2xl shadow-primary/20"
              : "border-border bg-card hover:border-primary/50"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <h3 className="text-xl font-black text-foreground">Starter</h3>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-black">$29</span>
            <span className="text-muted-foreground font-bold">/mo</span>
            <p className="text-xs text-muted-foreground mt-2">
              Essential features for small businesses.
            </p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-emerald-500" /> 1 User Limit
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-emerald-500" /> Basic Reports
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-emerald-500" /> Email Support
            </li>
          </ul>
        </div>

        {/* Pro Plan - Highlighted */}
        <div
          onClick={() => updateData({ plan: "pro" })}
          className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-3 transform ${
            data.plan === "pro"
              ? "border-amber-500 bg-amber-500/5 shadow-2xl shadow-amber-500/20 scale-105 z-10"
              : "border-border bg-card hover:border-amber-500/50"
          }`}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
            Most Popular
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h3 className="text-xl font-black text-foreground">Professional</h3>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-black">$79</span>
            <span className="text-muted-foreground font-bold">/mo</span>
            <p className="text-xs text-muted-foreground mt-2">
              Advanced tools for growing teams.
            </p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Check className="w-4 h-4 text-amber-500" /> 5 Users
            </li>
            <li className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Check className="w-4 h-4 text-amber-500" /> Advanced Analytics
            </li>
            <li className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Check className="w-4 h-4 text-amber-500" /> Priority Support
            </li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div
          onClick={() => updateData({ plan: "enterprise" })}
          className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
            data.plan === "enterprise"
              ? "border-indigo-600 bg-indigo-50 shadow-2xl shadow-indigo-500/20"
              : "border-border bg-card hover:border-indigo-500/50"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
              <Crown className="w-5 h-5 fill-current" />
            </div>
            <h3 className="text-xl font-black text-foreground">Enterprise</h3>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-black">$199</span>
            <span className="text-muted-foreground font-bold">/mo</span>
            <p className="text-xs text-muted-foreground mt-2">
              Maximum power & scale.
            </p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-indigo-500" /> Unlimited Users
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-indigo-500" /> Custom Reports
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-indigo-500" /> Dedicated Manager
            </li>
          </ul>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="pt-8 border-t border-border">
        <h4 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6">
          Power-Up Addons
        </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* WhatsApp */}
          <div
            onClick={() => toggleFeature("whatsapp")}
            className={`p-4 rounded-2xl border cursor-pointer flex items-start gap-4 transition-all ${
              data.features?.includes("whatsapp")
                ? "border-emerald-500 bg-emerald-500/5 ring-1 ring-emerald-500"
                : "border-border bg-card hover:bg-muted/50"
            }`}
          >
            <div
              className={`mt-1 size-5 rounded-full border flex items-center justify-center transition-colors ${
                data.features?.includes("whatsapp")
                  ? "bg-emerald-500 border-emerald-500"
                  : "border-muted-foreground"
              }`}
            >
              {data.features?.includes("whatsapp") && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span className="font-bold text-sm">WhatsApp</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Automated receipts & alerts via WhatsApp.
              </p>
            </div>
          </div>

          {/* SMS */}
          <div
            onClick={() => toggleFeature("sms")}
            className={`p-4 rounded-2xl border cursor-pointer flex items-start gap-4 transition-all ${
              data.features?.includes("sms")
                ? "border-blue-500 bg-blue-500/5 ring-1 ring-blue-500"
                : "border-border bg-card hover:bg-muted/50"
            }`}
          >
            <div
              className={`mt-1 size-5 rounded-full border flex items-center justify-center transition-colors ${
                data.features?.includes("sms")
                  ? "bg-blue-500 border-blue-500"
                  : "border-muted-foreground"
              }`}
            >
              {data.features?.includes("sms") && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span className="font-bold text-sm">SMS Gateway</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Instant SMS notifications for customers.
              </p>
            </div>
          </div>

          {/* Email */}
          <div
            onClick={() => toggleFeature("email")}
            className={`p-4 rounded-2xl border cursor-pointer flex items-start gap-4 transition-all ${
              data.features?.includes("email")
                ? "border-purple-500 bg-purple-500/5 ring-1 ring-purple-500"
                : "border-border bg-card hover:bg-muted/50"
            }`}
          >
            <div
              className={`mt-1 size-5 rounded-full border flex items-center justify-center transition-colors ${
                data.features?.includes("email")
                  ? "bg-purple-500 border-purple-500"
                  : "border-muted-foreground"
              }`}
            >
              {data.features?.includes("email") && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-purple-600" />
                <span className="font-bold text-sm">Email Reports</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Daily sales summaries via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
