import React from "react";

type Props = {
	placeholder?: string;
	value: string;
	onChange: (val: string) => void;
	className?: string;
};

const SearchBar: React.FC<Props> = ({ placeholder = "Search...", value, onChange, className = "" }) => {
	return (
		<div className={`flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md px-2 py-1 ${className}`}>
			<label htmlFor="admin-search" className="sr-only">Search</label>
			<svg className="w-4 h-4 text-gray-400 dark:text-gray-300 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
				<path d="M9 3a6 6 0 104.472 10.012l3.258 3.259 1.414-1.414-3.259-3.259A6 6 0 009 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>

			<input
				id="admin-search"
				type="text"
				className="flex-1 h-10 text-sm bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-400 text-gray-800 dark:text-white px-3 py-2 rounded-md"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>

			{value && (
				<button
					type="button"
					className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white p-1 rounded-sm"
					aria-label="Clear search"
					onClick={() => onChange("")}
				>
					<svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
						<path fillRule="evenodd" d="M10 8.586l3.95-3.95a1 1 0 111.414 1.414L11.414 10l3.95 3.95a1 1 0 01-1.414 1.414L10 11.414l-3.95 3.95A1 1 0 014.636 13.95L8.586 10 4.636 6.05A1 1 0 116.05 4.636L10 8.586z" clipRule="evenodd" />
					</svg>
				</button>
			)}
		</div>
	);
};

export default SearchBar;
