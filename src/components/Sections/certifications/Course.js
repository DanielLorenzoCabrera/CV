const Course = ({ course, delay }) => {
  const { img, company, name, hours, status, link } = course;
  const delayEffect = { animationDelay: delay * -2 + "s" };
  const setClassName = (companyName) => {
    return company.split(" ").join("").toLowerCase();
  };

  return (
    <div className={`course ${setClassName(company)}`}>
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
        {link && (
          <div className="see-more">
            <a href={link} target="_blank" rel="noreferrer">
              see more
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Course;
