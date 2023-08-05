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
import Lists from "./presentation/screen/Lists";
import AllPosts from "./presentation/screen/AllPosts";

// todo revision history

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/signup", element: <SignUp /> },
	{ path: "/search", element: <Search /> },
	{ path: "/allPosts", element: <AllPosts /> },
	{ path: "/topic/:name", element: <Topics /> },
	{ path: "/post/:id", element: <PostDetail /> },
	{ path: "/profile/:id", element: <Profile /> },
	{ path: "/list/:id", element: <Lists /> },
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