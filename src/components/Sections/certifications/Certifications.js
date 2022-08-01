import info from "./certificationInfo";
import Course from "./Course";

const Certifications = () => {
  const totalHours = () => {
    let hours = 0;
    info.forEach((inf) => (hours += inf.hours));
    return hours.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <article className="certifications">
      <h2>Courses & Certifications</h2>
      {info.map((course, index) => {
        return <Course key={index} course={course} delay={index} />;
      })}
      <div className="time-invested">
        <p>
          Time invested : <span>+ {totalHours()}</span> hrs
        </p>
      </div>
    </article>
  );
};

export { Certifications };
