export interface SkillPillProps {
  skillName: string;
  skillIconUrl: string;
}

export const SkillPill = ({ skillIconUrl, skillName }: SkillPillProps) => {
  return (
    <div className="flex items-center border-8 border-black box-border rounded-full bg-black">
      <img src={skillIconUrl} className="h-6 rounded-full" />
      <span className="mx-4">{skillName}</span>
    </div>
  );
};
