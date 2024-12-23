import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const convert = () => {
    const asyncFunction = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/events/public`
      );
      const data = await response.json();
      const email = data[0].payload.commits[0].author.email;
      setEmail(email);
    };
    asyncFunction();
  };
  return (
    <div className="container">
      <h3>Github username to noreply email converter</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Github username"
      />
      <button style={{ marginLeft: 20 }} onClick={convert}>
        Convert
      </button>
      {email && (
        <div style={{ marginTop: 20 }}>
          Noreply email: <code>{email}</code>
        </div>
      )}
    </div>
  );
}

export default App;
