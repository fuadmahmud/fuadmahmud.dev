import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = (menuName: string) => {
    setShowMenu(false);
    switch (menuName) {
      case "contact":
        window.location.href = "#contact";
        break;
      case "about":
        window.location.href = "#about";
        break;
      default:
        break;
    }
  };
  return (
    <header className="flex flex-row items-center justify-end p-4 h-16 static ">
      <div className="cursor-pointer hover:bg-slate-300/50 p-2 hover:rounded-2xl ">
        <div onClick={() => setShowMenu(true)}>
          <div className="w-4 bg-white h-0.5" />
          <div className="w-4 bg-white h-0.5 mt-1" />
        </div>
      </div>
      {showMenu && (
        <aside className="flex flex-row absolute h-screen w-screen top-0 left-0 z-10 transition-transform">
          <div
            className="w-1/2 h-full bg-zinc-900/50"
            onClick={() => setShowMenu(false)}
          />
          <div className="flex flex-col h-full bg-zinc-900 py-8 px-4">
            <ul className="space-y-8">
              <li
                className="border-b border-gray-300 pb-2 font-bold"
                onClick={() => handleClick("about")}
              >
                About
              </li>
              <li className="border-b border-gray-300 pb-2 font-bold">
                Project and Experience
              </li>
              <li
                className="border-b border-gray-300 pb-2 font-bold"
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
