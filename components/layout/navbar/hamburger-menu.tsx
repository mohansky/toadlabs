import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";

export default function HamburgerMenu() {
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
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className="absolute right-4 top-4 z-30">
          <IconMenu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent>
          <ThemeToggle />
          <div className="flex flex-col items-center space-y-10 mt-10">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
