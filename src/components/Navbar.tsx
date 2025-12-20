import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('user'));
    const navigate = useNavigate();

    useEffect(() => {
        // Listen for login/logout changes in localStorage
        const handler = () => setIsAuthenticated(!!localStorage.getItem('user'));
        window.addEventListener('storage', handler);
        return () => window.removeEventListener('storage', handler);
    }, []);

    // Optionally, update state after login/logout in this tab
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAuthenticated(!!localStorage.getItem('user'));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <nav className="w-full flex justify-end items-center px-4 py-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
            {isAuthenticated ? (
                <Button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
                >
                    Logout
                </Button>
            ) : (
                <div className="flex gap-2">
                    <Button
                        onClick={() => navigate('/login')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => navigate('/register')}
                        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow"
                    >
                        Register
                    </Button>
                </div>
            )}
        </nav>
    );
}