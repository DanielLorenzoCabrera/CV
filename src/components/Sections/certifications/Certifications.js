import info from "./certificationInfo";
import Course from "./Course";

const Certifications = () => {
  return (
    <article className="certifications">
      {info.map((course, index) => {
        return <Course course={course} />;
      })}
    </article>
  );
};

export { Certifications };
