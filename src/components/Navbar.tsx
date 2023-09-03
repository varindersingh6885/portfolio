import useMediaQuery from "../hooks/useMediaQuery";
import NavbarLink from "./NavbarLink";

type NavbarProps = {
  selectedPage: string;
  setSelectedPage: (val: string) => void;
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

const Navbar = ({ selectedPage, setSelectedPage }: NavbarProps) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  console.log(isAboveSmallScreens);
  return (
    <nav className="z-40 w-full fixed top-0 py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div>
          <h4 className="font-playfair text-3xl font-bold">VS</h4>
        </div>

        {isAboveSmallScreens ? (
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
          <div>toggler</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
