import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", children, ...props }) => (
    <div
        className={`
            bg-white dark:bg-gray-800
            text-black dark:text-gray-100
            border border-gray-200 dark:border-gray-700
            rounded-xl
            ${className}
        `}
        {...props}
    >
        {children}
    </div>
);

export default Card;
