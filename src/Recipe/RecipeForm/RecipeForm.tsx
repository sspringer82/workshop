import { Form as FormikForm, Formik, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useRecipe } from '../RecipeList/useRecipe';
import { Link, useHistory } from 'react-router-dom';

type Props = {
  // onSave: (newRecipe: Recipe) => void;
};

const RecipeSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Zu wenige Zeichen')
    .max(50, 'Too Long!')
    .required('Pflichtfeld'),
});

const Form: React.FC<Props> = () => {
  const history = useHistory();
  const { handleSave } = useRecipe();
  return (
    <div>
      <h1>Formik</h1>
      <Formik
        initialValues={{
          title: '',
          ingredients: ['', ''],
          steps: ['', ''],
        }}
        validationSchema={RecipeSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch('http://localhost:3001/recipe', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/JSON' },
            body: JSON.stringify(values),
          })
            .then((response) => response.json())
            .then((data) => {
              handleSave(data);
              history.push('/list');
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <div>
              <label>
                Title:
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" />
              </label>
            </div>
            <div>
              <label>
                Zutat 1:
                <Field type="text" name="ingredients[0]" />
                <ErrorMessage name="ingredients[0]" component="div" />
              </label>
            </div>
            <div>
              <label>
                Zutat 2:
                <Field type="text" name="ingredients[1]" />
                <ErrorMessage name="ingredients[1]" component="div" />
              </label>
            </div>
            <div>
              <label>
                Step 1:
                <Field type="text" name="steps[0]" />
                <ErrorMessage name="steps[0]" component="div" />
              </label>
            </div>
            <div>
              <label>
                Step 2:
                <Field type="text" name="steps[1]" />
                <ErrorMessage name="steps[1]" component="div" />
              </label>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <Link to="/list">Abbrechen</Link>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;
