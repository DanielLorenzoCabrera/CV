import softskills from "./softskills.json";
import Waves from "./Waves";
import EmojiSwitch from "../../common/EmojiSwitch";
import SoftSkillsImages from "./SoftSkillsImages";

const SoftSkills = () => {
  
  return (
    <article className="softSkills">
      <section>
        {softskills.map((skill, key) => {
          return (
            <div key={key}>
              
              <h3>{skill.title}</h3>
              {skill.body.map((p, index) => {
                return <p key={index}>{p}</p>;
              })}
             {/* <EmojiSwitch time={1} emojis={skill.emojis}></EmojiSwitch>*/}
              {Waves[key]}
              <img src={SoftSkillsImages[skill.img]}></img>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export { SoftSkills };
