import Links from "./Links.json";
import { Info } from "./Info";
import EmojiSwitch from "../common/EmojiSwitch";
const About = () => {
  const { title, content } = Info;
  return (
    <article className="about">
      <section className="left-side">
        <div className="profile-img">
          <figure>
            <img src={require("../../assets/img/profile.jpg")} alt="" />
          </figure>
        </div>
        <div className="name">
          <h1>
            <span>Daniel</span> Lorenzo
          </h1>
          <h2>
            Software <span>Developer</span>
          </h2>
          <q>Life is a matter of attitude</q>
        </div>
        <div className="links">
          {Links.map((link, index) => {
            return (
              <a href={link.link} target="_blank" rel="noreferrer" key={index}>
                <i className={link.icon}></i>
              </a>
            );
          })}
        </div>
      </section>
      <section className="right-side">
        <h3>
          {title}
          <EmojiSwitch time={3} />
        </h3>
        {content.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </section>
    </article>
  );
};

export {About};
