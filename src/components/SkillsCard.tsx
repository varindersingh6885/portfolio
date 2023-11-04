import { SkillPill } from "./SkillPill";

export interface SkillsCardProps {
  skills: Skill[];
  skillTitle: string;
}

interface Skill {
  iconUrl: string;
  skillName: string;
}

export const SkillsCard = ({ skills, skillTitle }: SkillsCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-ui-blue-dark mb-2">
      <h3 className="text-lg mb-4">{skillTitle}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill) => {
          return (
            <div className="mr-2 mb-2">
              <SkillPill
                key={skill.skillName}
                skillName={skill.skillName}
                skillIconUrl={skill.iconUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
