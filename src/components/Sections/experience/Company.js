import Waves from '../softSkills/Waves'

const Company = ({ experience }) => {
  const { company, projects, link, image, start, end } = experience;
  return (
    <div className="company">
      <section>
        <figure className="company-img">
          <a href={link} target="_blank" rel="noreferrer">
            <img src={image} alt="" />
          </a>
        </figure>
        <h3>
            {company}
          <p>
            {start} - {end}
          </p>
        </h3>
      </section>
      <section className="projects">
        {projects.map((project, index) => {
          const { name, description, technology, img, link } = project;
          return (
            <div className="project" key={index}>
              {Waves[0]}
              <figure>
                <img src={img} alt="" />
              </figure>
              <h4>{name}</h4>
              <p>{description}</p>
              <div className="project-info">
                {link && <a href={link} target="_blank" rel="noreferrer" className="see-more">
                  See more
                </a>}
                <p className="technology">{technology}</p>

              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Company;
