import softskills from "./softskills.json";
import Icons from "./Icons";
import Team  from './team.svg'

//import Avatar from "../../Avatar";

const SoftSkills = () => {
  return (
    <article className="softSkills">
      <section>
        {softskills.map((skill, key) => {
          return (
            <div key={key}>
                <h3>{skill.title}</h3>
                <img src={Team} />
                {skill.body.map((p, index)=> {
                  return <p key={index}>{p}</p>
                })}
            </div>
          );
        })}
      </section>
    </article>
  );
};

export { SoftSkills };
