import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./presentation/screen/home/Home";
import { Login } from "./presentation/screen/login/Login";
import { SignUp } from "./presentation/screen/signup/Signup";
import { ProtectedRoute } from "./presentation/route/ProtectedRoute";
import NewStory from "./presentation/screen/newStory/NewStory";
import PostDetail from "./presentation/screen/postDetail/PostDetail";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/signup", element: <SignUp /> },
	{ path: "/post/:id", element: <PostDetail /> },
	{
		path: "/",
		element: <ProtectedRoute />,
		children: [
			{ path: "/new-story", element: <NewStory /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);