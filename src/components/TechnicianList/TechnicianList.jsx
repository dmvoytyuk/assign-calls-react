import TechnicianItem from "../TechnicianItem/TechnicianItem";
import styles from "./TechnicianList.module.css";

const TechnicianList = ({ data }) => {
	return (
		<ul className={styles.technicianList}>
			{data.map((technician) => {
				return <TechnicianItem key={technician.id} technician={technician} />;
			})}
		</ul>
	);
};

export default TechnicianList;
