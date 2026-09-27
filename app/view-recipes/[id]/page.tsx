"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { 
  FaClock, 
  FaUtensils, 
  FaListCheck, 
  FaBasketShopping,
  FaArrowLeft
} from "react-icons/fa6";

// Reusing the exact interface from your feed
interface Recipe {
  id: string;
  authorEmail: string;
  authorImg: string;
  authorName: string;
  createdAt: string; 
  duration: number | string;
  ingredients: string[];
  instructions: string[];
  method: string;
  title: string;
}

export default function SingleRecipePage() {
  const params = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      // Ensure we have an ID before fetching
      if (!params?.id) return;

      try {
        const docRef = doc(db, "recipes", params.id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          // 1. Parse string ingredients into an array
          let parsedIngredients: string[] = [];
          if (typeof data.ingredients === "string") {
            parsedIngredients = data.ingredients.split(',').map(i => i.trim()).filter(Boolean);
          } else if (Array.isArray(data.ingredients)) {
            parsedIngredients = data.ingredients;
          }

          // 2. Parse string instructions into an array
          let parsedInstructions: string[] = [];
          if (typeof data.instructions === "string") {
            parsedInstructions = data.instructions.split(/,|\n/).map(s => s.trim()).filter(Boolean);
          } else if (Array.isArray(data.instructions)) {
            parsedInstructions = data.instructions;
          }

          // 3. Convert Firestore Timestamp to readable Date String
          let formattedDate = "Just now";
          if (data.createdAt && typeof data.createdAt.toDate === 'function') {
            formattedDate = data.createdAt.toDate().toLocaleDateString("en-US", {
              month: "long", day: "numeric", year: "numeric"
            });
          }

          setRecipe({
            id: docSnap.id,
            authorEmail: data.authorEmail || "",
            authorImg: data.authorImg || "",
            authorName: data.authorName || "Community Chef",
            createdAt: formattedDate,
            title: data.title || "Untitled Recipe",
            method: data.method || "Standard",
            duration: data.duration || 0,
            ingredients: parsedIngredients,
            instructions: parsedInstructions,
          });
        } else {
          console.error("No such recipe!");
        }
      } catch (error) {
        console.error("Error fetching single recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-[#E73F1E] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-sans space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Recipe not found</h2>
        <button onClick={() => router.back()} className="text-[#E73F1E] hover:underline">
          Go back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen font-sans p-4 md:p-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
        >
          <FaArrowLeft /> Back to Recipes
        </button>

        {/* Recipe Header Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-sm space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {recipe.title}
            </h1>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-gray-700">
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <FaUtensils className="text-[#E73F1E]" /> 
                {recipe.method}
              </span>
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <FaClock className="text-[#E73F1E]" /> 
                {recipe.duration} mins
              </span>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E73F1E] font-bold text-xl overflow-hidden shrink-0">
              {recipe.authorImg ? (
                <img 
                  src={recipe.authorImg} 
                  alt={recipe.authorName} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              ) : (
                recipe.authorName.charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{recipe.authorName}</h3>
              <p className="text-sm text-gray-500">Posted on {recipe.createdAt}</p>
            </div>
          </div>
        </div>

        {/* Content Grid: Ingredients & Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Ingredients Column */}
          <div className="md:col-span-1 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <FaBasketShopping className="text-[#E73F1E] text-lg" /> Ingredients
            </h4>
            <ul className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-3">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#E73F1E] shrink-0 mt-2" />
                  <span>{ingredient}</span>
                </li>
              ))}
              {recipe.ingredients.length === 0 && (
                <li className="text-gray-500 italic text-sm">No ingredients listed.</li>
              )}
            </ul>
          </div>

          {/* Instructions Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <FaListCheck className="text-[#E73F1E] text-lg" /> Instructions
            </h4>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-6">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 text-[#E73F1E] font-bold text-sm shrink-0 shadow-sm">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
              {recipe.instructions.length === 0 && (
                <p className="text-gray-500 italic text-sm">No instructions provided.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}