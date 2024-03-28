import TechnicianItem from "../TechnicianItem/TechnicianItem";
import styles from "./TechnicianList.module.css";

const TechnicianList = ({
  data,
  addActivity,
  deleteActivity,
  deleteTechnician,
}) => {
  return (
    <ul className={styles.technicianList}>
      {data.map((technician) => {
        return (
          <TechnicianItem
            key={technician.id}
            technician={technician}
            deleteTechnician={deleteTechnician}
            addActivity={addActivity}
            deleteActivity={deleteActivity}
          />
        );
      })}
    </ul>
  );
};

export default TechnicianList;
