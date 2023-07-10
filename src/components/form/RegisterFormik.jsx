import React from "react";
import InputFormik from "../input/inputFormik";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
        gender: "male",
        job: "",
        term: false,
      }}
      validationSchema={yup.object({
        username: yup.string().required("Please enter your username"),
        email: yup
          .string()
          .email("Wrong format")
          .required("Please enter your email"),
        password: yup
          .string()
          .required("Please enter your password")
          .matches(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/, {
            message:
              "Your password must have at least 8 characters, 1 uppercase, 1 lower case,",
          }),
        gender: yup
          .string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "You can only select Male or Female"),
        term: yup.boolean().required("Please agree with term"),
        job: yup.string().required("Please select your job"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-[300px] mx-auto my-10"
        >
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="username" className="cursor-pointer">
              Username
            </label>
            <InputFormik
              name="username"
              placeholder="Enter your username"
              id="username"
              type="text"
            ></InputFormik>
            <p className="text-red-500 text-sm">message error </p>
          </div>
          <button
            className={`w-full bg-blue-500 text-white rounded-lg mt-5 font-semibold p-5 `}
          >
            {formik.isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent mx-auto animate-spin"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterFormik;
