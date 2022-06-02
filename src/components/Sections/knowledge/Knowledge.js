import Skills from "./Skills.json";
import KnowledgeSection from "./KnowledgeSection";

const Knowledge = () => {
  return (
    <article className="knowledge">
      <section>
        {Skills.map((section, index) => {
          return (
            <KnowledgeSection
              key={index}
              title={section.title}
              skills={section.skills}
            />
          );
        })}
      </section>
    </article>
  );
};

export { Knowledge };
