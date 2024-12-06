import React from "react";
import TextRevealByWord from "../components/ui/text-reveal";
const text =
  "I'm a Third grade college student from Tunisia, I have a passion for web development and love to create new and exciting projects. I have experience working with both front-end and back-end technologies.";
function About() {
  return (
    <div className="z-10 text-white flex min-h-64 items-center justify-center border bg-white dark:bg-black">
      <TextRevealByWord text={text} />
    </div>
  );
}

export default About;
