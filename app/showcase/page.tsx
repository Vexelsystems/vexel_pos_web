"use client";

import { companyDetails } from "@/lib/companydetails";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Footer from "@/components/Footer";

export default function ShowcasePage() {
  return (
    <div className="font-sans bg-white text-foreground antialiased selection:bg-primary/20">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                  V
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">
                  Vexel Systems
                </span>
              </Link>
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                <Link
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/#solutions"
                >
                  Solutions
                </Link>
                <Link
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/pricing"
                >
                  Pricing
                </Link>
                <Link
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 mr-4"
                href="/login"
              >
                Log in
              </Link>
              <Link
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm transition-colors"
                href="/get-started"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Contact Details */}
          <MotionWrapper type="slideRight" duration={0.8}>
            <div className="relative">
              <div className="bg-card dark:bg-zinc-900 rounded-2xl p-8 lg:p-10 h-full border border-gray-100 dark:border-zinc-800">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's talk business.
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                  Have questions about Vexel POS? We're here to help you
                  streamline your operations. Reach out to our local team in{" "}
                  {companyDetails.address.city}.
                </p>
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                        <Phone size={24} />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        Call Us
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">
                        Mon-Fri from 9am to 6pm.
                      </p>
                      <a
                        className="mt-2 block text-lg font-medium text-primary hover:text-blue-700 transition-colors"
                        href={`tel:${companyDetails.contact.phone}`}
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
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        Email Us
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">
                        Our friendly team is here to help.
                      </p>
                      <a
                        className="mt-2 block text-lg font-medium text-primary hover:text-blue-700 transition-colors break-all"
                        href={`mailto:${companyDetails.contact.email}`}
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
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        Visit Us
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">
                        Come say hello at our office HQ.
                      </p>
                      <address className="mt-2 not-italic text-lg font-medium text-gray-800 dark:text-gray-200">
                        {companyDetails.address.street},<br />
                        {companyDetails.address.city},{" "}
                        {companyDetails.address.district}, Sri Lanka
                      </address>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-widest font-bold">
                    Connect with us on social media
                  </p>
                  <div className="flex space-x-4">
                    <a
                      className="text-gray-400 hover:text-primary transition-colors"
                      href={companyDetails.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        aria-hidden="true"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="text-gray-400 hover:text-primary transition-colors"
                      href={companyDetails.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        aria-hidden="true"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Column: Contact Form */}
          <MotionWrapper type="slideLeft" duration={0.8} delay={0.2}>
            <div className="lg:py-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send us a message
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Message sent!", {
                    description: "We will get back to you shortly.",
                  });
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary border-gray-300 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900 border transition-all hover:bg-white focus:bg-white"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="business-name"
                    >
                      Business Name
                    </label>
                    <div className="mt-1">
                      <input
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary border-gray-300 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900 border transition-all hover:bg-white focus:bg-white"
                        id="business-name"
                        name="business-name"
                        placeholder="Vexel Inc."
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary border-gray-300 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900 border transition-all hover:bg-white focus:bg-white"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary border-gray-300 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900 border transition-all hover:bg-white focus:bg-white"
                        id="phone"
                        name="phone"
                        placeholder="+94 77 123 4567"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary border-gray-300 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900 border transition-all hover:bg-white focus:bg-white resize-none"
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    id="privacy-policy"
                    name="privacy-policy"
                    type="checkbox"
                    required
                  />
                  <label
                    className="ml-2 block text-sm text-gray-600 dark:text-gray-400"
                    htmlFor="privacy-policy"
                  >
                    I agree to the{" "}
                    <Link
                      className="text-primary hover:text-blue-700 font-medium"
                      href="/privacy"
                    >
                      privacy policy
                    </Link>
                    .
                  </label>
                </div>
                <div>
                  <button
                    className="w-full inline-flex justify-center py-4 px-6 border border-transparent shadow-sm text-base font-semibold rounded-lg text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform transform active:scale-[0.99]"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </MotionWrapper>
        </div>

        {/* Map Section */}
        <MotionWrapper type="slideUp" duration={0.8} delay={0.4}>
          <div className="mt-16 lg:mt-24">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2">
              <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
                <iframe
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.187154846024!2d80.47891718975535!3d8.758121568317518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc1507cf1514a3%3A0xbc356c1f5bf8b349!2sVairavapuliyankulam%2C%20Vavuniya!5e0!3m2!1sen!2slk!4v1769667800972!5m2!1sen!2slk"
                  title="Office Location Map"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 bg-white dark:bg-zinc-900 py-3 px-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-xs">
                  <div className="text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">
                      Vexel Systems
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {companyDetails.address.street},{" "}
                      {companyDetails.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </main>

      <Footer />
    </div>
  );
}
