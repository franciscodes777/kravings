// "use client";

// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FaUtensils, FaCheck, FaSpinner } from "react-icons/fa6";
// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogClose,
// } from "@/components/ui/dialog";

// export default function RecipeClient(_props) {
//   const [processing, setprocessing] = useState(false);
//   const [successOpen, setSuccessOpen] = useState(false);

//   const firstValues = {
//     title: "",
//     ingredients: "",
//     method: "",
//     duration: "",
//     instructions: "",
//   };

//   const valObject = Yup.object({
//     title: Yup.string()
//       .max(50, "Max of 50 characters")
//       .required("This is a required field"),

//     ingredients: Yup.string().required("This is a required field"),

//     method: Yup.string().required("This is a required field"),

//     duration: Yup.number()
//       .typeError("Duration must be a number")
//       .required("This is a required field"),

//     instructions: Yup.string().required("This is a required field"),
//   });

//   // Reusable input styling for consistency
//   const inputClass =
//     "w-full px-4 py-3 mt-1.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#E73F1E] focus:ring-1 focus:ring-[#E73F1E] transition-colors text-gray-900 placeholder-gray-400";

//   const labelClass = "block text-sm font-bold text-gray-700";

//   const errorClass =
//     "text-red-500 text-xs font-semibold mt-1.5 flex items-center gap-1";

//   return (
//     <main className="min-h-screen flex flex-col items-center py-10 px-4 md:px-8 font-sans">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

//         {/* Form Header */}
//         <div className="p-6 md:p-8 border-b border-gray-100">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
//             <div className="p-2.5 bg-[#E73F1E]/10 rounded-xl text-[#E73F1E]">
//               <FaUtensils className="text-xl" />
//             </div>

//             Post a Recipe
//           </h1>

//           <p className="text-gray-500 text-sm mt-2">
//             Share your culinary masterpiece with the community. Fill in the
//             details below.
//           </p>
//         </div>

//         {/* Form Body */}
//         <div className="p-6 md:p-8">
//           <Formik
//             initialValues={firstValues}
//             validationSchema={valObject}
//             onSubmit={async (values, { resetForm }) => {
//               setprocessing(true);

//               try {
//                 const response = await fetch("/api/recipes", {
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify(values),
//                 });

//                 const data = await response.json();

//                 if (!response.ok) {
//                   console.error("Error:", data.error);
//                   return;
//                 }

//                 console.log("Recipe added successfully:", data);

//                 // Clear the form
//                 resetForm();

//                 // Open success popup
//                 setSuccessOpen(true);
//               } catch (error) {
//                 console.error("Error submitting recipe:", error);
//               } finally {
//                 setprocessing(false);
//               }
//             }}
//           >
//             <Form className="space-y-6">

//               {/* Recipe Name */}
//               <div>
//                 <label htmlFor="title" className={labelClass}>
//                   Recipe Name
//                 </label>

//                 <Field
//                   type="text"
//                   name="title"
//                   id="title"
//                   placeholder="e.g. Smoky Party Jollof Rice"
//                   className={inputClass}
//                 />

//                 <ErrorMessage
//                   name="title"
//                   component="p"
//                   className={errorClass}
//                 />
//               </div>

//               {/* Grid for Method & Duration */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                 <div>
//                   <label htmlFor="method" className={labelClass}>
//                     Cooking Method
//                   </label>

//                   <Field
//                     type="text"
//                     name="method"
//                     id="method"
//                     placeholder="e.g. Boiling, Grilling, Baking"
//                     className={inputClass}
//                   />

//                   <ErrorMessage
//                     name="method"
//                     component="p"
//                     className={errorClass}
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="duration" className={labelClass}>
//                     Duration (Minutes)
//                   </label>

//                   <Field
//                     type="number"
//                     name="duration"
//                     id="duration"
//                     placeholder="e.g. 45"
//                     className={inputClass}
//                   />

//                   <ErrorMessage
//                     name="duration"
//                     component="p"
//                     className={errorClass}
//                   />
//                 </div>

//               </div>

