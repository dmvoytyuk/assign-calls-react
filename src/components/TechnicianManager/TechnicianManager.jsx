import { Field, Form, Formik } from "formik";
import styles from "./TechnicianManager.module.css";

const TechnicianManager = ({ area, addTechnician }) => {
	const submitAddTechnician = (name, formActions) => {
		addTechnician(name);
		formActions.resetForm();
	};
	return (
		<Formik initialValues={{ name: "" }} onSubmit={submitAddTechnician}>
			<Form className={styles.technicianManagerContainer}>
				<Field
					className={styles.technicianManagerInput}
					type="text"
					name="name"
				/>
				<button className={styles.technicianManagerButton} type="submit">
					add technician {area.area}
				</button>
			</Form>
		</Formik>
	);
};

export default TechnicianManager;
