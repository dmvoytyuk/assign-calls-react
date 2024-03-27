import TechnicianItem from "../TechnicianItem/TechnicianItem";
import styles from "./TechnicianList.module.css";

const TechnicianList = ({ data, addActivity }) => {
	return (
		<ul className={styles.technicianList}>
			{data.map((technician) => {
				return (
					<TechnicianItem
						key={technician.id}
						technician={technician}
						addActivity={addActivity}
					/>
				);
			})}
		</ul>
	);
};

export default TechnicianList;
