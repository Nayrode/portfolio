"use client";

import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Silk from "@/components/Silk";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Silk
          speed={5}
          scale={1}
          color="#2c003a"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="absolute flex flex-col w-full h-full justify-end p-8">
        <div className="w-full h-fit flex flex-col-reverse gap-2 lg:gap-0 lg:flex-row items-start lg:items-end justify-between">
          <div className="flex flex-col items-start justify-end h-full">
            <h1
              className={`${playfair.className} text-7xl lg:text-[17rem] font-bold text-white leading-none`}
            >
              Dorian
            </h1>
            <h1
              className={`${playfair.className} text-[7rem] lg:text-[16rem] font-bold text-white self-end leading-none`}
            >
              TETU
            </h1>
          </div>
          <div className="flex flex-col items-start lg:items-end lg:gap-2">
            <h3 className="text-xl lg:text-5xl text-muted-foreground lg:text-white">
              DevOps Engineer
            </h3>
            <Link
              href="https://github.com/Nayrode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-3xl text-muted-foreground lg:text-white cursor-pointer hover:underline"
            >
              github.com/Nayrode
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
