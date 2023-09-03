import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import NavbarLink from "./NavbarLink";

import MenuIcon from "../assets/menu-icon.svg";
import CloseIcon from "../assets/close-icon.svg";

type NavbarProps = {
  selectedPage: string;
  setSelectedPage: (val: string) => void;
  isTopOfPage: boolean;
};

const links = [
  {
    name: "Home",
  },
  {
    name: "Skills",
  },
  {
    name: "Experience",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
];

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: NavbarProps) => {
  const isDesktopMode = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`z-40 w-full fixed top-0 py-6 ${navbarBackground}`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div>
          <h4 className="font-playfair text-3xl font-bold">VS</h4>
        </div>

        {isDesktopMode ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {links.map((link) => (
              <NavbarLink
                key={link.name}
                page={link.name}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <div>
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img src={MenuIcon} alt="menu-icon" />
            </button>
          </div>
        )}

        {!isDesktopMode && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={CloseIcon} title="close" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {links.map((link) => (
                <NavbarLink
                  key={link.name}
                  page={link.name}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
