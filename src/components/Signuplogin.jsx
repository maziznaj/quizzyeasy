import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signuplogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isLogin) {
      // LOGIN: look for an account with this email and password
      const found = users.find(
        (u) => u.email === email && u.password === password
      );
      if (!found) {
        setError("Wrong email or password");
        return;
      }
      localStorage.setItem("user", JSON.stringify(found));
    } else {
      // SIGNUP: create a new account
      if (users.some((u) => u.email === email)) {
        setError("This email already has an account");
        return;
      }
      const newUser = {
        name,
        username: name.toLowerCase().replace(/\s+/g, "_"),
        email,
        password,
      };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      localStorage.setItem("user", JSON.stringify(newUser));
    }

    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{isLogin ? "Login" : "Create account"}</h1>

      {!isLogin && (
        <>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </>
      )}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p role="alert">{error}</p>}

      <button type="submit">{isLogin ? "Login" : "Create account"}</button>

      <p>
        {isLogin ? "No account yet?" : "Already have an account?"}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Login"}
        </button>
      </p>
    </form>
  );
}