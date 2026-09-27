import Link from "next/link";
import { FaEnvelope, FaLocationDot, FaPhone, FaArrowLeftLong } from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="min-h-dvh bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Contact Information Side */}
        <div className="bg-[#E73F1E] text-white p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[#FFDD9C] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-white rounded-full opacity-10 blur-2xl"></div>

          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-12 transition-colors w-fit">
              <FaArrowLeftLong /> Back to Home
            </Link>
            
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/80 leading-relaxed mb-12">
              Have a question about a recipe, want to partner with us, or just want to say hello? We'd love to hear from you. Fill out the form and our team will get back to you shortly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FaLocationDot className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Headquarters</h3>
                  <p className="text-white/80 mt-1">Abuja, Federal Capital Territory<br />Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-white/80 mt-1">hello@kravings.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-white/80 mt-1">+234 (0) 800 KRAVINGS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="p-12 lg:w-3/5 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name Field */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Jane Doe"
                  className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jane@example.com"
                  className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="How can we help you?"
                className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-[#E73F1E] hover:bg-[#c93518] text-white font-bold py-4 rounded-xl transition-colors shadow-md"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}