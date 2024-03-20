import { useState } from "react";
import Technicians from "../Technicians/Technicians";
import ManagerArea from "../ManagerArea/ManagerArea";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<ManagerArea />
			<Technicians />
		</>
	);
}

export default App;
