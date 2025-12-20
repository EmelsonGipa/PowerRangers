import React, { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

interface Student {
    id: number;
    name: string;
    email: string;
    department: string;
    role: string;
    image: string;
    graduationYear: string;
    bio?: string;
    contact?: string;
    socialLinks?: { [key: string]: string };
}

// Updated mockStudents: all role: "Student", realistic emails/phones, meaningful social links, at least 8 majors
const mockStudents: Student[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@cs.sorsu.edu.ph",
        department: "Computer Science",
        role: "Student",
        image: "/images/john.png",
        graduationYear: "2025",
        bio: "Passionate about AI and machine learning.",
        contact: "john.doe@cs.sorsu.edu.ph | +63 917 123 4567",
        socialLinks: { linkedin: "https://linkedin.com/in/johndoe", github: "https://github.com/johndoe" }
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@business.sorsu.edu.ph",
        department: "Business",
        role: "Student",
        image: "/images/jane.png",
        graduationYear: "2024",
        bio: "Entrepreneur with a focus on startups.",
        contact: "jane.smith@business.sorsu.edu.ph | +63 917 234 5678",
        socialLinks: { linkedin: "https://linkedin.com/in/janesmith" }
    },
    {
        id: 4,
        name: "Sarah Williams",
        email: "sarah.williams@envsci.sorsu.edu.ph",
        department: "Environmental Science",
        role: "Student",
        image: "/images/sarah.png",
        graduationYear: "2026",
        bio: "Innovator in renewable energy.",
        contact: "sarah.williams@envsci.sorsu.edu.ph | +63 917 345 6789",
        socialLinks: { linkedin: "https://linkedin.com/in/sarahwilliams" }
    },
    {
        id: 6,
        name: "Emily Davis",
        email: "emily.davis@design.sorsu.edu.ph",
        department: "Design",
        role: "Student",
        image: "/images/emily.png",
        graduationYear: "2025",
        bio: "Tech enthusiast and coder.",
        contact: "emily.davis@design.sorsu.edu.ph | +63 917 456 7890",
        socialLinks: { github: "https://github.com/emilydavis", linkedin: "https://linkedin.com/in/emilydavis" }
    },
    {
        id: 7,
        name: "David Wilson",
        email: "david.wilson@cs.sorsu.edu.ph",
        department: "Computer Science",
        role: "Student",
        image: "/images/david.png",
        graduationYear: "2025",
        bio: "Aspiring software developer.",
        contact: "david.wilson@cs.sorsu.edu.ph | +63 917 567 8901",
        socialLinks: { github: "https://github.com/davidwilson" }
    },
    {
        id: 8,
        name: "Laura Martinez",
        email: "laura.martinez@business.sorsu.edu.ph",
        department: "Business",
        role: "Student",
        image: "/images/laura.png",
        graduationYear: "2024",
        bio: "Marketing specialist.",
        contact: "laura.martinez@business.sorsu.edu.ph | +63 917 678 9012",
        socialLinks: { linkedin: "https://linkedin.com/in/lauramartinez" }
    },
    {
        id: 10,
        name: "Olivia Taylor",
        email: "olivia.taylor@cs.sorsu.edu.ph",
        department: "Computer Science",
        role: "Student",
        image: "/images/olivia.png",
        graduationYear: "2025",
        bio: "Aspiring data scientist.",
        contact: "olivia.taylor@cs.sorsu.edu.ph | +63 917 789 0123",
        socialLinks: { linkedin: "https://linkedin.com/in/oliviataylor", github: "https://github.com/oliviataylor" }
    },
    {
        id: 11,
        name: "Daniel Thomas",
        email: "daniel.thomas@business.sorsu.edu.ph",
        department: "Business",
        role: "Student",
        image: "/images/daniel.jpg",
        graduationYear: "2024",
        bio: "Future business leader.",
        contact: "daniel.thomas@business.sorsu.edu.ph | +63 917 890 1234",
        socialLinks: { linkedin: "https://linkedin.com/in/danielthomas" }
    },
    {
        id: 12,
        name: "Sophia Hernandez",
        email: "sophia.hernandez@engineering.sorsu.edu.ph",
        department: "Engineering",
        role: "Student",
        image: "/images/sophia.png",
        graduationYear: "2026",
        bio: "Innovator in renewable energy.",
        contact: "sophia.hernandez@engineering.sorsu.edu.ph | +63 917 901 2345",
        socialLinks: { linkedin: "https://linkedin.com/in/sophiahernandez" }
    },
    {
        id: 14,
        name: "Will Grayson",
        email: "will.grayson@it.sorsu.edu.ph",
        department: "Information Technology",
        role: "Student",
        image: "/images/will.png",
        graduationYear: "2025",
        bio: "Cybersecurity enthusiast.",
        contact: "will.grayson@it.sorsu.edu.ph | +63 917 012 3456",
        socialLinks: { github: "https://github.com/willgrayson" }
    },
    {
        id: 15,
        name: "Ava Scott",
        email: "ava.scott@it.sorsu.edu.ph",
        department: "Information Technology",
        role: "Student",
        image: "/images/ava.png",
        graduationYear: "2025",
        bio: "Aspiring network engineer.",
        contact: "ava.scott@it.sorsu.edu.ph | +63 917 123 4568",
        socialLinks: { linkedin: "https://linkedin.com/in/avascott" }
    },
    {
        id: 16,
        name: "Joanne Marie",
        email: "joanne.marie@it.sorsu.edu.ph",
        department: "Information Technology",
        role: "Student",
        image: "/images/joanne.png",
        graduationYear: "2025",
        bio: "Cloud computing enthusiast.",
        contact: "joanne.marie@it.sorsu.edu.ph | +63 917 234 5679",
        socialLinks: { github: "https://github.com/joannemarie" }
    },
    {
        id: 17,
        name: "Naih Ashley",
        email: "naih.ashley@it.sorsu.edu.ph",
        department: "Information Technology",
        role: "Student",
        image: "/images/naih.png",
        graduationYear: "2025",
        bio: "AI and machine learning enthusiast.",
        contact: "naih.ashley@it.sorsu.edu.ph | +63 917 345 6780",
        socialLinks: { linkedin: "https://linkedin.com/in/naih-ashley" }
    },
    {
        id: 18,
        name: "Charice Pena",
        email: "charice.pena@it.sorsu.edu.ph",
        department: "Information Technology",
        role: "Student",
        image: "/images/charice.png",
        graduationYear: "2025",
        bio: "DevOps specialist.",
        contact: "charice.pena@it.sorsu.edu.ph | +63 917 456 7891",
        socialLinks: { github: "https://github.com/charicepena" }
    },
    {
        id: 20,
        name: "Elena Gilbert",
        email: "elena.gilbert@it.sorsu.edu.ph",
        department: "Information Technology",
        role: "Student",
        image: "/images/elena.jpg",
        graduationYear: "2026",
        bio: "Environmental engineer.",
        contact: "elena.gilbert@it.sorsu.edu.ph | +63 917 567 8902",
        socialLinks: { linkedin: "https://linkedin.com/in/elenagilbert" }
    },
    {
        id: 21,
        name: "Stefan Salvatore",
        email: "stefan.salvatore@arts.sorsu.edu.ph",
        department: "Performing Arts",
        role: "Student",
        image: "/images/stefan.png",
        graduationYear: "2026",
        bio: "Vampire and student.",
        contact: "stefan.salvatore@arts.sorsu.edu.ph | +63 917 678 9013"
    },
    {
        id: 22,
        name: "Micha Salvatore",
        email: "micha.salvatore@bio.sorsu.edu.ph",
        department: "Biology",
        role: "Student",
        image: "/images/micah.jpg",
        graduationYear: "2026",
        bio: "Vampire and student.",
        contact: "micha.salvatore@bio.sorsu.edu.ph | +63 917 789 0124"
    },
    {
        id: 23,
        name: "Bonnie Bennett",
        email: "bonnie.bennett@chem.sorsu.edu.ph",
        department: "Chemistry",
        role: "Student",
        image: "/images/bonnie.png",
        graduationYear: "2026",
        bio: "Witch and student.",
        contact: "bonnie.bennett@chem.sorsu.edu.ph | +63 917 890 1235"
    },
    {
        id: 24,
        name: "Caroline Forbes",
        email: "caroline.forbes@marketing.sorsu.edu.ph",
        department: "Marketing",
        role: "Student",
        image: "/images/caroline.png",
        graduationYear: "2026",
        bio: "Student and socialite.",
        contact: "caroline.forbes@marketing.sorsu.edu.ph | +63 917 901 2346"
    },
    {
        id: 26,
        name: "Mina Salvatore",
        email: "mina.salvatore@psych.sorsu.edu.ph",
        department: "Psychology",
        role: "Student",
        image: "/images/mina.png",
        graduationYear: "2026",
        bio: "Vampire and student.",
        contact: "mina.salvatore@psych.sorsu.edu.ph | +63 917 012 3457"
    },
    {
        id: 27,
        name: "Annie St. John",
        email: "annie.stjohn@arts.sorsu.edu.ph",
        department: "Arts",
        role: "Student",
        image: "/images/annie.jpg",
        graduationYear: "2026",
        bio: "Student and artist.",
        contact: "annie.stjohn@arts.sorsu.edu.ph | +63 917 123 4569"
    },
    {
        id: 28,
        name: "Lily Salvatore",
        email: "lily.salvatore@comm.sorsu.edu.ph",
        department: "Communications",
        role: "Student",
        image: "/images/lily.png",
        graduationYear: "2026",
        bio: "Student and socialite.",
        contact: "lily.salvatore@comm.sorsu.edu.ph | +63 917 234 5670"
    },
    {
        id: 29,
        name: "Jeremy Gilbert",
        email: "jeremy.gilbert@bio.sorsu.edu.ph",
        department: "Biology",
        role: "Student",
        image: "/images/jeremy.jpg",
        graduationYear: "2026",
        bio: "Student and werewolf.",
        contact: "jeremy.gilbert@bio.sorsu.edu.ph | +63 917 345 6781"
    },
    {
        id: 30,
        name: "Blythe Gilbert",
        email: "blythe.gilbert@psych.sorsu.edu.ph",
        department: "Psychology",
        role: "Student",
        image: "/images/blythe.png",
        graduationYear: "2026",
        bio: "Student and werewolf.",
        contact: "blythe.gilbert@psych.sorsu.edu.ph | +63 917 456 7892"
    }
];

