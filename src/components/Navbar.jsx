import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="w-full bg-gray-900 text-white flex items-center justify-between px-6 py-4">
      <h1 className="text-xl font-bold">quizzy</h1>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-700 px-3 py-1 rounded text-sm"
      >
        Toggle
      </button>

      {isOpen && (
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link to="/profile" className="hover:text-gray-300">
            Profile
          </Link>

          <Link to="/settings" className="hover:text-gray-300">
            Settings
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



