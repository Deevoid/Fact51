import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import FormSubmit from "../components/FormSubmit";

export default function SubmitFact() {
  const [isSubmit, setSubmit] = useState(true);

  useEffect(() => {
    document.title = "Submit Your Fact | Fact51";
  }, []);

  const initialValues = {
    name: "",
    email: "",
    category: "",
    keywords: "",
  };
  const onSubmit = (value) => {
    console.log(value);
    setSubmit(true);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string()
      .email("Please enter a correct email")
      .required("Required!"),
    category: Yup.string().required("Required!"),
    keywords: Yup.string().required("Required!"),
  });

  return (
    <React.Fragment>
      <div className="container">
        {!isSubmit && (
          <>
            <div className="submit-text">
              <p>Got a fun fact?</p>
              <p>Submit it here to get featured.</p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="submit-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Category</label>
                  <Field
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Enter category"
                  />
                  <ErrorMessage name="category" />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Fact</label>
                  <Field
                    component="textarea"
                    rows="5"
                    id="keywords"
                    name="keywords"
                    placeholder="Write your fact here!"
                  />
                  <ErrorMessage name="keywords" />
                </div>

                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </>
        )}

        {isSubmit && (
          <FormSubmit
            onClick={function () {
              setSubmit(false);
            }}
          />
        )}
      </div>
    </React.Fragment>
  );
}
