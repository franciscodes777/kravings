import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaUtensils, 
  FaEarthAfrica, 
  FaUsers
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col">
      {/* Hero Section */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative">
        <div className="min-h-dvh bg-black/60 text-white flex flex-col justify-center">
          <blockquote className="lg:w-1/2 mx-auto md:pt-30 pt-10 space-y-6 max-md:p-5">
            <h1 className="md:text-7xl text-5xl font-bold text-center leading-tight">
              Africa's Finest <br /> <span className="text-[#FFDD9C]">Dishes</span>
            </h1>
            <p className="tracking-wider md:text-lg text-center text-gray-200 leading-relaxed">
              Discover and share your dishes with the world on a platform built to connect a global community of food lovers, allowing you to celebrate every unique recipe, exchange homemade flavors, and unite over a shared passion for cooking.
            </p>
            <Link href={"#explore"} className="bg-white text-black flex items-center mx-auto md:mt-12 mt-8 w-fit p-2 pr-4 rounded-full gap-3 hover:scale-105 transition-transform font-medium shadow-lg">
              <button className="text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-[#E73F1E]">
                <FaArrowRightLong />
              </button>
              See Our Dishes
            </Link>
          </blockquote>
        </div>
      </section>

      {/* Features Section */}
      <section id="explore" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Join Kravings?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the rich heritage of African cuisine and share your culinary journey with a community that appreciates authentic flavors.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl text-white bg-[#E73F1E]">
                <FaUtensils />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Authentic Recipes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Explore thousands of homemade dishes passed down through generations, detailed step-by-step.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl text-gray-900 bg-[#FFDD9C]">
                <FaEarthAfrica />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Global Reach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Bring the taste of Africa to your kitchen, no matter where you are in the world. Connect across borders.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl text-white bg-[#E73F1E]">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Vibrant Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Engage with fellow food lovers, review dishes, share tips, and build your own culinary following.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-3 text-gray-900">Trending Kravings</h2>
              <p className="text-gray-600">The most loved recipes by our community this week.</p>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 font-medium hover:underline text-[#E73F1E]">
              View all recipes <FaArrowRightLong />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dish Card 1 */}
            <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  4.9 ★
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider mb-2 block text-[#E73F1E]">West Africa</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#E73F1E] transition-colors">Classic Jollof Rice</h3>
                <p className="text-gray-500 text-sm">By Chef Amina</p>
              </div>
            </div>

            {/* Dish Card 2 */}
            <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  4.8 ★
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider mb-2 block text-[#E73F1E]">East Africa</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#E73F1E] transition-colors">Nyama Choma</h3>
                <p className="text-gray-500 text-sm">By David K.</p>
              </div>
            </div>

            {/* Dish Card 3 */}
            <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  5.0 ★
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider mb-2 block text-[#E73F1E]">North Africa</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#E73F1E] transition-colors">Moroccan Tagine</h3>
                <p className="text-gray-500 text-sm">By Fatima M.</p>
              </div>
            </div>

            {/* Dish Card 4 */}
            <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  4.7 ★
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider mb-2 block text-[#E73F1E]">South Africa</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#E73F1E] transition-colors">Bobotie</h3>
                <p className="text-gray-500 text-sm">By Siyabonga R.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="#" className="inline-flex items-center gap-2 font-medium text-[#E73F1E]">
              View all recipes <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-white text-center bg-[#E73F1E]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Share Your Masterpiece?</h2>
          <p className="mb-10 text-lg text-white/90">Join thousands of food enthusiasts on Kravings. Create your profile, upload your family recipes, and start connecting today.</p>
          <Link href="/signup" className="inline-block bg-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-[#E73F1E]">
            Get Started for Free
          </Link>
        </div>
      </section>
    </main>
  );
}