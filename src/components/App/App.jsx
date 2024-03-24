import { useState } from "react";
import { nanoid } from "nanoid";
import data from "../../data.json";
import styles from "./App.module.css";
import TechnicianList from "../TechnicianList/TechnicianList";
import AreaList from "../AreaList/AreaList";
import TechnicianManager from "../TechnicianManager/TechnicianManager";
import AreaManager from "../AreaManager/AreaManager";

function App() {
	const [activitiesList, setActivitiesList] = useState(data);

	const addArea = (area) => {
		const newArea = {
			id: nanoid(),
			area: area.area,
			active: false,
			technicians: [],
		};

		setActivitiesList((currActivitiesList) => {
			return [...currActivitiesList, newArea];
		});
	};

	const addTechnician = (name) => {
		const newTechnician = {
			id: nanoid(),
			name: name.name,
			activities: [],
		};

		const activeArea = activitiesList.find((area) => {
			if (area.active) {
				return area;
			}
		});

		const newAreaTechnicianList = [...activeArea.technicians, newTechnician];
		const newActiveArea = { ...activeArea, technicians: newAreaTechnicianList };

		const newActivitiesList = activitiesList.map((area) => {
			if (area.active) {
				return { ...area, ...newActiveArea };
			}
			return area;
		});
		setActivitiesList((currActivitiesList) => newActivitiesList);
	};

	const activeArea = activitiesList.find((area) => {
		if (area.active) {
			return area;
		}
	});

	return (
		<>
			<section className={styles.areaManager}>
				<AreaManager addArea={addArea} />
				<AreaList activitiesList={activitiesList} />
			</section>
			<TechnicianManager area={activeArea} addTechnician={addTechnician} />
			<TechnicianList data={activeArea.technicians} />
		</>
	);
}

export default App;
