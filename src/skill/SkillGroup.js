import Skill from "./Skill.js";
import "./SkillGroup.css";

const SkillGroup = (props) => {
	const { name, skills } = props;

	return (
		<div className="skill-group">
			<h1>{name}</h1>
			<div className="skills">
				{skills.map((skill) => {
					return <Skill {...skill}></Skill>;
				})}
			</div>
		</div>
	);
};

export default SkillGroup;
