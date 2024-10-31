"use client";
/* eslint-disable @next/next/no-img-element */
import useIsMobile from "@/lib/useIsMobile";
import { MouseEvent, useRef } from "react";

const TorchEffect = () => {
  const { isMobile } = useIsMobile();
  const torchRef = useRef<HTMLDivElement | null>(null);

  const mouseHandle = (e: MouseEvent<HTMLDivElement>) => {
    const torch = torchRef.current;

    if (torch) {
      torch.style.setProperty("--x", `${e.clientX}px`);
      torch.style.setProperty("--y", `${e.clientY}px`);
    }
  };
  return (
    <>
      <div
        onMouseMove={isMobile ? undefined : mouseHandle}
        className="relative w-screen h-screen items-center justify-center flex flex-col overflow-hidden bg-black "
      >
        <img
          alt=""
          src="/bgTorch.png"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div ref={torchRef} className="bg-light" />
    </>
  );
};

export default TorchEffect;
