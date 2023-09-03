import AnchorLink from "react-anchor-link-smooth-scroll";

type NavbarLinkProps = {
  page: string;
  selectedPage: string;
  setSelectedPage: (val: string) => void;
};

const NavbarLink = ({
  page,
  selectedPage,
  setSelectedPage,
}: NavbarLinkProps) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        console.log(lowerCasePage);
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default NavbarLink;
