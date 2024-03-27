"use client";
import React from "react";
import { FloatingNav } from "../../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function DesktopMenu() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Solutions",
      link: "/solutions",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="relative w-full hidden md:block">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
