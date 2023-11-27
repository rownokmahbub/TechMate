import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={30} height={130} />
      <p className="text-xl font-bold">
        TechMate<span className="text-[#542BD7] text-2xl">.</span>
      </p>
    </div>
  );
}
