import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

function Hero() {
  return (
    <AuroraBackground>
      <div className="dark:text-white h-[100vh] flex flex-col items-center justify-center gap-5">
        <div className="text-center text-9xl font-semibold uppercase">
          halim choukani
        </div>
        <div className="text-center text-3xl font-light capitalize">
          full-stack web developer{" "}
        </div>
      </div>
    </AuroraBackground>
  );
}

export default Hero;
