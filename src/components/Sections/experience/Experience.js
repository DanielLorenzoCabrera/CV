import experience from "./experienceInfo";
import Company from "./Company";

const Experience = () => {
  return (
    <article className="experience">
      {experience.map((exp, index) => {
        return <Company key={index} experience={exp} />;
      })}
    </article>
  );
};

export { Experience };
