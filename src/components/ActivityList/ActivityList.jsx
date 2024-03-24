import ActivityItem from "../ActivityItem/ActivityItem";
import styles from "./ActivityList.module.css";

const ActivityList = ({ activities }) => {
	return (
		<ul className={styles.activityList}>
			{activities.map((activity) => {
				return <ActivityItem key={activity.id} activity={activity} />;
			})}
		</ul>
	);
};

export default ActivityList;
