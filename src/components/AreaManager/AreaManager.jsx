import { Field, Form, Formik } from "formik";
import styles from "./AreaManager.module.css";

const AreaManager = ({ addArea }) => {
	const submitAddArea = (area, formActions) => {
		addArea(area);
		formActions.resetForm();
	};
	return (
		<Formik initialValues={{ area: "" }} onSubmit={submitAddArea}>
			<Form>
				<Field className={styles.areaManagerInput} type="text" name="area" />
				<button className={styles.areaManagerButton} type="submit">
					add area
				</button>
			</Form>
		</Formik>
	);
};

export default AreaManager;