//               {/* Ingredients */}
//               <div>
//                 <label htmlFor="ingredients" className={labelClass}>
//                   Ingredients
//                 </label>

//                 <Field
//                   as="textarea"
//                   rows={3}
//                   name="ingredients"
//                   id="ingredients"
//                   placeholder="e.g. 3 cups rice, 2 red onions, 1/2 cup tomato paste (separate with commas)"
//                   className={`${inputClass} resize-none`}
//                 />

//                 <ErrorMessage
//                   name="ingredients"
//                   component="p"
//                   className={errorClass}
//                 />
//               </div>

//               {/* Instructions */}
//               <div>
//                 <label htmlFor="instructions" className={labelClass}>
//                   Instructions
//                 </label>

//                 <Field
//                   as="textarea"
//                   rows={4}
//                   name="instructions"
//                   id="instructions"
//                   placeholder="Step-by-step guide to preparing the meal (separate with commas or line breaks)"
//                   className={`${inputClass} resize-none`}
//                 />

//                 <ErrorMessage
//                   name="instructions"
//                   component="p"
//                   className={errorClass}
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="pt-4 border-t border-gray-100">
//                 <button
//                   disabled={processing}
//                   type="submit"
//                   className={`w-full flex items-center justify-center gap-2 bg-[#E73F1E] hover:bg-[#c93518] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm shadow-[#E73F1E]/20 text-base`}
//                 >
//                   {processing ? (
//                     <span className="flex items-center gap-2">
//                       <FaSpinner className="animate-spin" />
//                       Submitting...
//                     </span>
//                   ) : (
//                     <span className="flex items-center gap-2">
//                       <FaCheck />
//                       Submit Recipe
//                     </span>
//                   )}
//                 </button>
//               </div>

//             </Form>
//           </Formik>
//         </div>
//       </div>

//       {/* SUCCESS POPUP */}
//       <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
//         <DialogContent showCloseButton={false}>
//           <DialogHeader className="items-center text-center">

//             {/* Success Icon */}
//             <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
//               <FaCheck className="text-2xl text-green-600" />
//             </div>

//             <DialogTitle className="text-2xl">
//               Recipe Submitted!
//             </DialogTitle>

//             <DialogDescription className="text-center">
//               Your recipe has been successfully added to the community.
//             </DialogDescription>

//           </DialogHeader>

//           {/* Close Button without asChild */}
//           <div className="flex justify-center mt-4">
//             <DialogClose
//               type="button"
//               className="px-6 py-2.5 bg-[#E73F1E] hover:bg-[#c93518] text-white font-semibold rounded-xl transition-colors focus:outline-none"
//             >
//               Done
//             </DialogClose>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </main>
//   );
// }
"use client";

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUtensils, FaCheck, FaSpinner } from "react-icons/fa6";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface RecipeClientProps {
  session?: any;
}

