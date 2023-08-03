import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const navigate = useNavigate();
    useEffect(() => {
        try {
            if (localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '') {
                // navigate("/login");
            }
        } catch (err) {
            navigate("/login");
        }
    }, []);
    return <Outlet />;
};