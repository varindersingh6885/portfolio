import profileImage from "../assets/img-profile.svg";
import gmailIcon from "../assets/icons/gmail.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedInIcon from "../assets/icons/linkedin.svg";

type SocialIcon = {
  name: string;
  url: string;
  navigateToUrl: string;
};

const socialIcons: SocialIcon[] = [
  {
    name: "LinkedIn",
    url: linkedInIcon,
    navigateToUrl: "https://www.linkedin.com/in/varindersingh6885",
  },
  {
    name: "Github",
    url: githubIcon,
    navigateToUrl: "https://github.com/varindersingh6885",
  },
  {
    name: "Gmail",
    url: gmailIcon,
    navigateToUrl: "mailto:varindersingh6885@gmail.com",
  },
];

export const Navbar = () => {
  return (
    <nav className="rounded-lg flex justify-between items-center p-4 bg-ui-blue-dark">
      <div className="flex items-center">
        <div>
          <img src={profileImage} className="h-20" />
        </div>
        <div className="mx-4">
          <h1 className="text-4xl font-semibold">Varinder Singh</h1>
          <h2 className="text-xl ml-2">Frontend Developer</h2>
        </div>
      </div>
      <ul className="flex">
        {socialIcons.map((icon) => {
          return (
            <li key={icon.name} className="mx-2">
              <a
                className="cursor-pointer"
                href={icon.navigateToUrl}
                target="_blank"
              >
                <img src={icon.url} alt={icon.name} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
