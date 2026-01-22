import React from 'react';
import { cn } from "../lib/utils";
import { AnimatedList } from "./magicui/AnimatedList";

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: "New Estimate Appointment",
    description: "Lead Connector",
    time: "15m ago",
    icon: "📆",
    color: "#00C9A7",
  },
  {
    name: "Instagram",
    description: "When is the open house?",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "516.765.8976 Is Dune Road still available?",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New Deposit",
    description: "Stripe- $5,750",
    time: "2m ago",
    icon: "💰",
    color: "#1E86FF",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden text-left">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre text-black dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-600 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}

export const ClientNotifications: React.FC = () => {
    return (
      <section className="w-full px-6 py-24 border-t border-white/5 bg-black/40 relative overflow-hidden">
        {/* Subtle background effects for section */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-noble-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-4">
             What our client's <span className="text-gradient-gold">notifications</span> look like
           </h2>
           <p className="text-gray-400 mb-12">Constant activity. Constant growth.</p>
           
           <AnimatedListDemo />
        </div>
      </section>
    )
  }