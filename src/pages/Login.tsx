import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import ThemeToggle from '../components/ThemeToggle';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError((err as Error).message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-5 md:p-6">
            <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[80vh]">
                <div className="w-full max-w-md bg-white/60 dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700 relative">
                    <div className="absolute top-3 right-3">
                        <ThemeToggle />
                    </div>
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow mb-2">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-semibold text-blue-700 dark:text-white leading-tight mb-1">
                            Student Directory
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-2 sm:p-3 rounded-lg text-xs sm:text-sm mb-2">
                                <p className="font-semibold">Login Failed</p>
                                <p>{error}</p>
                            </div>
                        )}
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 dark:focus:bg-gray-800 transition-all duration-200 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white/80 dark:bg-gray-900/60 shadow"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setFocusedField('password')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 dark:focus:bg-gray-800 transition-all duration-200 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white/80 dark:bg-gray-900/60 shadow"
                                placeholder="••••••••"
                            />
                        </div>
                        <Button type="submit" isLoading={loading} fullWidth className="h-10 text-sm bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 shadow-lg rounded-lg">
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                    <div className="flex items-center gap-2 sm:gap-3 my-4">
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                        <span className="text-gray-400 text-xs">New here?</span>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <a href="/register" className="inline-flex items-center justify-center w-full px-3 py-2 border-2 border-pink-500 text-pink-600 font-semibold text-sm rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-all duration-200 shadow">
                        Create New Account
                    </a>
                </div>
            </div>
        </div>
    );
}