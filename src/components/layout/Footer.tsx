import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-3">
      © {new Date().getFullYear()} SorSU NEXUS - All rights reserved.
    </footer>
  );
};

export default Footer;
