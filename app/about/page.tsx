import Image from "next/image";
import Link from "next/link";
import { 
  FaHeart, 
  FaGlobe, 
  FaBowlFood 
} from "react-icons/fa6";

export default function About() {
  return (
    <main className="min-h-dvh flex flex-col font-sans bg-gray-50">

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="md:text-6xl text-4xl font-bold leading-tight">
            Our Mission to Share <br />
            <span className="text-[#FFDD9C]">African Flavors</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Kravings is more than just a recipe platform. It’s a global movement celebrating the rich, diverse, and vibrant culinary heritage of the African continent.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">The Story Behind Kravings</h2>
            <div className="w-20 h-1 bg-[#E73F1E] rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We started Kravings with a simple realization: the world needed to experience the true depth of African cuisine. From the spicy stews of West Africa to the aromatic tagines of the North, our food tells a story of culture, history, and community.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our platform was built to give home cooks, professional chefs, and food enthusiasts a dedicated space to document their family recipes, exchange techniques, and unite over a shared passion for cooking. Whether you're miles away from home or simply curious about new flavors, Kravings is your kitchen away from home.
            </p>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
              [About Us Image / Kitchen Scene]
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do and build for our community.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 text-3xl text-white bg-[#E73F1E] rotate-3">
                <FaBowlFood className="-rotate-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize genuine, homemade recipes passed down through generations. We want the real ingredients, the real methods, and the real stories.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 text-3xl text-gray-900 bg-[#FFDD9C] -rotate-3">
                <FaHeart className="rotate-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                Food tastes better when shared. We foster a positive, supportive, and engaging environment where every cook feels valued and celebrated.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 text-3xl text-white bg-[#E73F1E] rotate-3">
                <FaGlobe className="-rotate-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                We bridge the gap between continents, bringing the diaspora closer to home and introducing the rest of the world to the magic of African dining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white">Join the Kravings Family</h2>
            <p className="mb-10 text-lg text-gray-300 max-w-2xl mx-auto">
              Whether you're here to discover your next favorite meal or share a secret family recipe, there's a place for you at our table.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform bg-[#E73F1E] text-white">
                Create an Account
              </Link>
              <Link href="/recipes" className="px-8 py-4 rounded-full font-bold border border-gray-500 hover:border-white text-white transition-all">
                Explore Recipes
              </Link>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#E73F1E] opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#FFDD9C] opacity-20 blur-3xl"></div>
        </div>
      </section>
    </main>
  );
}