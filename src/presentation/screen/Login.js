import { Formik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthRepositoryImpl from "../../data/repositories/AuthRepositoryImpl";

const LoginSchema = yup.object().shape({
    email: yup.string().email("Enter valid email").required("Enter your email id"),
    password: yup.string().required("Create a password"),
});

export const Login = () => {
    const navigate = useNavigate();

    const loginUserWith = async (email, password) => {
        const authRepositoryImpl = new AuthRepositoryImpl();
        const message = await authRepositoryImpl.loginUserWithEmailAndPassword(email, password);
        if (message !== 'success') {
            alert(message);
        }
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col">
            <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-96">
                <h3 className="text-3xl font-bold mb-8 text-center text-black">Sign In</h3>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        loginUserWith(values.email, values.password)
                        setSubmitting(false);
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
                        <form onSubmit={handleSubmit}>
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
                            <div className="text-center">
                                <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-1 rounded-md">Sign In</button>
                            </div>
                        </form>
                    )}
                </Formik>
                <div className="mt-2 text-center">
                    <a className="text-xs text-black" href="/signup" onClick={() => navigate("/signup")}>Doesn't have an account? Sign Up</a>
                </div>
            </div>
        </div>
    );
};