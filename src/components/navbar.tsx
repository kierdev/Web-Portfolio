"use client";
import { log } from "console";
import { useRef, useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ["home", "about", "works", "contact"];

  const ref = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between w-full text-2xl fixed bg-[--bg] h-20 z-10">
      <div className="py-4 px-8 flex flex-col w-full">
        <span className="w-3/4 text-sm md:text-xl">Kier Hagos</span>
        <span className="w-3/4 text-sm md:tex-xl text-[--primary]">
          Software Developer
        </span>
      </div>
      <div ref={ref} className="py-4 px-8 cursor-pointer w-1/4">
        <div className="text-right text-sm md:text-2xl" onClick={handleMenu}>
          menu
        </div>
        {isMenuOpen && (
          <div className="flex fixed flex-col gap-2 mt-4 text-xl text-right right-4">
            {sections.map((section, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    scrollToSection(section);
                  }}
                  className="inline-flex justify-end hover:border-b border-[--border] hover:text-[--primary] text-sm md:text-2xl"
                >
                  {section}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
