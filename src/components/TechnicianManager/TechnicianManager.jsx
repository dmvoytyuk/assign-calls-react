import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./TechnicianManager.module.css";

const validationScheme = Yup.object({
  name: Yup.string().min(3, "name too short").required("required"),
});

const TechnicianManager = ({ area, addTechnician }) => {
  const submitAddTechnician = (name, formActions) => {
    addTechnician(name);
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={submitAddTechnician}
      validationSchema={validationScheme}
    >
      <Form className={styles.technicianManagerContainer}>
        <Field
          className={styles.technicianManagerInput}
          type="text"
          name="name"
          placeholder="John Doe"
        />
        <ErrorMessage className={styles.technicianManagerMessage} name="name" />
        <button className={styles.technicianManagerButton} type="submit">
          add technician {area.area}
        </button>
      </Form>
    </Formik>
  );
};

export default TechnicianManager;
