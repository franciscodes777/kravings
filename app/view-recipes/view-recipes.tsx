
"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; 
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { 
  FaClock, 
  FaUtensils, 
  FaListCheck, 
  FaBasketShopping,
  FaArrowRight,
  FaTrashCan
} from "react-icons/fa6";
import { db } from "@/config/firebase";

// Updated to perfectly match your Firestore DB schema
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

// Added type 'any' to session to prevent TypeScript build errors
export default function RecipesFeed({ session }: { session: any }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleFetch = async () => {
    try {
      const postArr: Recipe[] = [];
      const querySnapshot = await getDocs(collection(db, "recipes"));
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();

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
            month: "short", day: "numeric", year: "numeric"
          });
        }

        const postObj: Recipe = {
          id: doc.id,
          authorEmail: data.authorEmail || "",
          authorImg: data.authorImg || "",
          authorName: data.authorName || "Community Chef",
          createdAt: formattedDate,
          title: data.title || "Untitled Recipe",
          method: data.method || "Standard",
          duration: data.duration || 0,
          ingredients: parsedIngredients,
          instructions: parsedInstructions,
        };
        
        postArr.push(postObj);
      });
      
      setRecipes(postArr);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      alert("Something went wrong while fetching recipes.");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "recipes", id));
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("Failed to delete recipe. Check your permissions.");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="min-h-screen font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">Community Recipes</h1>
          <p className="text-gray-500 text-sm mt-1">
            Explore freshly posted recipes from home cooks and chefs around the world.
          </p>
        </div>

        {/* 2 Cards Per Line Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <article 
              key={recipe.id} 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between space-y-5 relative group"
            >
              <div className="space-y-5">
                
                {/* 1. Author's Header & Delete Button */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E73F1E] font-bold text-base overflow-hidden shrink-0">
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
                      <h3 className="font-bold text-gray-900 text-sm">{recipe.authorName}</h3>
                      <p className="text-xs text-gray-500">{recipe.createdAt}</p>
                    </div>
                  </div>
                  
                  {/* Render delete button only if logged in user is the author */}
                  {session?.user?.email === recipe.authorEmail && (
                    <button 
                      onClick={() => handleDelete(recipe.id)}
                      title="Delete Recipe"
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <FaTrashCan className="text-base" />
                    </button>
                  )}
                </div>

                {/* 2. Recipe Title & Badges */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {recipe.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                    <span className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                      <FaUtensils className="text-[#E73F1E]" /> 
                      {recipe.method}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                      <FaClock className="text-[#E73F1E]" /> 
                      {recipe.duration} mins
                    </span>
                  </div>
                </div>

                {/* 3. Truncated Ingredients */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FaBasketShopping className="text-[#E73F1E]" /> Ingredients
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    {recipe.ingredients.slice(0, 2).map((ingredient, idx) => (
                      <li key={idx} className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E73F1E] shrink-0" />
                        <span className="truncate">{ingredient}</span>
                      </li>
                    ))}
                    {recipe.ingredients.length > 2 && (
                      <li className="text-gray-400 italic text-[11px] font-medium pt-0.5">
                        + {recipe.ingredients.length - 2} more ingredients...
                      </li>
                    )}
                  </ul>
                </div>

                {/* 4. Truncated Instructions */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FaListCheck className="text-[#E73F1E]" /> Instructions
                  </h4>
                  <div className="text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <p className="line-clamp-2 leading-relaxed">
                      <strong className="text-[#E73F1E] mr-1">1.</strong> 
                      {recipe.instructions[0] || "No instructions provided."}
                    </p>
                    {recipe.instructions.length > 1 && (
                      <p className="text-gray-400 italic text-[11px] font-medium mt-1">
                        + {recipe.instructions.length - 1} more steps...
                      </p>
                    )}
                  </div>
                </div>

              </div>

              {/* Read More Link */}
              <div className="pt-2 border-t border-gray-100">
                <Link 
                  href={`/view-recipes/${recipe.id}`} 
                  className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold py-2.5 rounded-xl text-sm transition-colors shadow-sm"
                >
                  Read Full Recipe
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  );
}