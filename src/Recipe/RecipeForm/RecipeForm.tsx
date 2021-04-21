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
            <div className="pl-2 pt-2">
              <label>
                Title:
                <Field type="text" className="border ml-2 " name="title" />
                <ErrorMessage name="title" component="div" />
              </label>
            </div>
            <div className="pl-2 pt-2">
              <label>
                Zutat 1:
                <Field
                  type="text"
                  className="border ml-2  "
                  name="ingredients[0]"
                />
                <ErrorMessage name="ingredients[0]" component="div" />
              </label>
            </div>
            <div className="pl-2 pt-2">
              <label>
                Zutat 2:
                <Field
                  type="text"
                  className="border ml-2  "
                  name="ingredients[1]"
                />
                <ErrorMessage name="ingredients[1]" component="div" />
              </label>
            </div>
            <div className="pl-2 pt-2">
              <label>
                Step 1:
                <Field type="text" className="border ml-2 " name="steps[0]" />
                <ErrorMessage name="steps[0]" component="div" />
              </label>
            </div>
            <div className="pl-2 pt-2">
              <label>
                Step 2:
                <Field type="text" className="border ml-2 " name="steps[1]" />
                <ErrorMessage name="steps[1]" component="div" />
              </label>
            </div>
            <button
              className="border border-gray-500 px-2 rounded ml-2 mr-4 mt-2"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <Link to="/list">
              <button
                type="reset"
                className="border border-gray-500 px-2 rounded ml-2 mr-4 mt-2"
              >
                Abbrechen
              </button>
            </Link>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;
