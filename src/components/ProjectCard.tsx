import externalLinkIcon from "../assets/icons/external-link.svg";
import codeIcon from "../assets//icons/code.svg";

export interface ProjectCardProps {
  title: string;
  projectUrl: string;
  description: string;
  projectCodeRepoUrl: string;
}

export const ProjectCard = ({
  description,
  title,
  projectUrl,
  projectCodeRepoUrl,
}: ProjectCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-ui-blue-dark mb-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="text-lg mr-2 text-blue-500 font-bold">{title}</h3>
          <a
            href={projectUrl}
            title="Open Project"
            target="_blank"
            className="cursor-pointer text-xs"
          >
            <img
              className="h-5 opacity-80 hover:opacity-100"
              src={externalLinkIcon}
              alt="open-project"
            />
          </a>
        </div>
        <div>
          <a
            href={projectCodeRepoUrl}
            title="Open Source Code"
            target="_blank"
            className="cursor-pointer text-xs"
          >
            <img
              className="h-5 opacity-80 hover:opacity-100"
              src={codeIcon}
              alt="source-code"
            />
          </a>
        </div>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
