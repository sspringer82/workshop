import React, { useState, ChangeEvent } from 'react';
import { Todo as TodoType } from './Todo.interface';
import { Formik, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';

const validationSchema = Yup.object().shape({
  id: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const initialValue = { id: '', title: '', done: false };

interface Props {
  onSubmit: (todo: TodoType) => void;
}
const TodoForm: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.currentTarget.name;
    const value =
      e.currentTarget.type === 'checkbox'
        ? e.currentTarget.checked
        : e.currentTarget.value;
    setValue(prevValue => {
      const newValue = {
        ...prevValue,
        [key]: value,
      };
      return newValue;
    });
  }

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched, handleChange, values, handleSubmit }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
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
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
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
