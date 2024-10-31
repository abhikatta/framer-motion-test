"use client";

import {
  ImgRotateForward,
  TextReveal,
  Box,
  Textfade,
  Component,
  TorchEffect,
} from "@/components";

export default function Home() {
  return (
    <div
      className={`flex flex-col h-auto max-w-screen gap-[3rem] min-h-screen w-auto items-center justify-center`}
    >
      {/* <Textfade />
      <Box />
      <ImgRotateForward />
      <Component />
      <TextReveal /> */}
      <TorchEffect />
    </div>
  );
}
