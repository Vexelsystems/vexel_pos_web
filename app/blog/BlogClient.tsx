"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  ArrowRight,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Search,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Managing Inventory During New Year Season",
    excerpt:
      "High demand seasons can be chaotic. Learn the best strategies to keep your stock levels optimized without over-ordering.",
    date: "Oct 20, 2023",
    category: "Retail",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdIgsA5oNnRkSEx4wnOxLf9yCRTRqbSagJYpqTTg-EZZjqGcCVb6tsm_kjEjlSpqMMmfXG31XnrHmImz11EvqsXkMEh8BpPLVRgmoXj_yLpDMV_8LRty7ynpbNsUJxP6FXQ3pQpxWE788Znxnj7e9GqBsRCf34tYVyztwQV4lAX7NqWBk-n_V0KeDbN7I_P3f4_HLu-0Jxs-ZXDYufMVwWhODJIL7HwncpQcxmFvzzPyj6siRj3M5YC6Qedcg9-QvRAup-US1vGQI",
  },
  {
    id: 2,
    title: "How to Reduce Waste in Your Restaurant",
    excerpt:
      "Food waste eats into your profits. Implement these simple POS tracking methods to save money and the environment.",
    date: "Oct 18, 2023",
    category: "Hospitality",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJbqzecI1p2fXd2P0SEkTHNwvUtRvwOgZopyAuv6VTDdfv9PwlVehX2N8NiWcWZQ95XvmBnfM9J_HGDGnMPNOSdfxJcgbiRBoVEHXlLpo5CqN_HaVvleKBVTSDNXpqeWhH7rMQyPIwX_-MtBFLJuSdc232sQrxyhEho_XusHw1OA3NcvkNlAC583Zt0LH3tB9mwI1LqsKByhliH-zH4DmvdS7GWhYdK3uj8-HHS2nxS1qFDHawWvzjrGR4DfyN21ukeq6siaYp4Us",
  },
  {
    id: 3,
    title: "Why Cloud POS is Safer than Legacy Systems",
    excerpt:
      "Data security is paramount. Understand why moving your business data to the cloud offers better protection against localized failures.",
    date: "Oct 15, 2023",
    category: "Tech",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-J0cMWCm1bHpJgUeIfOc1OgI4LxoNaaZlekahOL2MOsr4nkJMrIEYfHqpee7gbJXUxCJrIKh-Ox0X0SxUr-qta6xMyagdXBmDsY1MI1Q-9Wb3FHyUOkFRmswfoZPD2mTywCTakoqZPNOeEK6I5BVKuOWcLt8SnT73lkx7a-TYxHbosUm03w4jZPPtP4VaXJ-P79560Z7V7Oi78Ic36_UtLycLEpMXLsgfkIDBgyRfSpgDfwSYuc5COjkR1p0Rvgh51hwIrsOpnLg",
  },
  {
    id: 4,
    title: "Choosing the Right Payment Gateway in Sri Lanka",
    excerpt:
      "A comprehensive guide to the top payment gateways available for local merchants and their integration fees.",
    date: "Oct 12, 2023",
    category: "Payment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLdlplNtHdjiZ-sqcyrnBeNRksYqC_kJkilFBOi7yAw88Os4_ZYLVYSM7dzpWzGyOHNzY4HCMQCaZyYbsq_IfPoMRpPlYlTeeJ9UFssxL0rGka4N0GNKtpEag8o66GDYQSzvrGBwNNrlVO1l1h4Ltjqq5Sx-BORiP3vC1TyUyAwPdMZv_tR0mUyI-10Lb8DXnhiwearz9emkWrTfcPvcT4sxvg4WKFDq4s-nmevqGFUJ4Q7LJ_oatKxV9WQOlBafqJzi2Ey1d-pCM",
  },
  {
    id: 5,
    title: "Building Customer Loyalty Programs That Work",
    excerpt:
      "Repeat customers are the backbone of small business. Here is how to structure a loyalty program that keeps them coming back.",
    date: "Oct 08, 2023",
    category: "Business",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoEeclorrZRKqIqCHiyLhNAm0V5pTzBjpmNQHkBOTDBPBKTvAPYlsjGAIK1OSTredYPgeqBnmaka4s6Nc3GhcYukP_I7y2U3FkaAxWqkRkahr_w90URAnrobm6S7rMUuixc7h4rkLf15p_Ss0o32z85_C_5NGRUp_hzyUTlJ0vSxqLk94urVobXxizszD-2IG8O7xzWf3RHAsd69XR4zR_pFAgPn73xZfcIV40mk8ueUPJ-P_z7DYOtNWZUHw_rgQkYNZj4Muu3MA",
  },
  {
    id: 6,
    title: "5 Metrics Every Restaurant Owner Should Track",
    excerpt:
      "Move beyond total sales. Discover the KPIs that truly reveal the health and efficiency of your restaurant operations.",
    date: "Oct 01, 2023",
    category: "Analytics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Wffnmp2O8z2tD2nM8QWy-RJ4GE-PeeRHP9_aZpzjZtnzHBvearQKsxLEXiIZwGsHeOwgyqCsbxRnEqOpdN2c2EUKNk9lKXgu93aua8_OXZdtXjFUl9gFfjTbNmLkyebum5x1dRrePjNhkE0QkQ0INQI4c0cXYHnTy27hIIKO-rb3FcWMvkKzCZCrWccvr8_c77aNnDFflaCXrUan4g153fp54KcYcjHv0RTciXU-D3I8AYGparDVx0TFwqca4yUWEDAnUxkQzW4",
  },
];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 antialiased min-h-screen flex flex-col transition-colors duration-200 selection:bg-primary/20">
      {/* Header Section */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper type="slideUp">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Business Insights{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500">
                &amp; POS Tips
              </span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto font-bold leading-relaxed">
              Helping Sri Lankan entrepreneurs grow smarter with expert advice
              on retail, hospitality, and business management.
            </p>
          </MotionWrapper>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <MotionWrapper type="slideUp" delay={0.2}>
          {/* Featured Post Section */}
          <section className="mb-20">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 flex flex-col md:flex-row group cursor-pointer transform hover:scale-[1.01] transition-all duration-500">
              <div className="md:w-2/3 relative h-80 md:h-auto overflow-hidden">
                <Image
                  fill
                  alt="Busy modern retail store checkout counter"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXXjXVdridUIiGlUWtaiMM28MWxECu5T11_1WtEo2WnVvJsvz0vWBCjMNCLlxoomlK0l7GhcjfVTPwk8TBGCqfykIWnzz1x6xi65f9HL5_lMxhZoDkECY3OGZbXF4z1FvrOKrQ5JUyqV7Fj1lCcGYXyomK0a3jnLOXRnbXWU9Dyixbko4iuh4Wcn0Wnh9wlWgniTmTMKeraF13Ky_hNKkRQlbd5uUYaDMOFFKGYyM55jB8dTcRa7GYKAYCWoHApLulmcwHiUGw04I"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent md:hidden"></div>
              </div>
              <div className="md:w-1/3 p-10 flex flex-col justify-center bg-slate-50 dark:bg-slate-900/50">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black bg-primary text-white uppercase tracking-widest shadow-lg shadow-primary/20">
                    Featured
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Oct 24, 2023
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 leading-tight group-hover:text-primary transition-colors tracking-tight">
                  The Future of Retail in Colombo: Digital Transformation
                </h2>
                <p className="text-slate-500 dark:text-gray-400 mb-8 line-clamp-3 font-bold">
                  Discover how local businesses are adapting to the digital age
                  by integrating cloud POS systems to streamline operations and
                  boost customer loyalty.
                </p>
                <div className="inline-flex items-center text-primary font-black hover:text-primary-dark transition-all group-hover:translate-x-2">
                  Read Full Story <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>
          </section>
        </MotionWrapper>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Blog Grid */}
          <div className="lg:w-3/4">
            <MotionWrapper type="slideUp" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  Latest Articles
                </h3>
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {["All", "Retail", "Hospitality", "Tech", "Payment"].map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 text-xs font-black rounded-full transition-all border-2
                        ${
                          activeCategory === cat
                            ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                            : "bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 text-slate-500 hover:border-primary hover:text-primary"
                        }
                      `}
                      >
                        {cat}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article, i) => (
                  <article
                    key={article.id}
                    className="bg-white dark:bg-slate-900 rounded-[1.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-800 overflow-hidden flex flex-col h-full group transform hover:-translate-y-1"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <Image
                        fill
                        alt={article.title}
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        src={article.image}
                      />
                      <span className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black text-primary uppercase tracking-[0.2em] shadow-lg">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">
                        {article.date}
                      </span>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-slate-500 dark:text-gray-400 text-sm mb-6 flex-1 line-clamp-3 font-bold">
                        {article.excerpt}
                      </p>
                      <div className="inline-flex items-center text-xs font-black text-primary hover:text-primary-dark mt-auto uppercase tracking-widest transition-all group-hover:gap-3 gap-2">
                        Read More{" "}
                        <ArrowRight size={14} className="stroke-[3]" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex justify-center">
                <nav
                  aria-label="Pagination"
                  className="relative z-0 inline-flex shadow-2xl rounded-2xl -space-x-px bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 overflow-hidden"
                >
                  <button className="relative inline-flex items-center px-4 py-4 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-r border-gray-100 dark:border-slate-800">
                    <span className="sr-only">Previous</span>
                    <ChevronLeft size={20} />
                  </button>
                  <button className="z-10 bg-primary text-white relative inline-flex items-center px-6 py-4 text-sm font-black shadow-inner shadow-black/10">
                    1
                  </button>
                  <button className="bg-white dark:bg-slate-900 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-6 py-4 text-sm font-black transition-colors border-l border-gray-100 dark:border-slate-800">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-4 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-l border-gray-100 dark:border-slate-800">
                    <span className="sr-only">Next</span>
                    <ChevronRight size={20} />
                  </button>
                </nav>
              </div>
            </MotionWrapper>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <MotionWrapper
              type="slideLeft"
              delay={0.6}
              className="space-y-10 sticky top-24"
            >
              {/* Search */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-5 py-4 bg-white dark:bg-slate-900 border-2 border-transparent focus:border-primary/20 rounded-2xl shadow-xl transition-all outline-none font-bold text-sm dark:text-white"
                />
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
                  size={20}
                />
              </div>

              {/* Newsletter Box */}
              <div className="bg-primary rounded-3xl p-8 shadow-2xl shadow-primary/20 text-white overflow-hidden relative group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6 text-white backdrop-blur-md border border-white/20">
                  <Mail size={28} />
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight">
                  Get Weekly Tips
                </h3>
                <p className="text-sm font-bold text-blue-100 mb-8 opacity-90">
                  Join 5,000+ local merchants receiving the best POS insights.
                </p>
                <form className="space-y-4">
                  <input
                    className="block w-full rounded-xl border-none shadow-inner bg-white/10 placeholder-white/50 text-white font-bold text-sm px-5 py-4 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
                    placeholder="you@example.com"
                    type="email"
                  />
                  <button
                    className="w-full flex justify-center py-4 px-6 rounded-xl shadow-2xl text-sm font-black text-primary bg-white hover:bg-blue-50 transition-all transform active:scale-95"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Popular Tags */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800">
                <h3 className="font-black text-gray-900 dark:text-white mb-6 uppercase tracking-[0.2em] text-[10px]">
                  Popular Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "POS Systems",
                    "Inventory",
                    "Tax (Sri Lanka)",
                    "Customer Service",
                    "Marketing",
                    "Hardware",
                  ].map((tag) => (
                    <button
                      key={tag}
                      className="text-[11px] font-black bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/20"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 text-slate-400">
                <Link href="#" className="hover:text-primary transition-colors">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Twitter size={24} />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </Link>
              </div>
            </MotionWrapper>
          </aside>
        </div>
      </main>
    </div>
  );
}
