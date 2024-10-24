"use client";

import { ImgRotateForward, Textfade } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 h-screen w-screen items-center justify-center">
      <Textfade />
      <ImgRotateForward />
    </div>
  );
}
