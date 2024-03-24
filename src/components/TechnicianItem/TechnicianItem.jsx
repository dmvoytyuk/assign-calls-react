import React from "react";
import ActivityList from "../ActivityList/ActivityList";
import styles from "./TechnicianItem.module.css";

function TechnicianItem({ technician }) {
	return (
		<li className={styles.technicianItem}>
			<p className={styles.technicianItemTitle}>{technician.name}</p>
			<ActivityList activities={technician.activities} />
		</li>
	);
}

export default TechnicianItem;
