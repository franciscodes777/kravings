"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaArrowLeftLong, 
  FaMagnifyingGlass, 
  FaChevronDown, 
  FaMessage,
  FaUtensils,
  FaUser,
  FaShieldHalved
} from "react-icons/fa6";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Questions", icon: FaQuestionCircleIcon },
    { id: "recipes", name: "Recipes & Cooking", icon: FaUtensils },
    { id: "account", name: "Account & Profile", icon: FaUser },
    { id: "community", name: "Community Guidelines", icon: FaShieldHalved },
  ];

  const faqs = [
    {
      category: "recipes",
      question: "How do I submit my own recipe to Kravings?",
      answer: "Once logged in, click the 'Post Recipe' button in your dashboard. You can upload high-resolution photos, add ingredients with precise measurements, step-by-step cooking instructions, and tag the origin region of your dish."
    },
    {
      category: "recipes",
      question: "Are the recipes on Kravings authentic African dishes?",
      answer: "Yes! Kravings is driven by a global community of home cooks, grandmothers, professional chefs, and culinary enthusiasts who share genuine family recipes from across the African continent and diaspora."
    },
    {
      category: "account",
      question: "Is Kravings completely free to use?",
      answer: "Yes, browsing, sharing, and saving recipes on Kravings is 100% free for all users. We believe authentic African culinary knowledge should be accessible to everyone."
    },
    {
      category: "recipes",
      question: "Can I save recipes to cook later?",
      answer: "Absolutely. Simply click the bookmark icon on any recipe card to save it directly to your personal cookbook collection inside your account."
    },
    {
      category: "community",
      question: "How do I report inappropriate content or inaccurate recipes?",
      answer: "Every recipe card and comment has a small flag icon. Click the icon to report the item, and our moderation team will review it within 24 hours to keep the community safe and authentic."
    },
    {
      category: "account",
      question: "How can I update my profile details or profile picture?",
      answer: "Navigate to your Account Settings from your user avatar menu. There you can update your bio, display name, culinary specialties, and profile picture anytime."
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-dvh bg-gray-50 font-sans py-12 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E73F1E] mb-8 font-medium transition-colors">
          <FaArrowLeftLong /> Back to Home
        </Link>

        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#E73F1E] font-bold uppercase tracking-widest text-sm bg-[#E73F1E]/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about sharing, discovering, and cooking African recipes on Kravings.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for answers (e.g. posting recipes, account, guidelines)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all text-gray-800"
            />
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#E73F1E] text-white shadow-md shadow-[#E73F1E]/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-lg md:text-xl">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#E73F1E] text-white rotate-180" : "bg-gray-100 text-gray-600"
                    }`}>
                      <FaChevronDown className="text-sm" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500 text-lg">No matching questions found.</p>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-2xl font-bold">Still have questions?</h3>
            <p className="text-gray-400">Can't find the answer you're looking for? Reach out to our team.</p>
          </div>
          <Link
            href="/contact"
            className="z-10 bg-[#E73F1E] hover:bg-[#c93518] text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shrink-0 shadow-md"
          >
            <FaMessage /> Contact Support
          </Link>
          {/* Background Decorative Glow */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FFDD9C] rounded-full opacity-10 blur-3xl"></div>
        </div>

      </div>
    </main>
  );
}

// Icon Helper Component
function FaQuestionCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-4.6 2.7-7.4 7.6-7.4 12.9l0 7.3c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-7.3c0-21.2 11.2-40.7 29.5-51.2l32.3-18.6c8.3-4.8 13.4-13.6 13.4-23.2c0-14.7-11.9-26.6-26.6-26.6l-58.3 0c-10 0-19 6.3-22.4 15.7l-4 11.4c-4.4 12.5-18.2 19-30.7 14.6s-19-18.2-14.6-30.7l4-11.4zM224 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
    </svg>
  );
}