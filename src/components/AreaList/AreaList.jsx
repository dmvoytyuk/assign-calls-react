import styles from "./AreaList.module.css";
import AreaItem from "../AreaItem/AreaItem";

const AreaList = ({ activitiesList }) => {
	return (
		<ul className={styles.areaList}>
			{activitiesList.map((area) => {
				return <AreaItem key={area.id} area={area} />;
			})}
		</ul>
	);
};

export default AreaList;
