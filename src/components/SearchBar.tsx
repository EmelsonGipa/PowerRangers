import React from 'react';

interface SearchBarProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({
    placeholder = 'Search...',
    value,
    onChange,
}: SearchBarProps) {
    return (
        <div className="relative w-full">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-2.5 sm:py-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition-all duration-200 text-sm sm:text-base"
            />
            <svg className="absolute left-3 top-2.5 sm:top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    );
}
