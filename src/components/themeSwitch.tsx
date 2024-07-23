"use client";
import { useTheme } from "next-themes";
import { useRef } from "react";
export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const handleSwitch = () => {
    if (!ref.current) {
      return;
    }
    switch (theme) {
      case "dark":
        setTheme("light");
        ref.current.textContent = "light";
        break;
      case "light":
        setTheme("dark");
        ref.current.textContent = "dark";
        break;

      default:
        setTheme("dark");

        break;
    }

    console.log(theme);
  };

  return (
    <div
      ref={ref}
      onClick={handleSwitch}
      className="border-b pb-2 fixed right-16 bottom-16 text-xl cursor-pointer border-[--border]"
    >
      dark
    </div>
  );
};
