import styles from "./AreaItem.module.css";

const AreaItem = ({ area }) => {
	return (
		<li>
			<button
				className={
					styles.areaItemButtons +
					" " +
					(area.active ? styles.areaItemActiveArea : "")
				}
			>
				{area.area}
			</button>
		</li>
	);
};

export default AreaItem;
