import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<CustomInputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      {...props}
    />
  );
};

export default Input;
