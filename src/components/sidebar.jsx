import { useState } from "react";
function Navbar() {
  
   const [isOpen, setIsOpen] = useState(true);
  return (
  
 
    <nav
     
      className="w-full bg-gray-900 text-white flex items-center justify-between px-6 py-4"
    >
      <h1 className="text-xl font-bold">quizzy</h1>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dark-700 px-3 py-1 rounded text-sm"
      >
        Toggle
      </button>

      {/* REACT: only show this block if isOpen is true */}
      {isOpen && (
        <div className="flex gap-6">
          <a href="/javascript">JavaScript</a>
          <a href="/java">Java Syntax</a>
          <a href="/json">JSON</a>
        </div>
      )}
    </nav>
  );
}

// REACT: makes this component usable in other files
export default Navbar;




