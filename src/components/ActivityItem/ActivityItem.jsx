import styles from "./ActivityItem.module.css";

const ActivityItem = ({ activity }) => {
	return <li className={styles.activityItem}>{activity.activity}</li>;
};

export default ActivityItem;
