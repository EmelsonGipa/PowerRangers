import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

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

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const navigate = useNavigate();

    const departments = ["All", ...new Set(mockStudents.map(s => s.department))];

    const filteredStudents = useMemo(() => {
        return mockStudents.filter(student => {
            const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 student.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDepartment = selectedDepartment === "All" || student.department === selectedDepartment;
            return matchesSearch && matchesDepartment;
        });
    }, [searchTerm, selectedDepartment]);

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Student Directory</h1>
                    <p className="text-gray-600 text-sm sm:text-base">Find and connect with students and instructors</p>
                </div>

                {/* Search and Filter Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="md:col-span-2">
                        <SearchBar 
                            placeholder="Search by name or email..." 
                            value={searchTerm}
                            onChange={setSearchTerm}
                        />
                    </div>
                    <select 
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-sm sm:text-base cursor-pointer"
                    >
                        {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>

                {/* Results Count */}
                <div className="mb-4">
                    <p className="text-sm sm:text-base text-gray-600">
                        Found <span className="font-semibold text-blue-600">{filteredStudents.length}</span> result{filteredStudents.length !== 1 ? 's' : ''}
                    </p>
                </div>

                {/* Students Grid */}
                {filteredStudents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {filteredStudents.map(student => (
                            <Card key={student.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="text-center">
                                    <div className="text-5xl mb-4">{student.image}</div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{student.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{student.email}</p>
                                    <div className="flex flex-col gap-2 mb-4">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                            {student.department}
                                        </span>
                                        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                            {student.role}
                                        </span>
                                    </div>
                                    <button 
                                        onClick={() => navigate(`/profile/${student.id}`)}
                                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                                    >
                                        View Profile
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Card className="text-center py-12">
                        <p className="text-gray-500 text-lg">No students found matching your criteria.</p>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Home;
