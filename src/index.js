import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./presentation/screen/home/Home";
import { Login } from "./presentation/screen/login/Login";
import { SignUp } from "./presentation/screen/signup/Signup";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/signup", element: <SignUp /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);