export interface ProjectCardProps {
  title: string;
  projectUrl: string;
  description: string;
}

export const ProjectCard = ({
  description,
  title,
  projectUrl,
}: ProjectCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-ui-blue-dark mb-2">
      <div className="flex items-center mb-4">
        <h3 className="text-lg mr-2 text-blue-500 font-bold">{title}</h3>
        <a href={projectUrl} target="_blank" className="cursor-pointer text-xs">
          demo ↗️
        </a>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
