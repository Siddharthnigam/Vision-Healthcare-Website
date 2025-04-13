import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Sign.css";

const SlidingForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add state for authentication
  const navigate = useNavigate(); // Initialize navigation

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setMessage("");
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    setMessage("");
  };

  // Handle Signup
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Signup successful! Redirecting...");
        setIsAuthenticated(true); // Set authentication state to true
        setTimeout(() => navigate("/"), 2000); // Redirect to home page
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.error || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setMessage("Signup failed. Try again.");
    }
  };

  // Handle Login
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Login successful! Redirecting...");
        setIsAuthenticated(true); // Set authentication state to true
        setTimeout(() => navigate("/"), 2000); // Redirect to home page
      } else {
        setMessage(data.error || "Login failed. Enter correct password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Login failed. Enter correct password.");
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className="flex justify-center items-center h-screen">
         <center> {message && <p className="message text-2xl text-blue-700">{message}</p>}</center>
        </div>
      ) : (
        <div className="main"><br /><br />
          <div className={`container ${isSignUp ? "right-panel-active" : ""}`} id="container">
            {/* Sign Up Form */}
            <div className="form-container sign-up-container">
              <form onSubmit={handleSignUp}>
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="sign-up-button">Sign Up</button>
              </form>
            </div>

            {/* Sign In Form */}
            <div className="form-container sign-in-container">
              <form onSubmit={handleSignIn}>
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button>Sign In</button>
              </form>
            </div>

            {/* Overlay for switching */}
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className="ghost" onClick={handleSignInClick}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 >Hello, Friend!</h1>
                  <p>Enter your personal details and start your journey with us</p>
                  <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
    
         
       
        </div>
      )}
    </div>
  );
};

export default SlidingForm;
