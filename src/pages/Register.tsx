import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AutContext';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';

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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden p-4 sm:p-6">
                {/* Decorative elements - hidden on mobile */}
                <div className="hidden md:block absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                
                <Card className="w-full max-w-xs sm:max-w-sm relative z-10 border border-blue-100 shadow-2xl p-5 sm:p-6 md:p-8">
                    {/* Header Icon */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                    </div>

                    {/* Title and Subtitle */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1">
                        Create Account
                    </h1>
                    <p className="text-center text-gray-500 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">Join the student directory today</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-2 sm:p-3 rounded-lg text-xs sm:text-sm">
                                <p className="font-semibold">Error</p>
                                <p>{error}</p>
                            </div>
                        )}

                        {/* Name Field */}
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition-all duration-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition-all duration-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition-all duration-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition-all duration-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Register Button */}
                        <Button 
                            type="submit" 
                            isLoading={loading} 
                            fullWidth
                            className="mt-4 sm:mt-5 h-9 sm:h-10 text-xs sm:text-sm"
                        >
                            {loading ? 'Creating account...' : 'Register'}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-2 sm:gap-3 my-3 sm:my-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-gray-400 text-xs">Already have an account?</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* Login Link */}
                    <a href="/login" className="inline-flex items-center justify-center w-full px-3 py-2 sm:py-2.5 border-2 border-blue-600 text-blue-600 font-semibold text-xs sm:text-sm rounded-lg hover:bg-blue-50 transition-all duration-200">
                        Back to Login
                    </a>
                </Card>
            </div>

            {/* Success Modal */}
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
