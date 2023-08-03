import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import SignupRepositoryImpl from "../../../data/repositories/SignupRepositoryImpl";

let atleast10YearsOld = new Date();
atleast10YearsOld.setFullYear(atleast10YearsOld.getFullYear() - 10);

const SignUpSchema = yup.object().shape({
    name: yup.string().required("Field required"),
    email: yup.string().email("Enter valid email").required("Enter your email id"),
    password: yup.string().required("Password is required"),
    cPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .required("Confirm password is required"),
});

export const SignUp = () => {
    const navigate = useNavigate();

    const signupUserWith = async (name, email, password) => {
        const signupRepository = new SignupRepositoryImpl();
        const data = signupRepository.signupUserWithEmailAndPassword(name, email, password);
    };

    return (
        <div>
            <h3>Sign Up</h3>
            <Formik
                initialValues={{
                    name: "",
                    password: "",
                    email: "",
                    cPassword: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values, { setSubmitting }) => {
                    signupUserWith(values.name, values.email, values.password)
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
                }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`block flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.name && !!errors.name && "border border-red-700"
                                    }`}
                                placeholder="Enter your name"
                            />
                            {touched.name && !!errors.name && (
                                <span className="text-xs text-red-700">{errors.name}</span>
                            )}
                        </div>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`block flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.email && !!errors.email && "border border-red-700"
                                    }`}
                                placeholder="exmaple@gmail.com"
                            />
                            {touched.email && !!errors.email && (
                                <span className="text-xs text-red-700">{errors.email}</span>
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
                        <div className="mt-2">
                            <input
                                type="password"
                                name="cPassword"
                                value={values.cPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`block flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.cPassword &&
                                    !!errors.cPassword &&
                                    "border border-red-700"
                                    }`}
                                placeholder="confirm password"
                            />
                            {touched.cPassword && !!errors.cPassword && (
                                <span className="text-xs text-red-700">{errors.cPassword}</span>
                            )}
                        </div>
                        <button type="submit">Sign Up</button>
                        <button onClick={() => navigate("/login")}>Login</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};