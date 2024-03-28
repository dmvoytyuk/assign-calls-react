import { ErrorMessage, Field, Form, Formik } from "formik";
import ActivityItem from "../ActivityItem/ActivityItem";
import styles from "./ActivityList.module.css";
// import ActivityListButtonIcon from "./ActivityListButtonIcon";
import { CgAdd } from "react-icons/cg";
import * as Yup from "yup";

const validationScheme = Yup.object({
  activity: Yup.string().required("*Required"),
});

const ActivityList = ({
  technicianId,
  activities,
  addActivity,
  deleteActivity,
}) => {
  const submitActivity = (activity, actions) => {
    addActivity(activity.activity, technicianId);
    actions.resetForm();
  };

  return (
    <div className={styles.activityListContainer}>
      {activities.length === 0 && (
        <p className={styles.activityListMessage}>{"*add some activity"}</p>
      )}
      <ul className={styles.activityList}>
        {activities.map((activity) => {
          return (
            <ActivityItem
              key={activity.id}
              activity={activity}
              deleteActivity={deleteActivity}
            />
          );
        })}
      </ul>
      <Formik
        initialValues={{ activity: "" }}
        onSubmit={submitActivity}
        validationSchema={validationScheme}
      >
        <Form className={styles.activityListForm}>
          <div>
            <Field
              className={styles.activityListInput}
              type="text"
              name="activity"
            />
            <ErrorMessage
              className={styles.activityListMessage}
              component="p"
              name="activity"
            />
          </div>
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
