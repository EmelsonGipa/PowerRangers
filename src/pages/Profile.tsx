import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

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
    
    const student = mockStudents.find(s => s.id === parseInt(id || '0'));

    if (!student) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
                <div className="max-w-3xl mx-auto">
                    <Card className="text-center py-12">
                        <p className="text-gray-500 text-lg mb-4">Student not found.</p>
                        <Button onClick={() => navigate('/')} variant="primary">
                            Back to Directory
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="mb-6 flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Directory
                </button>

                {/* Profile Card */}
                <Card className="text-center mb-6">
                    <div className="text-6xl mb-4">{student.image}</div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{student.name}</h1>
                    <p className="text-gray-600 mb-6">{student.email}</p>

                    {/* Info Badges */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg flex-1">
                            <p className="text-gray-600 text-sm font-semibold mb-1">Department</p>
                            <p className="text-blue-600 font-bold">{student.department}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg flex-1">
                            <p className="text-gray-600 text-sm font-semibold mb-1">Role</p>
                            <p className="text-green-600 font-bold">{student.role}</p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="border-t pt-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <a href={`mailto:${student.email}`} className="text-blue-600 hover:underline">
                                    {student.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Action Button */}
                <div className="text-center">
                    <Button onClick={() => navigate('/')} variant="secondary" className="w-full sm:w-auto">
                        View All Students
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
