const Course = ({ course }) => {
  const { name, img, company, hours, status } = course;
  return (
    <div className="course">
      <img src={img} />
      <h3>{name}</h3>
      <p>Company: {company}</p>
      <p>Hours: {hours}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default Course;
