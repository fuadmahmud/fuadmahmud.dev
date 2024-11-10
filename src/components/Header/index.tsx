import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useGlobalQueryState } from "../../hooks";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getData, setData } = useGlobalQueryState();
  const [darkMode, setDarkMode] = useState(getData<boolean>("theme"));
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (menuName: string) => {
    setShowMenu(false);
    switch (menuName) {
      case "contact":
        window.location.href = "/#footer";
        break;
      case "about":
        window.location.href = "/#about";
        break;
      case "works":
        window.location.href = "/#works";
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      setData("theme", true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      setData("theme", false);
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 3000);

    return () => clearTimeout(timer);
  }, [showTooltip]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <header className="flex flex-row bg-white dark:bg-zinc-900 items-center justify-between h-16 w-full fixed z-10 p-4">
      <div
        className="relative cursor-pointer w-max"
        onClick={() => {
          handleDarkMode();
          if (darkMode) setShowTooltip(true);
        }}
      >
        {darkMode ? <MdOutlineDarkMode /> : <MdLightMode />}
        {showTooltip && (
          <p className={["text-xs text-white", styles.tooltip].join(" ")}>
            Honestly, I prefer dark mode to not burn your eyes, but here you go
          </p>
        )}
      </div>
      <div className="cursor-pointer hover:bg-slate-300/50 p-2 hover:rounded-2xl">
        <div onClick={() => setShowMenu(true)}>
          <div className="w-4 bg-[#52525b] dark:bg-white h-0.5" />
          <div className="w-4 bg-[#52525b] dark:bg-white h-0.5 mt-1" />
        </div>
      </div>
      {showMenu && (
        <aside className="flex flex-row h-screen w-full absolute top-0 z-20 transition-transform">
          <div
            className="w-1/2 h-full bg-white/50 dark:bg-zinc-900/50"
            onClick={() => setShowMenu(false)}
          />
          <div className="flex flex-col h-full bg-white dark:bg-zinc-900 py-8 px-4 w-1/2">
            <ul className="space-y-8">
              <Link to="/">
                <li className="border-b border-gray-300 pb-2 font-bold cursor-pointer">
                  Home
                </li>
              </Link>
              <li
                className="border-b border-gray-300 pb-2 font-bold cursor-pointer"
                onClick={() => handleClick("about")}
              >
                About
              </li>
              <li
                className="border-b border-gray-300 pb-2 font-bold cursor-pointer"
                onClick={() => handleClick("works")}
              >
                Blog & Projects
              </li>
              <li
                className="border-b border-gray-300 pb-2 font-bold cursor-pointer"
                onClick={() => handleClick("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
        </aside>
      )}
    </header>
  );
};

export default Header;
