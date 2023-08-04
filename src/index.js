import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./presentation/screen/Home";
import { Login } from "./presentation/screen/Login";
import { SignUp } from "./presentation/screen/Signup";
import { ProtectedRoute } from "./presentation/route/ProtectedRoute";
import NewStory from "./presentation/screen/NewStory";
import PostDetail from "./presentation/screen/PostDetail";
import Search from "./presentation/screen/Search";
import Profile from "./presentation/screen/Profile";
import Topics from "./presentation/screen/Topics";

// todo profile/search section have lists option with Reading List as fixed.

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/signup", element: <SignUp /> },
	{ path: "/search", element: <Search /> },
	{ path: "/topic/:name", element: <Topics /> },
	{ path: "/post/:id", element: <PostDetail /> },
	{ path: "/profile/:id", element: <Profile /> },
	{
		path: "/",
		element: <ProtectedRoute />,
		children: [
			{ path: "/new-story", element: <NewStory /> },
			{ path: "/p/:id", element: <NewStory /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);