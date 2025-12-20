import React from "react";

type Props = {
	placeholder?: string;
	value: string;
	onChange: (val: string) => void;
	className?: string;
};

const SearchBar: React.FC<Props> = ({ placeholder = "Search...", value, onChange, className = "" }) => (
	<div className={`w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 flex items-center ${className}`}>
		<label htmlFor="admin-search" className="sr-only">Search</label>
		<svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
			<path d="M9 3a6 6 0 104.472 10.012l3.258 3.259 1.414-1.414-3.259-3.259A6 6 0 009 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>

		<input
			id="admin-search"
			type="text"
			className="flex-1 h-10 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-2 py-1 rounded-md focus:outline-none"
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
				<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
					<path fillRule="evenodd" d="M10 8.586l3.95-3.95a1 1 0 111.414 1.414L11.414 10l3.95 3.95a1 1 0 01-1.414 1.414L10 11.414l-3.95 3.95A1 1 0 014.636 13.95L8.586 10 4.636 6.05A1 1 0 116.05 4.636L10 8.586z" clipRule="evenodd" />
				</svg>
			</button>
		)}
	</div>
);

export default SearchBar;
