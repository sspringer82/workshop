import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';

const FormikForm: React.FC = () => {
  return (
    <div>
      <h1>Formik</h1>
      <Formik
        initialValues={{ firstname: '', lastname: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Firstname:
              <Field type="text" name="firstname" />
              <ErrorMessage name="firstname" component="div" />
            </label>
            <label>
              Lastname:
              <Field type="text" name="lastname" />
              <ErrorMessage name="lastname" component="div" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
