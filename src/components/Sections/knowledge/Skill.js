const Skill = ({ name, icon }) => {
  return (
    <div className="skill">
      <i className={icon}></i>
      <p>{name}</p>
    </div>
  );
};

export default Skill;
