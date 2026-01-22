import React from "react";

interface AuroraTextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function AuroraText({
  className = "",
  children,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  return (
    <Component
      className={`relative inline-flex bg-[linear-gradient(110deg,#d3944e,45%,#f5ead6,55%,#d3944e)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}