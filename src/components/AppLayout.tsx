import { Navbar } from "./Navbar";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import { SkillsCard, SkillsCardProps } from "./SkillsCard";

const ReactPngUrl =
  "https://w7.pngwing.com/pngs/661/898/png-transparent-react-javascript-library-web-development-vue-js-funding-icon-logo-symmetry-web-development-thumbnail.png";

const skillTypes: SkillsCardProps[] = [
  {
    skillTitle: "Frontend Skills",
    skills: [
      {
        iconUrl: ReactPngUrl,
        skillName: "React",
      },
      {
        iconUrl: ReactPngUrl,
        skillName: "JavaScript",
      },
      {
        iconUrl: ReactPngUrl,
        skillName: "TypeScript",
      },
      {
        iconUrl: ReactPngUrl,
        skillName: "HTML",
      },
      {
        iconUrl: ReactPngUrl,
        skillName: "CSS",
      },
      {
        iconUrl: ReactPngUrl,
        skillName: "Redux",
      },
      {
        iconUrl: ReactPngUrl,
        skillName: "Figma",
      },
    ],
  },
  {
    skillTitle: "Backend Skills",
    skills: [
      {
        iconUrl: ReactPngUrl,
        skillName: "Node.js",
      },
      {
        iconUrl: ReactPngUrl,
        skillName: "Nest.js",
      },
    ],
  },
];

const projects: ProjectCardProps[] = [
  {
    description: `Built an online coding platform using the MERN (MongoDB, Express.js, React, Node.js) tech Integrated a rich text editor to write and view formatted problem descriptions.\nDeveloped a discussion forum for coding problems to facilitate communication and collaboration
    between users.\nIntegrated the Jdoodle API for code compilation to provide users with an easy way to test and run their code.`,
    iconUrl: ReactPngUrl,
    projectUrl: "https://acecoder.onrender.com/",
    title: "AceCoder",
  },
  {
    description: `Problem Statement:
    Given a list of project descriptions. Create an application that can be used to perform a search over these descriptions. The search should support free-form queries such as find the projects that use React Js in frontend and Python in backend.
    Solution:    
    Developed an application where I have integrated ChatGPT from OpenAI to pass the list of projects as a context. And then performing search queries as a prompt to ChatGPT to find the relevant projects.`,
    iconUrl: ReactPngUrl,
    projectUrl: "https://search-with-gpt.netlify.app/",
    title: "Search With GPT",
  },
];

export const AppLayout = () => {
  return (
    <div className="bg-ui-blue h-[100vh] w-[100vw] overflow-auto p-3 relative text-white">
      <Navbar />

      <div className="flex mt-2">
        <section className="w-8/12 pr-2" id="projects">
          <h2 className="text-center font-semibold mb-2">Projects</h2>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>

        <section className="w-4/12 pl-2" id="skills">
          <h2 className="mb-2 text-center font-semibold">Skills</h2>

          {skillTypes.map((skillType) => (
            <SkillsCard
              key={skillType.skillTitle}
              skillTitle={skillType.skillTitle}
              skills={skillType.skills}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
