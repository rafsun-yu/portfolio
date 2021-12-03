import "./Profile.css";
import Fact from "./Fact.js";

const Profile = (props) => {
	const { name, bio, img, info, links } = props;
	return (
		<div className="profile">
			<div className="personal">
				<img src={img}></img>
				<h1>{name}</h1>
				<p>{bio}</p>
			</div>
			<div className="content">
				<div className="info">
					{info.map((i) => {
						return <Fact {...i}></Fact>;
					})}
				</div>
				<div className="links">
					{links.map((i) => {
						return <Fact {...i}></Fact>;
					})}
				</div>
			</div>
		</div>
	);
};

export default Profile;
