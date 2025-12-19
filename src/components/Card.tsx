import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "", ...rest }) => {
    // Default supports dark mode: use #1f2937 for dark background and smooth transitions
    const base = "bg-white dark:bg-[#1f2937] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 rounded-xl transition-colors";
    return (
        <div {...rest} className={`${base} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
