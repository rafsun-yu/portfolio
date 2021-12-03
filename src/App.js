import SkillGroupContainer from "./skill/SkillGroupContainer.js";
import Data from "./Data.js";

function App() {
	return (
		<div className="App">
			<SkillGroupContainer data={Data}></SkillGroupContainer>
		</div>
	);
}

export default App;
