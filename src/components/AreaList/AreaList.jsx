import styles from "./AreaList.module.css";
import AreaItem from "../AreaItem/AreaItem";

const AreaList = ({
  activitiesList,
  activeArea,
  makeAreaActive,
  deleteArea,
}) => {
  return (
    <div className={styles.areaListButtons}>
      <ul className={styles.areaList}>
        {activitiesList.map((area) => {
          return (
            <AreaItem
              key={area.id}
              area={area}
              makeAreaActive={makeAreaActive}
            />
          );
        })}
      </ul>
      <button
        className={styles.areaListDeleteButton}
        onClick={() => {
          deleteArea(activeArea.id);
        }}
      >
        delete {activeArea.area}
      </button>
    </div>
  );
};

export default AreaList;
