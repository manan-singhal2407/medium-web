import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import SignupRepositoryImpl from "../../data/repositories/SignupRepositoryImpl";

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
        <div className="flex justify-center items-center h-screen w-screen flex-col">
            <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-96">
                <h3 className="text-3xl font-bold mb-8 text-center text-black">Sign Up</h3>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
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
                            <div>
                                <p className="text-black mb-1">Name:</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.name && !!errors.name ? "border-red-700" : ""
                                        }`}
                                    placeholder="Enter your name"
                                />
                                {touched.name && !!errors.name ? (
                                    <span className="text-xs text-red-700">{errors.name}</span>
                                ) : (
                                    <span className="text-xs text-white">-</span>
                                )}
                            </div>
                            <div>
                                <p className="text-black mb-1">Email:</p>
                                <input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.name && !!errors.name ? "border-red-700" : ""
                                        }`}
                                    placeholder="example@gmail.com"
                                />
                                {touched.email && !!errors.email ? (
                                    <span className="text-xs text-red-700">{errors.email}</span>
                                ) : (
                                    <span className="text-xs text-white">-</span>
                                )}
                            </div>
                            <div>
                                <p className="text-black mb-1">Password:</p>
                                <input
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.name && !!errors.name ? "border-red-700" : ""
                                        }`}
                                    placeholder="Password"
                                />
                                {touched.password && !!errors.password ? (
                                    <span className="text-xs text-red-700">{errors.password}</span>
                                ) : (
                                    <span className="text-xs text-white">-</span>
                                )}
                            </div>
                            <div>
                                <p className="text-black mb-1">Confirm Password:</p>
                                <input
                                    type="password"
                                    name="cPassword"
                                    value={values.cPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${touched.name && !!errors.name ? "border-red-700" : ""
                                        }`}
                                    placeholder="Confirm Password"
                                />
                                {touched.cPassword && !!errors.cPassword ? (
                                    <span className="text-xs text-red-700">{errors.cPassword}</span>
                                ) : (
                                    <span className="text-xs text-white">-</span>
                                )}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-1 rounded-md">Sign Up</button>
                            </div>
                        </form>
                    )}
                </Formik>
                <div className="mt-2 text-center">
                    <a className="text-xs text-black" href="/login" onClick={() => navigate("/login")}>Already a user? Login</a>
                </div>
            </div>
        </div>
    );
};