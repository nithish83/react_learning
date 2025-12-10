import { useEffect, useRef, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const searchInputRef = useRef(null);

  // 1️⃣ Focus search box on first render
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // 2️⃣ Fetch users on first render
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // 3️⃣ Re-filter list when `search` changes
  useEffect(() => {
    const lower = search.toLowerCase();

    const result = users.filter(
      (u) =>
        u.name.toLowerCase().includes(lower) ||
        u.email.toLowerCase().includes(lower)
    );

    setFiltered(result);
  }, [search, users]);

  return (
    <div className="page-content">
      <h2>Users</h2>

      <div style={{ margin: "12px 0" }}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            width: "280px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {loading && <p>Loading users...</p>}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {!loading && !error && filtered.length === 0 && (
        <p>No users found.</p>
      )}

      {!loading && !error && filtered.length > 0 && (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "12px",
            backgroundColor: "white",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>City</th>
              <th style={thStyle}>Company</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id}>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.address.city}</td>
                <td style={tdStyle}>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  borderBottom: "1px solid #ddd",
  textAlign: "left",
  padding: "8px",
  backgroundColor: "#f3f4f6",
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "8px",
  fontSize: "14px",
};
