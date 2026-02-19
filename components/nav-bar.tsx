"use client";

import { ModeToggle } from "./mode-toggle";
import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  {
    label: "Contribs",
    ariaLabel: "View contributions",
    link: "/contributions",
  },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/nayrode" },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/dorian-tetu-417512196/",
  },
];

export default function NavBar() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering={true}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={["#cf9eff", "#000000"]}
      logoUrl="/path-to-your-logo.svg"
      accentColor="#5227FF"
      isFixed={true}
      headerClassName="pt-10 px-8"
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  );
}
