import { SeparatorLineVerticle } from "./SeparatorLineVerticle";

export interface DesignationHierarchyProps {
  designations: Designation[];
}

export interface Designation {
  designationName: string;
  joiningDate: string;
}

export const DesignationHierarchy = ({
  designations,
}: DesignationHierarchyProps) => {
  return (
    <ul className="list-none">
      {designations?.map((designation, index) => {
        return (
          <li key={designation.designationName}>
            <div className="text-center">
              <p className="leading-none mb-1">{designation.designationName}</p>
              <p className="text-xs text-gray-400">{designation.joiningDate}</p>
            </div>
            {index !== designations.length - 1 && <SeparatorLineVerticle />}
          </li>
        );
      })}
    </ul>
  );
};
