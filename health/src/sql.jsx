import { useState } from "react";

function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle Login/Signup

  // 🔹 Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      setMessage(data.message || "Signup successful!");

      if (response.ok) {
        setName("");
        setEmail("");
        setPassword("");
        setIsLogin(true); // Switch to login after signup
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setMessage("Signup failed. Try again.");
    }
  };

  // 🔹 Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      // ✅ Check if login was successful
      if (!response.ok) {
        setMessage(data.error || "Login failed. Check your credentials.");
        return;
      }
  
      // ✅ Only log in when response is OK
      setMessage("✅ Login successful!");
      console.log("User logged in:", data);
  
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Login failed. Check your credentials.");
    }
  };
  

  return (
    <div>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        {!isLogin && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>

      {message && <p>{message}</p>}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an Account" : "Already have an account? Login"}
      </button>
    </div>
  );
}

export default Auth;
