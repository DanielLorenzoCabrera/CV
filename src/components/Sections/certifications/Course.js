const Course = ({ course, delay }) => {
  const { img, company, name, hours, status } = course;
  console.log(delay);
  return (
    <div className="course" style={{ animationDelay: delay * 0.2 + "s" }}>
      <section>
        <figure>
          <img src={img} />
        </figure>
        <div className="text-content">
          <h3>{name}</h3>
          <h4>{company}</h4>
        </div>
        <div className="hours">
          <p>{hours}</p>
          <p>hours</p>
        </div>
      </section>
      <section>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className={`progress ${status}`}></div>
          </div>
        </div>
        <div className="see-more">
          <a href="#">see more</a>
        </div>
      </section>
    </div>
  );
};

export default Course;
