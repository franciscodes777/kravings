import { 
  FaUser, 
  FaEnvelope, 
  FaArrowRightFromBracket, 
  FaImage
} from "react-icons/fa6";

export default function ProfileSettings() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Profile Info & Image Section */}
        <div className="p-8 flex flex-col items-center border-b border-gray-100 bg-gray-50/50">
          
          {/* Image Display */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-sm flex items-center justify-center text-4xl font-bold text-[#E73F1E] overflow-hidden">
              {/* Fallback Initial / Placeholder */}
              A
              {/* Example of an actual image tag to use: */}
              {/* <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
            </div>
            {/* Decorative Image Icon */}
            <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full border border-gray-200 shadow-sm text-gray-500">
               <FaImage className="text-xs" />
            </div>
          </div>

          {/* Name & Email Display */}
          <h2 className="text-2xl font-bold text-gray-900">Chef Amina</h2>
          <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
            <FaEnvelope className="text-gray-400" /> amina@example.com
          </p>
        </div>

        {/* Action Forms Section */}
        <div className="p-8 space-y-8">
          
          {/* Update Name Form ONLY */}
          <form action="/api/update-profile" method="POST" className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                Display Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue="Chef Amina"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#E73F1E] transition-colors text-gray-900"
                  required
                />
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl transition-colors shadow-sm"
            >
              Save Name
            </button>
          </form>

          <hr className="border-gray-100" />

          {/* Logout Form (NextAuth standard server-side signout) */}
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3 rounded-xl transition-colors"
            >
              <FaArrowRightFromBracket />
              Log Out
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}