import React from "react";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

interface StepPackageProps {
  data: any;
  updateData: (newData: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const plans = [
  {
    id: "Starter",
    name: "Basic Plan",
    price: "Rs. 2,500",
    period: "/month",
    description: "Ideal for small retail shops and start-ups.",
    features: [
      "1 Location",
      "Single User Access",
      "Basic Reporting",
      "Standard Support",
    ],
    highlight: false,
  },
  {
    id: "Standard",
    name: "Growth",
    price: "Rs. 18,500",
    period: "/month",
    description: "For expanding businesses requiring more control.",
    features: [
      "Up to 5 Locations",
      "Cheque Printing",
      "Employee Permissions",
      "WhatsApp Integration",
    ],
    highlight: true,
  },
  {
    id: "Enterprise",
    name: "Enterprise",
    price: "Rs. 45,000",
    period: "/month",
    description: "Maximum power for large scale operations.",
    features: [
      "Unlimited Locations",
      "Priority Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
    highlight: false,
  },
];

export default function StepPackage({
  data,
  updateData,
  nextStep,
  prevStep,
}: StepPackageProps) {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 p-6">
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Choose your plan
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Select a package that fits your business scale. You can always upgrade
          later as you grow.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const isSelected = data.package === plan.id;
          const isHighlight = plan.highlight;

          return (
            <div
              key={plan.id}
              onClick={() => updateData({ package: plan.id })}
              className={`relative group flex flex-col p-8 rounded-xl transition-all cursor-pointer ${
                isHighlight
                  ? "border-2 border-primary bg-white dark:bg-primary/5 shadow-2xl shadow-primary/10 scale-105 z-10"
                  : "border border-slate-200 dark:border-primary/10 bg-white dark:bg-[#190f23]/40 hover:border-primary/30"
              } ${isSelected ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-[#190f23]" : ""}`}
            >
              {isHighlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <button
                type="button"
                className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all mb-8 ${
                  isHighlight
                    ? "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
                    : "border-2 border-primary/20 hover:border-primary/50 text-slate-700 dark:text-slate-300"
                } ${isSelected ? "bg-primary text-white border-primary" : ""}`}
              >
                {isSelected ? "Selected" : `Select ${plan.name}`}
              </button>

              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 relative pl-6"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 absolute left-0 top-0 ${
                        isHighlight
                          ? "text-primary fill-current/10"
                          : "text-primary"
                      }`}
                    />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="bg-primary/5 dark:bg-primary/5 border border-primary/10 rounded-xl p-8 text-center space-y-4">
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Need an <span className="text-primary font-bold">Enterprise</span>{" "}
          solution? If you have more than 5 locations or require custom
          integrations, contact our sales team for a custom quote.
        </p>
        <button
          type="button"
          className="text-primary font-bold text-sm hover:underline"
        >
          Chat with Sales →
        </button>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-200 dark:border-primary/10">
        <button
          onClick={prevStep}
          className="w-full sm:w-auto min-w-[160px] px-8 py-4 rounded-xl text-slate-500 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft className="text-xl" />
          Back
        </button>
        <button
          onClick={nextStep}
          className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
        >
          Next Step
          <ArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}
