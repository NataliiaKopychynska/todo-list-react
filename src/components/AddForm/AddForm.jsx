import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addItemThunk } from "../../redux/contactsOps";
import s from "./AddForm.module.css";

export default function AddForm() {
  const dispatch = useDispatch();

  const handleAddItem = (values, actions) => {
    const newContact = {
      // id: Date.now().toString(),
      tittle: values.wishItem,
    };

    dispatch(addItemThunk(newContact));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ wishItem: "" }} onSubmit={handleAddItem}>
      <Form className={s.div}>
        <Field className={s.input} type="text" name="wishItem"></Field>
        <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        <button type="submit" className={s.btn}>
          Create point
        </button>
      </Form>
    </Formik>
  );
}
