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
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Profile</a>
          <a href="#" className="hover:text-gray-300">Settings</a>
        </div>
      )}
    </nav>
  );
}

// REACT: makes this component usable in other files
export default Navbar;




