import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("rugu_count");
    return saved ? Number(saved) : 5;
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async (n = count) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://randomuser.me/api/?results=${n}&nat=us,gb,ca,au`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setUsers(data.results || []);
    } catch (err) {
      setError(err.message || "Failed to fetch");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // initial fetch
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("rugu_count", String(count));
  }, [count]);

  return (
    <div className="app">
      <header className="topbar">
        <h1>Random User Generator</h1>
        <div className="controls">
          <label>
            Count:
            <input
              type="number"
              min="1"
              max="20"
              value={count}
              onChange={(e) => setCount(Number(e.target.value || 1))}
            />
          </label>
          <button onClick={() => fetchUsers()}>Fetch</button>
          <button onClick={() => fetchUsers(count)}>Refresh</button>
        </div>
      </header>

      <main>
        {loading && <div className="status">Loading users…</div>}
        {error && <div className="status error">Error: {error}</div>}

        {!loading && !error && users.length === 0 && (
          <div className="status">No users yet — click Fetch</div>
        )}

        <section className="grid">
          {users.map((u, i) => (
            <UserCard key={u.login.uuid || i} user={u} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <small>Built for Day 57 — Random User Generator</small>
      </footer>
    </div>
  );
}

export default App;

