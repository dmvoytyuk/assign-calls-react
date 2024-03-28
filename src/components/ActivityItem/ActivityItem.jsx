import { CgCloseO } from "react-icons/cg";
import styles from "./ActivityItem.module.css";

const ActivityItem = ({ activity, technicianId, deleteActivity }) => {
  return (
    <li className={styles.activityItem}>
      <p>{activity.activity}</p>
      <button
        className={styles.activityItemButton}
        onClick={() => {
          deleteActivity(activity.id, technicianId);
        }}
      >
        <CgCloseO className={styles.activityItemIcon} />
      </button>
    </li>
  );
};

export default ActivityItem;
