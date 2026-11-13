import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = name.toLowerCase().replace(/\s+/g, "_");
    localStorage.setItem("user", JSON.stringify({ name, username }));
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full name</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Create account</button>
    </form>
  );
}
