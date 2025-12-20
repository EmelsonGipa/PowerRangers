import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import ThemeToggle from '../components/ui/ThemeToggle';
import { useTheme } from '../hooks/useTheme';

interface Student {
    id: number;
    name: string;
    email: string;
    department: string;
    role: string;
    image: string;
}

const mockStudents: Student[] = [
    { id: 1, name: "John Doe", email: "john@example.com", department: "Computer Science", role: "Student", image: "👨‍🎓" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", department: "Business", role: "Student", image: "👩‍🎓" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", department: "Computer Science", role: "Instructor", image: "👨‍🏫" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", department: "Engineering", role: "Student", image: "👩‍🔬" },
    { id: 5, name: "Robert Brown", email: "robert@example.com", department: "Business", role: "Instructor", image: "👨‍💼" },
    { id: 6, name: "Emily Davis", email: "emily@example.com", department: "Engineering", role: "Student", image: "👩‍💻" },
];

const Profile: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { theme, setTheme } = useTheme();
    
    const student = mockStudents.find(s => s.id === parseInt(id || '0'));

    if (!student) {
        return (
            <div className="relative min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 sm:p-6 md:p-8 overflow-hidden">
                {/* Animated Blobs */}
                <div className="pointer-events-none select-none">
                    <div className="hidden md:block absolute -top-32 -left-32 w-96 h-96 bg-blue-400 dark:bg-blue-900 rounded-full filter blur-3xl opacity-30 animate-pulse z-0"></div>
                    <div className="hidden md:block absolute top-1/2 right-0 w-80 h-80 bg-purple-400 dark:bg-purple-900 rounded-full filter blur-2xl opacity-20 animate-pulse z-0"></div>
                    <div className="hidden md:block absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full filter blur-2xl opacity-20 animate-pulse z-0"></div>
                </div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="flex justify-end mb-4">
                        <ThemeToggle theme={theme} setTheme={setTheme} />
                    </div>
                    <Card className="text-center py-12 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-300 text-lg mb-4">Student not found.</p>
                        <Button onClick={() => navigate('/')} variant="primary">
                            Back to Directory
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 sm:p-6 md:p-8 overflow-hidden">
            {/* Animated Blobs */}
            <div className="pointer-events-none select-none">
                <div className="hidden md:block absolute -top-32 -left-32 w-96 h-96 bg-blue-400 dark:bg-blue-900 rounded-full filter blur-3xl opacity-30 animate-pulse z-0"></div>
                <div className="hidden md:block absolute top-1/2 right-0 w-80 h-80 bg-purple-400 dark:bg-purple-900 rounded-full filter blur-2xl opacity-20 animate-pulse z-0"></div>
                <div className="hidden md:block absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full filter blur-2xl opacity-20 animate-pulse z-0"></div>
            </div>
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="flex justify-end mb-4">
                    <ThemeToggle theme={theme} setTheme={setTheme} />
                </div>
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="mb-6 flex items-center text-blue-600 dark:text-blue-400 hover:text-pink-500 dark:hover:text-pink-400 font-semibold text-sm transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Directory
                </button>
                {/* Profile Card */}
                <Card className="text-center mb-6 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-center mb-4">
                        <span className="text-7xl drop-shadow-lg animate-pulse">{student.image}</span>
                    </div>
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 drop-shadow">
                        {student.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{student.email}</p>
                    {/* Info Badges */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <div className="bg-blue-50/80 dark:bg-blue-900/60 p-4 rounded-lg flex-1 shadow">
                            <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-1">Department</p>
                            <p className="text-blue-600 dark:text-blue-300 font-bold">{student.department}</p>
                        </div>
                        <div className="bg-green-50/80 dark:bg-green-900/60 p-4 rounded-lg flex-1 shadow">
                            <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-1">Role</p>
                            <p className="text-green-600 dark:text-green-300 font-bold">{student.role}</p>
                        </div>
                    </div>
                    {/* Contact Section */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Contact Information</h2>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-400 dark:text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <a href={`mailto:${student.email}`} className="text-blue-600 dark:text-pink-400 hover:underline transition-colors">
                                    {student.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
                {/* Action Button */}
                <div className="text-center">
                    <Button onClick={() => navigate('/')} variant="secondary" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 shadow-lg">
                        View All Students
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
