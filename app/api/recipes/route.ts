import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";
import { auth } from "@/auth";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be signed in to add a recipe." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const {
      title,
      ingredients,
      method,
      duration,
      instructions,
    } = body;

    if (
      !title ||
      !ingredients ||
      !method ||
      !duration ||
      !instructions
    ) {
      return NextResponse.json(
        { error: "All recipe fields are required." },
        { status: 400 }
      );
    }

    const recipeRef = await adminDb.collection("recipes").add({
      title,
      ingredients,
      method,
      duration: Number(duration),
      instructions,
      authorEmail: session.user.email || "user",
      authorName: session.user.name ||"user",
      authorImg: session.user.image || "user",
      createdAt: new Date(),
    }); 

    console.log

    return NextResponse.json(
      {
        message: "Recipe added successfully.",
        id: recipeRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding recipe:", error);

    return NextResponse.json(
      { error: "Failed to add recipe." },
      { status: 500 }
    );
  }
}