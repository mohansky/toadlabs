import { cn } from "@/lib/utils";
type GradientHeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
};

export default function GradientHeading({
  as: Comp = "h2",
  className,
  children,
  ...props
}: GradientHeadingProps) {
  return (
    <Comp
      className={cn(
        "relative z-20 inline md:text-8xl font-black tracking-wider font-sans",
        "bg-clip-text text-transparent bg-[linear-gradient(266deg,rgba(0,167,231,1)25%,rgba(118,226,68,1)50%,rgba(241,228,0,1)75%,rgba(255,0,0,1)100%)]",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
