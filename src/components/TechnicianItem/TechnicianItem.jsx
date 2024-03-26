import React from "react";
import { CgCloseO } from "react-icons/cg";
import ActivityList from "../ActivityList/ActivityList";
import styles from "./TechnicianItem.module.css";

function TechnicianItem({ technician, deleteTechnician }) {
  return (
    <li className={styles.technicianItem}>
      <div className={styles.technicianItemTop}>
        <p className={styles.technicianItemTitle}>{technician.name}</p>
        <button className={styles.technicianItemDeleteButton}>
          <CgCloseO className={styles.technicianItemIcon} />
        </button>
      </div>
      <ActivityList activities={technician.activities} />
    </li>
  );
}

export default TechnicianItem;
