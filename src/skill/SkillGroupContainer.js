import SkillGroup from "./SkillGroup.js";
import "./SkillGroupContainer.css";

const SkillGroupContainer = (props) => {
	const { data } = props;

	return (
		<div className="skill-group-container">
			{data.map((skillGroup) => {
				return <SkillGroup {...skillGroup}></SkillGroup>;
			})}
		</div>
	);
};

export default SkillGroupContainer;
