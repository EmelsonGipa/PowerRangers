import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React from 'react';

interface PrivateRouteProps {
    children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    let isAuthenticated = false;
    try {
        isAuthenticated = useAuth().isAuthenticated;
    } catch {
        // If useAuth throws (not inside AuthProvider), treat as not authenticated
        isAuthenticated = false;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}
