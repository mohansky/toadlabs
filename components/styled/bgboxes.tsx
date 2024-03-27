"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import GradientHeading from "./gradient-heading";

export function BackgroundBoxes() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <GradientHeading className="uppercase">Toadlabs</GradientHeading>
      <div className="text-center text-white w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"></div>
      <p className="text-center tracking-widest text-3xl mt-2 text-neutral-300 relative z-20">
        HOLOGRAPHIC SOLUTIONS
      </p>
    </div>
  );
}
