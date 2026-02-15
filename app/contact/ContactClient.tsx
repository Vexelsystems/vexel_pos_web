"use client";

import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronsUpDown,
  Facebook,
  Twitter,
  Linkedin,
  Clock,
  ExternalLink,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { showSuccess } from "@/lib/toast-utils";
import { companyDetails } from "@/lib/companydetails";
import Link from "next/link";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

/**
 * CONTACT CLIENT COMPONENT
 *
 * Functional Overview:
 * - Integrations:
 *   1. Google Maps Iframe for location display.
 *   2. `sonner` for toast notifications on form submission.
 * - Interactivity: Dispatches `vexel-chat-open` custom event to trigger the global LiveChat widget.
 * - Data Source: Pulls company info (address, social links) from centralized configuration.
 */

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-foreground antialiased">
      {/* Page Heading */}
      <section className="bg-white py-12 lg:py-20 border-b border-gray-100 dark:border-zinc-800">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <MotionWrapper type="slideUp" duration={0.8}>
            <h1 className="text-foreground text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
              Let's talk{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                business.
              </span>
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
              Have questions about Vexel POS? We're here to help you streamline
              your operations. Reach out to our local team in{" "}
              {companyDetails.address.city}.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Column: Contact Details */}
            <MotionWrapper type="slideRight" delay={0.2}>
              <div className="bg-card dark:bg-zinc-900 rounded-3xl p-8 lg:p-10 h-full border border-gray-100 dark:border-zinc-800">
                <div className="space-y-10">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                        <Phone size={24} />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-foreground">
                        Call Us
                      </h3>
                      <p className="mt-1 text-foreground/60">
                        Mon-Fri from 9am to 5pm.
                      </p>
                      <a
                        href={`tel:${companyDetails.contact.phone}`}
                        className="mt-2 block text-xl font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        {companyDetails.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                        <Mail size={24} />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-foreground">
                        Email Us
                      </h3>
                      <p className="mt-1 text-foreground/60">
                        Our friendly team is here to help.
                      </p>
                      <a
                        href={`mailto:${companyDetails.contact.email}`}
                        className="mt-2 block text-xl font-bold text-primary hover:text-primary/80 transition-colors break-all"
                      >
                        {companyDetails.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                        <MapPin size={24} />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-foreground">
                        Visit Us
                      </h3>
                      <p className="mt-1 text-foreground/60">
                        Come say hello at our office HQ.
                      </p>
                      <address className="mt-2 not-italic text-lg font-bold text-foreground/80 leading-relaxed">
                        {companyDetails.address.street},<br />
                        {companyDetails.address.city},{" "}
                        {companyDetails.address.country}
                      </address>
                    </div>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
                  <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6 px-1">
                    Connect with us
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={companyDetails.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-gray-100 dark:border-zinc-700 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all"
                    >
                      <Facebook size={22} />
                    </a>
                    <a
                      href={companyDetails.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-gray-100 dark:border-zinc-700 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all"
                    >
                      <Linkedin size={22} />
                    </a>
                    <a
                      href={companyDetails.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-gray-100 dark:border-zinc-700 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all"
                    >
                      <Twitter size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* Right Column: Contact Form */}
            <MotionWrapper type="slideLeft" delay={0.4}>
              <div className="bg-white dark:bg-transparent rounded-3xl">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-foreground">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-foreground/60 text-lg">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    showSuccess(
                      "Message sent successfully!",
                      "Thank you for reaching out. We will get back to you shortly.",
                    );
                    (e.target as HTMLFormElement).reset();
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-foreground/80 mb-2 px-1 text-uppercase tracking-wider"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="business"
                        className="block text-sm font-bold text-foreground/80 mb-2 px-1 text-uppercase tracking-wider"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        placeholder="Vexel Inc."
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-foreground/80 mb-2 px-1 text-uppercase tracking-wider"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-foreground/80 mb-2 px-1 text-uppercase tracking-wider"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+94 77 123 4567"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-foreground/80 mb-2 px-1 text-uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 px-1">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-foreground/60"
                    >
                      I agree to the{" "}
                      <Link
                        href="/privacy"
                        className="text-primary font-bold hover:underline"
                      >
                        privacy policy
                      </Link>
                      .
                    </label>
                  </div>

                  <button
                    className="w-full py-5 bg-primary text-white font-black text-lg rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/25 flex items-center justify-center gap-3"
                    type="submit"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </MotionWrapper>
          </div>

          {/* Map Section */}
          <MotionWrapper type="slideUp" delay={0.6} className="mt-20 lg:mt-32">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800 h-[450px] relative group">
              <iframe
                allowFullScreen
                className="w-full h-full border-0 transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.187154846024!2d80.47891718975535!3d8.758121568317518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc1507cf1514a3%3A0xbc356c1f5bf8b349!2sVairavapuliyankulam%2C%20Vavuniya!5e0!3m2!1sen!2slk!4v1769667800972!5m2!1sen!2slk"
                title="Office Location Map"
              ></iframe>
              {/* Overlay Label */}
              <div className="absolute bottom-10 left-10 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 flex items-center gap-4 transition-transform group-hover:-translate-y-2">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-black text-foreground">
                    {companyDetails.name}
                  </p>
                  <p className="text-xs text-foreground/60">
                    {companyDetails.address.street},{" "}
                    {companyDetails.address.city}
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
