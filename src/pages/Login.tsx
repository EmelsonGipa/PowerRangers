import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AutContext';
import Button from '../components/Button';
import Card from '../components/Card';

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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden p-4 sm:p-6">
            {/* Decorative elements - hidden on mobile */}
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            
            <Card className="w-full max-w-xs sm:max-w-sm relative z-10 border border-blue-100 shadow-2xl p-5 sm:p-6 md:p-8">
                {/* Header Icon */}
                <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </div>
                </div>

                {/* Title and Subtitle */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1">
                    Student Directory
                </h1>
                <p className="text-center text-gray-500 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">Welcome back! Access your student directory</p>
                
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-2 sm:p-3 rounded-lg text-xs sm:text-sm">
                            <p className="font-semibold">Login Failed</p>
                            <p>{error}</p>
                        </div>
                    )}
                    
                    {/* Email Field */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">Email Address</label>
                        <div className={`relative transition-all duration-200 ${focusedField === 'email' ? 'scale-105' : ''}`}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition-all duration-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400"
                                placeholder="you@example.com"
                            />
                            <svg className="absolute right-3 top-2 sm:top-2.5 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">Password</label>
                        <div className={`relative transition-all duration-200 ${focusedField === 'password' ? 'scale-105' : ''}`}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setFocusedField('password')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition-all duration-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400"
                                placeholder="••••••••"
                            />
                            <svg className="absolute right-3 top-2 sm:top-2.5 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Login Button */}
                    <Button type="submit" isLoading={loading} fullWidth className="mt-4 sm:mt-5 h-9 sm:h-10 text-xs sm:text-sm">
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-2 sm:gap-3 my-3 sm:my-4">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-gray-400 text-xs">New here?</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Register Link */}
                <a href="/register" className="inline-flex items-center justify-center w-full px-3 py-2 sm:py-2.5 border-2 border-blue-600 text-blue-600 font-semibold text-xs sm:text-sm rounded-lg hover:bg-blue-50 transition-all duration-200">
                    Create New Account
                </a>
            </Card>
        </div>
    );
}