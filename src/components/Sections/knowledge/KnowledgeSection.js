import Skill from "./Skill";

const KnowledgeSection = ({ skills, title }) => {
  return (
    <section className="knowledgeSection">
      <div>
        {skills.map((skill, index) => {
          return (
            <Skill key={index} name={skill.name} icon={skill.icon}></Skill>
          );
        })}
      </div>
      <h2>{title}</h2>
    </section>
  );
};

export default KnowledgeSection;
