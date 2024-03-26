import styles from "./AreaItem.module.css";

const AreaItem = ({ area, makeAreaActive }) => {
  return (
    <li>
      <button
        className={
          styles.areaItemButtons +
          " " +
          (area.active ? styles.areaItemActiveArea : "")
        }
        onClick={() => {
          makeAreaActive(area.id);
        }}
      >
        {area.area}
      </button>
    </li>
  );
};

export default AreaItem;