// Get all unique majors, sorted alphabetically
const allMajors = [
    "All",
    ...Array.from(new Set(mockStudents.map(s => s.department))).sort()
];

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMajor, setSelectedMajor] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    // Filtered students
    const filteredStudents = useMemo(() => {
        return mockStudents.filter(student => {
            const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesMajor = selectedMajor === "All" || student.department === selectedMajor;
            const matchesYear = selectedYear === "All" || student.graduationYear === selectedYear;
            return matchesSearch && matchesMajor && matchesYear;
        });
    }, [searchTerm, selectedMajor, selectedYear]);

    // Dynamic majors from filtered students, always at least 8 if possible
    const years = ["All", ...Array.from(new Set(mockStudents.map(s => s.graduationYear)))];

    const handleCardClick = (student: Student) => {
        setSelectedStudent(student);
    };

    const closeModal = () => {
        setSelectedStudent(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-5 md:p-6">
            <div className="max-w-6xl mx-auto">
                {/* Search + Filters Container */}
                <Card className="mb-6 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        {/* Search */}
                        <div className="w-full sm:flex-1">
                            <div className="max-w-2xl w-full mx-auto sm:mx-0">
                                <SearchBar
                                    placeholder="Search by name, email or keyword..."
                                    value={searchTerm}
                                    onChange={setSearchTerm}
                                />
                            </div>
                        </div>

                        {/* Filters & View toggles */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <select
                                value={selectedMajor}
                                onChange={(e) => setSelectedMajor(e.target.value)}
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                            >
                                {allMajors.map(major => (
                                    <option key={major} value={major}>{major}</option>
                                ))}
                            </select>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                            >
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>

                            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                                    aria-pressed={viewMode === 'grid'}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM9 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM9 10a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z"/>
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                                    aria-pressed={viewMode === 'list'}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 12a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-3">
                        <p className="text-sm text-gray-600 dark:text-white">
                            Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredStudents.length}</span> result{filteredStudents.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                </Card>

                {/* Students Display */}
                {filteredStudents.length > 0 ? (
                    <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" : "space-y-4"}>
                        {filteredStudents.map(student => (
                            <Card
                                key={student.id}
                                className={`
                                    group cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 p-4
                                    ${viewMode === 'list' ? 'flex items-center' : 'flex-col items-center'}
                                `}
                                onClick={() => handleCardClick(student)}
                            >
                                <div className={`flex ${viewMode === 'list' ? 'w-full' : 'flex-col items-center justify-center h-full flex-1'}`}>
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/default-avatar.png'; }}
                                        className={`${
                                            viewMode === 'list'
                                                ? 'w-16 h-16 mr-4 flex-shrink-0 rounded-md mb-4 object-cover'
                                                : 'w-32 h-32 mb-4 rounded-md object-cover'
                                        }`}
                                    />
                                    <div className={`${viewMode === 'grid' ? 'flex flex-col items-center justify-center flex-1 text-center' : 'flex-1'}`}>
                                        <div className={`flex ${viewMode === 'grid' ? 'flex-col items-center justify-center' : 'justify-between items-start'} mb-2 w-full`}>
                                            <h3 className={`text-lg font-semibold text-gray-800 dark:text-white ${viewMode === 'grid' ? 'text-center' : ''}`}>
                                                {student.name}
                                            </h3>
                                            {/* Removed action buttons */}
                                        </div>
                                        <p className={`text-sm text-gray-600 dark:text-gray-200 ${viewMode === 'grid' ? 'text-center' : ''}`}>
                                            {student.department} • {student.graduationYear}
                                        </p>
                                        {viewMode === 'list' && (
                                            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                                                <a
                                                    href={`mailto:${student.email}`}
                                                    className="text-blue-600 hover:underline dark:text-blue-400"
                                                    onClick={e => e.stopPropagation()}
                                                >
                                                    {student.email}
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Card className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-300 text-lg">No students found matching your criteria.</p>
                    </Card>
                )}
            </div>

            {/* Modal */}
            {selectedStudent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
                        <div className="relative">
                            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                </svg>
                            </button>
                            <div className="p-6">
                                <img
                                    src={selectedStudent.image}
                                    alt={selectedStudent.name}
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/default-avatar.png'; }}
                                    className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
                                />
                                <h2 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white flex justify-center items-center">
                                    {selectedStudent.name}
                                </h2>
                                <p className="text-center text-gray-600 dark:text-gray-200 mb-4">{selectedStudent.department} • {selectedStudent.graduationYear}</p>
                                {selectedStudent.bio && (
                                    <p className="text-sm text-gray-700 dark:text-gray-100 mb-4 text-center">{selectedStudent.bio}</p>
                                )}
                                <div className="space-y-2">
                                    {/* Contact clickable */}
                                    {selectedStudent.contact && (
                                        <div className="flex flex-col items-center gap-2">
                                            {(() => {
                                                const [email, phone] = selectedStudent.contact.split('|').map(s => s.trim());
                                                return (
                                                    <>
                                                        {email && (
                                                            <a
                                                                href={`mailto:${email}`}
                                                                className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
                                                            >
                                                                {email}
                                                            </a>
                                                        )}
                                                        {phone && (
                                                            <a
                                                                href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                                                className="text-blue-600 hover:underline dark:text-blue-400 text-sm"
                                                            >
                                                                {phone}
                                                            </a>
                                                        )}
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    )}
                                    {/* Social Links with icons */}
                                    {selectedStudent.socialLinks && (
                                        <div>
                                            <strong className="text-sm">Social Links:</strong>
                                            <div className="flex gap-2 mt-1 flex-wrap">
                                                {Object.entries(selectedStudent.socialLinks).map(([platform, link]) => (
                                                    <a
                                                        key={platform}
                                                        href={link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 text-blue-600 hover:underline text-sm capitalize"
                                                    >
                                                        {platform === "linkedin" && (
                                                            <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/>
                                                            </svg>
                                                        )}
                                                        {platform === "github" && (
                                                            <svg className="w-4 h-4 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.072 1.836 2.809 1.306 3.495.998.108-.776.419-1.306.762-1.607-2.665-.305-5.466-1.332-5.466-5.931 0-1.309.469-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.184 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.657.242 2.881.119 3.184.77.84 1.235 1.912 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.814 1.102.814 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.629-5.371-12-12-12z"/>
                                                            </svg>
                                                        )}
                                                        {platform === "twitter" && (
                                                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.38 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.581-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/>
                                                            </svg>
                                                        )}
                                                        <span>{platform}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
