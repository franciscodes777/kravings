import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube, 
  FaPinterestP, 
  FaPaperPlane,
  FaHeart
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 font-sans pt-16 pb-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-800">
          
          {/* Brand Info (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="text-3xl font-bold text-white tracking-wider inline-block">
              Kravings<span className="text-[#E73F1E]">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Connecting a global community of food lovers to celebrate authentic African recipes, exchange homemade flavors, and unite over a shared passion for cooking.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-[#E73F1E] hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-[#E73F1E] hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-[#E73F1E] hover:text-white transition-colors">
                <FaXTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-[#E73F1E] hover:text-white transition-colors">
                <FaYoutube />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-[#E73F1E] hover:text-white transition-colors">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-white transition-colors">Explore Recipes</Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">Community Feed</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQs & Support</Link>
              </li>
            </ul>
          </div>

          {/* Regions & Cuisines */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Cuisines</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">West African Flavors</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">East African Delights</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">North African Tagines</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Southern African Braai</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Central African Stews</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Stay Cravings Ready</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get handpicked recipes and trending dishes delivered straight to your inbox weekly.
            </p>
            <form className="flex flex-col gap-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-gray-800 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#E73F1E] transition-colors"
                />
                <button 
                  type="button" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#E73F1E] hover:bg-[#c93518] text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1 text-gray-500">
            © {new Date().getFullYear()} Kravings Inc. Made with <FaHeart className="text-[#E73F1E]" /> for food lovers everywhere.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}