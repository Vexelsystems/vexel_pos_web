"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Share,
  MapPin,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { companyDetails } from "@/lib/companydetails";
import { showSuccess, showError } from "@/lib/toast-utils";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting contact form..."); // Debug log
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      showError("Form incomplete", "Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Mock submission success:", data);

      showSuccess(
        "Message Received!",
        "Thank you for reaching out. We will get back to you shortly.",
      );

      setShowSuccessModal(true);
      form.reset();
    } catch (error: any) {
      console.error("Error adding document: ", error);
      const errorMessage =
        error?.message || "Connection failed. Please check your internet.";
      setSubmitError(errorMessage);

      showError("Submission Failed", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-transparent overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
      <div className="w-[90%] md:w-[80%] mx-auto max-w-[1920px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionWrapper type="slideLeft">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl lg:text-4xl font-black text-foreground leading-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                  Grow?
                </span>
              </h2>
              <p className="text-lg text-foreground/60">
                You have ideas, we have the skills. Let's talk about how we can
                help you build something amazing.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold text-foreground">
                    {companyDetails.contact.email}
                  </span>
                </div>
                <a
                  href={`tel:${companyDetails.contact.phone}`}
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <span className="font-bold text-foreground">
                    {companyDetails.contact.phone}
                  </span>
                </a>
                <a
                  href={`https://wa.me/${companyDetails.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent("Hi, I want to know more about Vexel Systems.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="size-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <Share size={20} />
                  </div>
                  <span className="font-bold text-foreground">
                    Chat on WhatsApp
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <span className="font-bold text-foreground">
                    {companyDetails.address.city},{" "}
                    {companyDetails.address.country}
                  </span>
                </div>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper type="slideRight">
            <div className="bg-card/40 dark:bg-nav-bg/40 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl shadow-primary/5 border border-primary/10 dark:border-primary/20">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      className="rounded-lg border-primary/10 dark:border-primary/20 bg-card/40 dark:bg-nav-bg/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      className="rounded-lg border-primary/10 dark:border-primary/20 bg-card/40 dark:bg-nav-bg/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">
                      Mobile Number
                    </label>
                    <input
                      name="phone"
                      required
                      className="rounded-lg border-primary/10 dark:border-primary/20 bg-card/40 dark:bg-nav-bg/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none"
                      placeholder="+1 (555) 123-4567"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-bold text-foreground"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="rounded-lg border-primary/10 dark:border-primary/20 bg-card/40 dark:bg-nav-bg/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none"
                    >
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Custom Software</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="rounded-lg border-primary/10 dark:border-primary/20 bg-card/40 dark:bg-nav-bg/40 backdrop-blur-sm text-foreground p-3 focus:ring-primary focus:border-primary outline-none"
                    placeholder="How can we help you?"
                    rows={4}
                  ></textarea>
                </div>

                {submitError && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium">
                    {submitError}
                  </div>
                )}

                <button
                  className="bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 rounded-[24px] shadow-2xl max-w-sm w-full p-8 border border-green-100 dark:border-green-900/30 animate-in zoom-in-95 duration-200 text-center">
            <div className="size-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-500 mb-6 mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-2">
              Message Received!
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Thank you for reaching out. We will get back to you shortly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
