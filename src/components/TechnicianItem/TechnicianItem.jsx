import React from "react";
import { CgCloseO } from "react-icons/cg";
import ActivityList from "../ActivityList/ActivityList";
import styles from "./TechnicianItem.module.css";

function TechnicianItem({
  technician,
  deleteTechnician,
  addActivity,
  deleteActivity,
}) {
  return (
    <li className={styles.technicianItem}>
      <div className={styles.technicianItemTop}>
        <p className={styles.technicianItemTitle}>{technician.name}</p>
        <button
          className={styles.technicianItemDeleteButton}
          onClick={() => {
            deleteTechnician(technician.id);
          }}
        >
          <CgCloseO className={styles.technicianItemIcon} />
        </button>
      </div>
      <ActivityList
        technicianId={technician.id}
        activities={technician.activities}
        addActivity={addActivity}
        deleteActivity={deleteActivity}
      />
    </li>
  );
}

export default TechnicianItem;
