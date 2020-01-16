import React from 'react';
import { Formik, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTodoAction } from './todo/actions/todo.actions';

const validationSchema = Yup.object().shape({
  id: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lieber Benutzer gib doch bitte einen Wert ein'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const initialValue = { id: '', title: '', done: false };

const TodoForm: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ id?: string }>();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={({ title, done }, { resetForm }) => {
        dispatch(createTodoAction({ title, done }));
        resetForm();
        history.push('/list');
      }}
    >
      {({ errors, touched, handleChange, values, handleSubmit }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {params.id && <h1>Editing {params.id}</h1>}
          {/*Object.keys(initialValue).map(field => {
            if (typeof (initialValue as any)[field] === 'boolean') {
              return (
                <input
                  name={field}
                  type="checkbox"
                  checked={(values as any)[field]}
                  onChange={handleChange}
                />
              );
            } else {
              return (
                <div>
                  <Field name={field} />
                  <ErrorMessage name={field} />
                </div>
              );
            }
          })*/}

          <div>
            <Field name="id" />
            {errors.id && touched.id ? <div>{errors.id}</div> : null}
          </div>
          <div>
            <Field name="title">
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Title"
                  error={!!(errors.title && touched.title)}
                />
              )}
            </Field>
            <ErrorMessage name="title" />
          </div>
          <div>
            done?
            <input
              name="done"
              type="checkbox"
              checked={values.done}
              onChange={handleChange}
            />
          </div>
          <button type="submit">speichern</button>
        </form>
      )}
    </Formik>
  );
};

export default TodoForm;
