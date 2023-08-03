import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import LoginRepositoryImpl from "../../../data/repositories/LoginRepositoryImpl";

const LoginSchema = yup.object().shape({
    emailId: yup.string().email("Enter valid email").required("Enter your email id"),
    password: yup.string().required("Create a password"),
});

export const Login = () => {
    const navigate = useNavigate();

    const loginUserWith = async (emailId, password) => {
        const loginRepository = new LoginRepositoryImpl();
        const data = loginRepository.loginUserWithEmailAndPassword(emailId, password);
    };

    return (
        <div>
            <h3>Sign In</h3>
            <Formik
                initialValues={{ emailId: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    loginUserWith(values.emailId, values.password)
                    setSubmitting(false);
                    navigate("/");
                }}
            >
                {({
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                    setValues,
                }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="emailId"
                                value={values.emailId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="emailId"
                                className={`block flex-1 border border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.username &&
                                    !!errors.emailId &&
                                    "border-red-700"
                                    }`}
                                placeholder="exmaple@gmail.com"
                            />
                            {touched.emailId && !!errors.emailId && (
                                <span className="text-xs text-red-700">{errors.emailId}</span>
                            )}
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="password"
                                className={`block flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.password &&
                                    !!errors.password &&
                                    "border border-red-700"
                                    }`}
                                placeholder="password"
                            />
                            {touched.password && !!errors.password && (
                                <span className="text-xs text-red-700">{errors.password}</span>
                            )}
                        </div>
                        <button type="submit">Login</button>
                        <button onClick={() => navigate("/signup")}>Sign up</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};