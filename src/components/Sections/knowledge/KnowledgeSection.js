import Skill from "./Skill";

const KnowledgeSection = ({ skills, title, image }) => {
  return (
    <section className="knowledgeSection">
      <h2>{title}</h2>
      <div>
        {image && <img src={image} alt="astronaut"></img>}
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
