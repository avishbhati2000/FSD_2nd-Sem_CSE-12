import React from "react";

function App() {
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#d3d3d3", // light gray background
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF", // blue
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  };

  return (
    <div style={pageStyle}>
      <form style={formStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Student Registration Form
        </h2>
        <input type="text" placeholder="Student Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <input type="text" placeholder="Course" style={inputStyle} />
        <input type="tel" placeholder="Mobile Number" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
}

export default App;
