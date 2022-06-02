import Skill from "./Skill";

const KnowledgeSection = ({ skills, title }) => {
  return (
    <section className="knowledgeSection">
      <h2>{title}</h2>
      <div>
        {skills.map((skill, index) => {
          return (
            <Skill key={index} name={skill.name} icon={skill.icon}></Skill>
          );
        })}
      </div>
    </section>
  );
};

export default KnowledgeSection;
