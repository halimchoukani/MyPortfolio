"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 h-[200vh] w-full", className)}
    >
      <div
        className={
          "sticky top-0 flex items-start  px-[1rem] py-[5rem] w-[80%] m-auto"
        }
      >
        <div className="flex flex-col gap-4 ">
          <h1 className="text-white text-[128px] text-center font-semibold mt-7">
            About Me
          </h1>
          <p
            ref={targetRef}
            className={
              "flex flex-wrap p-5 text-xl font-normal text-black/20 dark:text-white/20 md:p-8 md:text-xl lg:p-10 lg:text-2xl xl:text-3xl"
            }
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
