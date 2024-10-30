"use client";

import {
  ImgRotateForward,
  TextReveal,
  Box,
  Textfade,
  Component,
} from "@/components";

export default function Home() {
  return (
    <div
      className={`flex flex-col h-auto max-w-screen gap-2 min-h-screen w-auto items-center justify-center`}
    >
      <Textfade />
      <Box />
      <ImgRotateForward />
      <Component />
      <TextReveal />
    </div>
  );
}
