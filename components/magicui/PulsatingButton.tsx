import React from "react";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export function PulsatingButton({
  className = "",
  children,
  pulseColor = "#cb7a32", // noble-500
  duration = "2s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={`group relative isolate flex cursor-pointer items-center justify-center rounded-full text-center text-black font-semibold text-lg transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10 px-8 py-4">{children}</div>
      
      {/* Button Background */}
      <div className="absolute inset-0 rounded-full bg-white z-0 overflow-hidden">
        {/* Subtle shine effect on hover to match previous premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out opacity-50" />
      </div>

      {/* Pulsating Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-[var(--pulse-color)] animate-[ping_var(--duration)_cubic-bezier(0,0,0.2,1)_infinite] opacity-30 -z-10" />
    </button>
  );
}