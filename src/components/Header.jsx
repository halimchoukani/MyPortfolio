import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { Github } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
const links = [
  {
    title: "Facebook",
    icon: (
      <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.facebook.com/halim.choukani/",
  },

  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/halimchoukani/",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/halim-choukani-921488257/",
  },
];
function Header() {
  return (
    <div className="fixed bottom-5 flex items-center justify-center w-full z-50">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

export default Header;
