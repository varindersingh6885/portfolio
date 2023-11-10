import nagarroIcon from "../assets/icons/nagarro.svg";
import { DesignationHierarchy } from "./DesignationHierarchy";

const designations = [
  {
    designationName: "Engineer",
    joiningDate: "October 2023",
  },
  {
    designationName: "Associate Software Engineer",
    joiningDate: "September 2022",
  },
  {
    designationName: "Trainee",
    joiningDate: "March 2022",
  },
];

export const ExperienceCard = () => {
  return (
    <div className="p-4 rounded-lg bg-ui-blue-dark mb-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={nagarroIcon} className="h-10" />
          <h3 className="mx-2 text-lg">
            <a href="https://www.linkedin.com/company/nagarro" target="_blank">
              Nagarro
            </a>
          </h3>
        </div>

        <span className="text-xs text-gray-400">March 2022 - Present</span>
      </div>

      <div className="flex flex-wrap">
        <div className="sm:w-9/12">
          <ul>
            <li>● Developing and improving front-end web applications</li>
            <li>
              ● Writing unit test cases using Jest and React Testing Library and
              adhering to best practices of Test-Driven Development (TDD).
            </li>
            <li>
              ● Working with micro frontend architecture to create scalable and
              maintainable front-end solutions.
            </li>
            <li>
              ● Following the domain-driven design pattern to develop efficient
              and scalable web services.
            </li>
            <li>
              ● Managing databases and working with data in a type-safe and
              easy-to-use way using Prisma.
            </li>
            <li>
              ● Collaborating effectively with other team members to find
              creative solutions to complex problems.
            </li>
          </ul>
        </div>
        <div className="sm:w-3/12">
          <DesignationHierarchy designations={designations} />
        </div>
      </div>
    </div>
  );
};
