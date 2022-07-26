import Skill from "./Skill";

const KnowledgeSection = ({ skills, title, image }) => {
  return (
    <section className="knowledgeSection">
      <h2>{title}</h2>
      <div>
        <img src={image}></img>
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
