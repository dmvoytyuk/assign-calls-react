import { Field, Form, Formik } from "formik";
import ActivityItem from "../ActivityItem/ActivityItem";
import styles from "./ActivityList.module.css";
// import ActivityListButtonIcon from "./ActivityListButtonIcon";
import { CgAdd } from "react-icons/cg";

const ActivityList = ({ technicianId, activities, addActivity }) => {
	const submitActivity = (activity, actions) => {
		addActivity(activity.activity, technicianId);
		actions.resetForm();
	};

	return (
		<div className={styles.activityListContainer}>
			{activities.length === 0 && (
				<p className={styles.activityListMessage}>
					{"*add some activity by hovering here"}
				</p>
			)}
			<ul className={styles.activityList}>
				{activities.map((activity) => {
					return <ActivityItem key={activity.id} activity={activity} />;
				})}
			</ul>
			<Formik initialValues={{ activity: "" }} onSubmit={submitActivity}>
				<Form className={styles.activityListForm}>
					<Field
						className={styles.activityListInput}
						type="text"
						name="activity"
					/>
					<button className={styles.activityListButton} type="submit">
						<CgAdd className={styles.activityListButtonIcon} />
						{/* <svg> */}
						{/* 	<use href="../../svg/add.svg#icon-plus" /> */}
						{/* </svg> */}
						{/* <ActivityListButtonIcon /> */}
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default ActivityList;
