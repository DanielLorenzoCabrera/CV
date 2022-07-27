const Course = ({ course }) => {
  const { name, img, company, hours, status } = course;
  return (
    <div className="course">
      <figure>
        <img src={img} />
      </figure>
      <h3>
        {name.map((title, index) => {
          return <span key={index}>{title}</span>;
        })}
      </h3>
      <div>
        <p>{company}</p>
        <section>
          <p>
            <span>{hours}</span>hrs
          </p>
          <p className={status === "completed" ? "completed" : "inProgress"}>
            {status}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Course;
