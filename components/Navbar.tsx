
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Theme } from "./Theme";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMenu, IoMdRestaurant } from "react-icons/io";

interface NavLink {
  label: string;
  url: string;
}

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const { data: session } = useSession();

  const navLinks: NavLink[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Contact",
      url: "/contact",
    },
    {
      label: "FAQs",
      url: "/faqs",
    },
  ];

  return (
    <main className="flex items-center justify-between lg:px-20 py-2 shadow-md relative z-50">
      <Link href={"/"} className="flex items-center z-50">
        <Image
          src={"/logo.jpg"}
          alt="logo"
          width={800}
          height={800}
          className="w-15 h-15"
        />
        <p className="text-lg italic text-gray-800">Kravings</p>
      </Link>

      <div className="ml-auto flex items-center gap-6 max-lg:hidden">
        {navLinks.map((item, i) => (
          <article key={i} className="group">
            <Link href={item.url} className="text-lg">
              {item.label}
            </Link>
            <div className="h-1 w-full bg-white group-hover:bg-[#E73F1E] transition-all duration-500"></div>
          </article>
        ))}
      </div>

      <div className="flex items-center gap-6 ml-6 max-lg:hidden">
        <Link
          href={"/view-recipes"}
          style={{
            backgroundColor: Theme.primaryColor,
            borderColor: Theme.primaryColor,
          }}
          className="px-6 py-1 rounded-full text-white border text-lg"
        >
          View Recipes
        </Link>
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full focus:outline-none">
              <Avatar>
                <AvatarImage src={session?.user?.image || ""} />
                <AvatarFallback>
                  {session?.user?.name?.slice(0, 2).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href={"/add-recipe"} className="w-full block">
                    Add Recipe
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/profile"} className="w-full block">
                    View Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className="w-full text-left" onClick={() => signOut()}>
                    Log Out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            href={"/auth"}
            className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg"
          >
            Account <FaRegCircleUser />
          </Link>
        )}
      </div>

      {/* mobile and tablet view */}
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="lg:hidden z-50 text-3xl mr-2"
      >
        {navOpen ? <IoMdRestaurant /> : <IoIosMenu />}
      </button>

      <blockquote
        className={`lg:hidden absolute top-0 right-0 w-full h-dvh space-y-6 bg-white ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex pt-20 flex-col gap-10 items-center">
          {navLinks.map((item, i) => (
            <Link key={i} href={item.url} className="text-lg">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          <Link
            href={"/view-recipes"}
            style={{
              backgroundColor: Theme.primaryColor,
              borderColor: Theme.primaryColor,
            }}
            className="px-6 py-1 rounded-full text-white border text-lg"
          >
            View Recipes
          </Link>
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full focus:outline-none">
                <Avatar>
                  <AvatarImage src={session?.user?.image || ""} />
                  <AvatarFallback>
                    {session?.user?.name?.slice(0, 2).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href={"/add-recipe"} className="w-full block">
                      Add Recipe
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/profile"} className="w-full block">
                      View Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button className="w-full text-left" onClick={() => signOut()}>
                      Log Out
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href={"/auth"}
              className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg"
            >
              Account <FaRegCircleUser />
            </Link>
          )}
        </div>
      </blockquote>
    </main>
  );
}
