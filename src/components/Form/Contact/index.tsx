import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './form-contact.scss';

// Contact
const Contact = () => {
  // render
  return (
    <div className="form-contact">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors: any = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <label className="input-control">
              <label>Nome</label>
              <Field type="text" name="name" />
            </label>

            <label className="input-control">
              <label>E-mail</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>

            <label className="input-control">
              <label>Assunto</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </label>

            <label className="input-control">
              <label>Mensagem</label>
              <Field name="message" rows="10" component="textarea" />
              <ErrorMessage name="password" component="div" />
            </label>

            <button className="btn-submit" type="submit" disabled={isSubmitting}>
              Enviar Mensagem
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;