export default function RecipeClient(_props: RecipeClientProps) {
  const [processing, setprocessing] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const firstValues = {
    title: "",
    ingredients: "",
    method: "",
    duration: "",
    instructions: "",
  };

  const valObject = Yup.object({
    title: Yup.string()
      .max(50, "Max of 50 characters")
      .required("This is a required field"),

    ingredients: Yup.string().required("This is a required field"),

    method: Yup.string().required("This is a required field"),

    duration: Yup.number()
      .typeError("Duration must be a number")
      .required("This is a required field"),

    instructions: Yup.string().required("This is a required field"),
  });

  // Reusable input styling for consistency
  const inputClass =
    "w-full px-4 py-3 mt-1.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[#E73F1E] focus:ring-1 focus:ring-[#E73F1E] transition-colors text-gray-900 placeholder-gray-400";

  const labelClass = "block text-sm font-bold text-gray-700";

  const errorClass =
    "text-red-500 text-xs font-semibold mt-1.5 flex items-center gap-1";

  return (
    <main className="min-h-screen flex flex-col items-center py-10 px-4 md:px-8 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

        {/* Form Header */}
        <div className="p-6 md:p-8 border-b border-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-2.5 bg-[#E73F1E]/10 rounded-xl text-[#E73F1E]">
              <FaUtensils className="text-xl" />
            </div>

            Post a Recipe
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Share your culinary masterpiece with the community. Fill in the
            details below.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8">
          <Formik
            initialValues={firstValues}
            validationSchema={valObject}
            onSubmit={async (values, { resetForm }) => {
              setprocessing(true);

              try {
                const response = await fetch("/api/recipes", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });

                const data = await response.json();

                if (!response.ok) {
                  console.error("Error:", data.error);
                  return;
                }

                console.log("Recipe added successfully:", data);

                // Clear the form
                resetForm();

                // Open success popup
                setSuccessOpen(true);
              } catch (error) {
                console.error("Error submitting recipe:", error);
              } finally {
                setprocessing(false);
              }
            }}
          >
            <Form className="space-y-6">

              {/* Recipe Name */}
              <div>
                <label htmlFor="title" className={labelClass}>
                  Recipe Name
                </label>

                <Field
                  type="text"
                  name="title"
                  id="title"
                  placeholder="e.g. Smoky Party Jollof Rice"
                  className={inputClass}
                />

                <ErrorMessage
                  name="title"
                  component="p"
                  className={errorClass}
                />
              </div>

              {/* Grid for Method & Duration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label htmlFor="method" className={labelClass}>
                    Cooking Method
                  </label>

                  <Field
                    type="text"
                    name="method"
                    id="method"
                    placeholder="e.g. Boiling, Grilling, Baking"
                    className={inputClass}
                  />

                  <ErrorMessage
                    name="method"
                    component="p"
                    className={errorClass}
                  />
                </div>

                <div>
                  <label htmlFor="duration" className={labelClass}>
                    Duration (Minutes)
                  </label>

                  <Field
                    type="number"
                    name="duration"
                    id="duration"
                    placeholder="e.g. 45"
                    className={inputClass}
                  />

                  <ErrorMessage
                    name="duration"
                    component="p"
                    className={errorClass}
                  />
                </div>

              </div>

              {/* Ingredients */}
              <div>
                <label htmlFor="ingredients" className={labelClass}>
                  Ingredients
                </label>

                <Field
                  as="textarea"
                  rows={3}
                  name="ingredients"
                  id="ingredients"
                  placeholder="e.g. 3 cups rice, 2 red onions, 1/2 cup tomato paste (separate with commas)"
                  className={`${inputClass} resize-none`}
                />

                <ErrorMessage
                  name="ingredients"
                  component="p"
                  className={errorClass}
                />
              </div>

              {/* Instructions */}
              <div>
                <label htmlFor="instructions" className={labelClass}>
                  Instructions
                </label>

                <Field
                  as="textarea"
                  rows={4}
                  name="instructions"
                  id="instructions"
                  placeholder="Step-by-step guide to preparing the meal (separate with commas or line breaks)"
                  className={`${inputClass} resize-none`}
                />

                <ErrorMessage
                  name="instructions"
                  component="p"
                  className={errorClass}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  disabled={processing}
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 bg-[#E73F1E] hover:bg-[#c93518] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm shadow-[#E73F1E]/20 text-base`}
                >
                  {processing ? (
                    <span className="flex items-center gap-2">
                      <FaSpinner className="animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaCheck />
                      Submit Recipe
                    </span>
                  )}
                </button>
              </div>

            </Form>
          </Formik>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent showCloseButton={false}>
          <DialogHeader className="items-center text-center">

            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <FaCheck className="text-2xl text-green-600" />
            </div>

            <DialogTitle className="text-2xl">
              Recipe Submitted!
            </DialogTitle>

            <DialogDescription className="text-center">
              Your recipe has been successfully added to the community.
            </DialogDescription>

          </DialogHeader>

          {/* Close Button without asChild */}
          <div className="flex justify-center mt-4">
            <DialogClose
              type="button"
              className="px-6 py-2.5 bg-[#E73F1E] hover:bg-[#c93518] text-white font-semibold rounded-xl transition-colors focus:outline-none"
            >
              Done
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}