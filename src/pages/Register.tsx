import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ThemeToggle from '../components/ThemeToggle';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        setLoading(true);
        try {
            await register(formData.name, formData.email, formData.password);
            setShowSuccessModal(true);
        } catch (err) {
            setError((err as Error).message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleModalClose = () => {
        setShowSuccessModal(false);
        navigate('/login');
    };

    return (
        <>
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
                                    <p className="font-semibold">Error</p>
                                    <p>{error}</p>
                                </div>
                            )}
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 dark:focus:bg-gray-800 transition-all duration-200 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white/80 dark:bg-gray-900/60 shadow"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 dark:focus:bg-gray-800 transition-all duration-200 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white/80 dark:bg-gray-900/60 shadow"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 dark:focus:bg-gray-800 transition-all duration-200 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white/80 dark:bg-gray-900/60 shadow"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 dark:focus:bg-gray-800 transition-all duration-200 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white/80 dark:bg-gray-900/60 shadow"
                                    placeholder="••••••••"
                                />
                            </div>
                            <Button
                                type="submit"
                                isLoading={loading}
                                fullWidth
                                className="h-10 text-sm bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 shadow-lg rounded-lg"
                            >
                                {loading ? 'Creating account...' : 'Register'}
                            </Button>
                        </form>
                        <div className="flex items-center gap-2 sm:gap-3 my-4">
                            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                            <span className="text-gray-400 text-xs">Already have an account?</span>
                            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <a href="/login" className="inline-flex items-center justify-center w-full px-3 py-2 border-2 border-pink-500 text-pink-600 font-semibold text-sm rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-all duration-200 shadow">
                            Back to Login
                        </a>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={showSuccessModal}
                title="Registration Successful"
                message="Please log in to continue"
                actionText="Go to Login"
                onAction={handleModalClose}
                onClose={handleModalClose}
            />
        </>
    );
}
