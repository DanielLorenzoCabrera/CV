import Skills from "./Skills.json";
import KnowledgeSection from "./KnowledgeSection";

const Knowledge = () => {
    console.log(Skills)
  return (
      
    <article className="knowledge">
      {Skills.map((section, index) => {
        return (
          <KnowledgeSection
            key={index}
            title={section.title}
            skills={section.skills}
          />
        );
      })}
    </article>
  );
};

export { Knowledge };
