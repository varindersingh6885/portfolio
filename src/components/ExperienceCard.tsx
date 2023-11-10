import { useState } from "react";
import nagarroIcon from "../assets/icons/nagarro.svg";
import { DesignationHierarchy } from "./DesignationHierarchy";

const designations = [
  {
    designationName: "Software Engineer",
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
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  return (
    <div className="p-4 rounded-lg bg-ui-blue-dark mb-2">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="https://www.linkedin.com/company/nagarro" target="_blank">
              <img src={nagarroIcon} className="h-10 w-10" />
            </a>
            <h3 className="mx-2 text-lg leading-none">
              {designations[0].designationName}
            </h3>
          </div>

          <span className="text-sm text-gray-400">March 2022 - Present</span>
        </div>
        <div className="flex justify-between items-center pl-10">
          <span className="mx-2 text-sm text-gray-400">
            <a
              href="https://www.linkedin.com/company/nagarro"
              className="hover:underline"
              target="_blank"
            >
              @Nagarro
            </a>
          </span>
          {!isDetailsVisible && (
            <button
              onClick={() => setIsDetailsVisible(true)}
              className="text-xs text-gray-400 hover:text-white hover:underline"
            >
              More details...
            </button>
          )}
        </div>
      </div>

      {isDetailsVisible ? (
        <div className="flex flex-wrap mt-4">
          <div className="sm:w-9/12 text-justify">
            <ul>
              <li>Developing and improving front-end web applications</li>
              <li>
                Writing unit test cases using Jest and React Testing Library and
                adhering to best practices of Test-Driven Development (TDD).
              </li>
              <li>
                Working with micro frontend architecture to create scalable and
                maintainable front-end solutions.
              </li>
              <li>
                Following the domain-driven design pattern to develop efficient
                and scalable web services.
              </li>
              <li>
                Managing databases and working with data in a type-safe and
                easy-to-use way using Prisma.
              </li>
              <li>
                Collaborating effectively with other team members to find
                creative solutions to complex problems.
              </li>
            </ul>
          </div>
          <div className="sm:w-3/12">
            <DesignationHierarchy designations={designations} />
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={() => setIsDetailsVisible(false)}
              className="text-xs text-gray-400 hover:text-white hover:underline"
            >
              Show less details
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
