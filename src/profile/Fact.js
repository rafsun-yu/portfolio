import "./Fact.css";

const Fact = (props) => {
	const { description, icon, link } = props;
	return (
		<div className="fact">
			<img src={icon}></img>
			<Description {...props}></Description>
		</div>
	);
};

const Description = (props) => {
	const { description, icon, link } = props;
	if (link == undefined) return <span>{description}</span>;
	else
		return (
			<span>
				<a target="_blank" href={link}>
					{description}
				</a>
			</span>
		);
};

export default Fact;
