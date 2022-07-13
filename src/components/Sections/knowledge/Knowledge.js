import Skills from "./Skills.json";
import KnowledgeSection from "./KnowledgeSection";
import images from "../../../assets/img/images";

const sections = ["frontend", "backend", "tools"];

const Knowledge = () => {
  return (
    <article className="knowledge">
      {Skills.map((section, index) => {
        return (
          <KnowledgeSection
            key={index}
            title={section.title}
            skills={section.skills}
            image={images.knowledgeSection[section.title]}
          />
        );
      })}
    </article>
  );
};

export { Knowledge };
