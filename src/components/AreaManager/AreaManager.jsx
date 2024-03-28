import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./AreaManager.module.css";
import * as Yup from "yup";

const validationScheme = Yup.object({
  area: Yup.string().required("*Required"),
});

const AreaManager = ({ addArea }) => {
  const submitAddArea = (area, formActions) => {
    addArea(area);
    formActions.resetForm();
  };
  return (
    <Formik
      initialValues={{ area: "" }}
      onSubmit={submitAddArea}
      validationSchema={validationScheme}
    >
      <Form className={styles.areaManagerForm}>
        <div>
          <Field
            className={styles.areaManagerInput}
            type="text"
            name="area"
            placeholder="AreaX"
          />
          <ErrorMessage
            component="p"
            className={styles.areaManagerMessage}
            name="area"
          />
        </div>
        <button className={styles.areaManagerButton} type="submit">
          add area
        </button>
      </Form>
    </Formik>
  );
};

export default AreaManager;
