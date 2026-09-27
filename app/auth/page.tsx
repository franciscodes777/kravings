import { auth, signIn } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaArrowLeftLong, FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default async function Auth() {
  const session = await auth()
  // console.log(session);

  if(session){
    redirect("/add-recipe")
  }
  
  // Toggle this to true to see the Sign Up UI
  const isSignUp = false;

  return (
    <main className="min-h-dvh bg-gray-50 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">
        {/* Visual / Brand Side */}
        <div className="md:w-1/2 bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative hidden md:flex flex-col justify-between p-12 text-white">
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Top Logo */}
          <div className="relative z-10">
            <Link href="/" className="text-3xl font-bold tracking-wider">
              Kravings<span className="text-[#E73F1E]">.</span>
            </Link>
          </div>

          {/* Mid Content */}
          <div className="relative z-10 space-y-4">
            <span className="bg-[#FFDD9C] text-gray-900 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
              Join Our Culinary Community
            </span>
            <h2 className="text-4xl font-bold leading-tight">
              Celebrate and Share <br />
              <span className="text-[#FFDD9C]">African Culinary Art</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Unlock hundreds of authentic recipes, connect with passionate home
              cooks, and bring home the true flavors of Africa.
            </p>
          </div>

          {/* Footer Quote */}
          <div className="relative z-10 pt-6 border-t border-white/20 text-xs text-gray-300">
            "Food brings people together on a level that's very separate from
            words."
          </div>
        </div>

        {/* Auth Form Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative bg-white">
          {/* Top Bar Navigation */}
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#E73F1E] transition-colors"
            >
              <FaArrowLeftLong /> Home
            </Link>
            <div className="text-sm">
              <span className="text-gray-500">
                {isSignUp ? "Already a member?" : "Don't have an account?"}
              </span>{" "}
              <Link
                href={isSignUp ? "/signin" : "/signup"}
                className="font-bold text-[#E73F1E] hover:underline cursor-pointer ml-1"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {isSignUp
                ? "Join Kravings to start bookmarking and sharing recipes."
                : "Enter your details to access your saved recipes and account."}
            </p>
          </div>

          {/* Social Auth Button */}
          <div className="space-y-4">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >    
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-4 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <FcGoogle className="text-2xl" />
              <span>Sign in with Google</span>
            </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider absolute">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form UI */}
          <div className="space-y-4">
            {/* Full Name Field (Sign Up Only) */}
            {isSignUp && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Chef Amina"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#E73F1E]/50 transition-all text-gray-900"
                  />
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="amina@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#E73F1E]/50 transition-all text-gray-900"
                />
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Password
                </label>
                {!isSignUp && (
                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-[#E73F1E] hover:underline"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#E73F1E]/50 transition-all text-gray-900"
                />
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Terms Checkbox (Sign Up Only) */}
            {isSignUp && (
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="w-4 h-4 text-[#E73F1E] border-gray-300 rounded focus:ring-[#E73F1E] cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-gray-500">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-gray-900 font-semibold underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-gray-900 font-semibold underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
            )}

            {/* Action Button */}
            <button
              type="button"
              className="w-full bg-[#E73F1E] hover:bg-[#c93518] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-[#E73F1E]/20 mt-2 cursor-pointer"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
