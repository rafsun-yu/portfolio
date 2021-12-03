import SkillGroupContainer from "./skill/SkillGroupContainer.js";
import Profile from "./profile/Profile.js";
import Data from "./Data.js";
import "./App.css";

function App() {
	return (
		<div className="App">
			{/* <div className="bg"></div> */}
			<Profile {...Data["profile"]}></Profile>
			<SkillGroupContainer data={Data["skillgroups"]}></SkillGroupContainer>
		</div>
	);
}

export default App;
