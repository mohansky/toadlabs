import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-1 grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  subtitle, 
  href,
  image,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode; 
  image: string;
  href: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex gap-4">
        <Image
          src={image}
          alt="jordans"
          height="240"
          width="240"
          className="flex aspect-video  rounded-xl"
        />
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {subtitle}
          </div>
          <Link href={href}>
            <Button className="mt-5">Learn more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
