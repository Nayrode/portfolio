"use client";

import GlassSurface from "@/components/GlassSurface";
import LaserFlow from "@/components/LaserFlow";
import Silk from "@/components/Silk";
import { GitMerge, GitPullRequestArrow } from "lucide-react";
import Link from "next/link";

const contributions = [
  {
    title: "beep",
    description:
      "University project where I implemented a Rust microservice (messages) and contributed to the React frontend.",
    link: "https://github.com/beep-industries",
  },
  {
    title: "dev-sys-do/sealci",
    description:
      "University project where I learned about sequoia pgp (cryptography) and implemented a CI engine in Rust.",
    link: "https://github.com/dev-sys-do/sealci",
  },
  {
    title: "swingmx/webclient",
    description: "Contributed to swingmusic adding new shuffle functionality.",
    link: "https://github.com/swingmx/webclient/pull/57",
    merged: false,
  },
  {
    title: "swingmx/swingmusic",
    description: "Added shuffle functionality to swingmusic api.",
    link: "https://github.com/swingmx/swingmusic/pull/449",
    merged: false,
  },
  {
    title: "umami-software/umami",
    description: "Added CSS fix.",
    link: "https://github.com/umami-software/umami/pull/3956",
    merged: true,
  },
  {
    title: "lfnovo/open-notebook",
    description: "Fixed a bug for airgapped deployments.",
    link: "https://github.com/lfnovo/open-notebook/pull/414",
    merged: true,
  },
];

export default function Contributions() {
  return (
    <div className="flex flex-col h-screen">
      <Silk
        speed={5}
        scale={1}
        color="#2c003a"
        noiseIntensity={1.5}
        rotation={0}
      />
      <div className="flex flex-1 w-full h-full absolute">
        <LaserFlow
          className="w-10 h-full hidden lg:block"
          style={{}}
          dpr={typeof window !== "undefined" ? window.devicePixelRatio : 1}
          horizontalBeamOffset={-0.4}
          verticalBeamOffset={-0.5}
          horizontalSizing={0.2}
          verticalSizing={5}
          wispDensity={2.4}
          wispSpeed={15}
          wispIntensity={5}
          decay={0.5}
          falloffStart={1.13}
          color="#cf9eff"
        />
      </div>
      <div className="flex flex-col pl-10 pr-10 absolute pt-24 md:pt-10 lg:left-125 lg:right-125 gap-10">
        <h1 className="text-3xl md:text-5xl font-bold">Contributions</h1>
        <div className="flex flex-col gap-4 w-full overflow-y-auto max-h-[70vh]">
          {contributions.map((c, i) => (
            <div key={i} className="shrink-0">
              <GlassSurface width="100%" height={100} borderRadius={50}>
                <Link href={c.link} target="_blank" className="w-full">
                  <div className="flex justify-between items-center w-full px-5">
                    <div>
                      <h2 className="md:text-xl font-bold">{c.title}</h2>
                      <p className="text-xs md:text-md text-muted-foreground">
                        {c.description}
                      </p>
                    </div>
                    {c.merged ? (
                      <GitMerge className="text-purple-600" />
                    ) : c.merged == false ? (
                      <GitPullRequestArrow className="text-green-500" />
                    ) : null}
                  </div>
                </Link>
              </GlassSurface>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
