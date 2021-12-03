import "./Skill.css";

const Skill = (props) => {
	const { name, icon } = props;
	if (icon == undefined)
		return (
			<div className="skill">
				<span>{name}</span>
			</div>
		);
	else
		return (
			<div className="skill">
				<img src={icon}></img>
				<span>{name}</span>
			</div>
		);
};

export default Skill;
