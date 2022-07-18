import Skill from "./Skill";

const KnowledgeSection = ({ skills, title, image }) => {
  return (
    <section className="knowledgeSection">
      <h2>{title}</h2>
      <div>
        <img src={image}></img>
        {skills.map((skill, index) => {
          return skill.name === "API" ? (
            <div className="skill">
              <p>{skill.name}</p>
            </div>
          ) : (
            <Skill key={index} name={skill.name} icon={skill.icon}></Skill>
          );
        })}
      </div>
    </section>
  );
};

export default KnowledgeSection;
