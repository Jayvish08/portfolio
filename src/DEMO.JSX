import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DEMO = () => {
  const [showForm, setShowForm] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "1234") {
      navigate("/contacts");
    } else {
      setError("Invalid code");
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setShowForm(!showForm)}>Portfolio</button>
      </nav>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="Enter Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button type="submit">Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default DEMO;