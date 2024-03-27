import clsx from "clsx";
type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
  className?: string;
  children: React.ReactNode;
};

export default function Heading({
  as: Comp = "h2",
  className,
  children,
  size = "lg",
  ...restProps
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "text-primary",
        size === "xxl" && "text-5xl md:text-8xl",
        size === "xl" && "text-4xl md:text-7xl",
        size === "lg" && "text-3xl md:text-5xl",
        size === "md" && "text-2xl md:text-4xl",
        size === "sm" && "text-xl md:text-3xl",
        size === "xs" && "text-md md:text-xl",
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
