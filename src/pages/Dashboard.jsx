import { useState } from "react";
import Card from "../Components/Card";

export default function Dashboard() {
  const [users, setUsers] = useState(10);
  const [orders, setOrders] = useState(5);
  const [revenue, setRevenue] = useState(2000);
  const [showAbout, setShowAbout] = useState(false);

  const closeAbout = () => setShowAbout(false);

  return (
    <div className="page-content">
      <h2>
        Overview
        <button
          onClick={() => setShowAbout(true)}
          style={{
            marginLeft: "12px",
            padding: "4px 8px",
            fontSize: "14px",
            cursor: "pointer",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          About
        </button>
      </h2>

      <div className="cards-row">
        <div onClick={() => setUsers(users + 1)}>
          <Card title="Users" count={users} />
        </div>

        <div onClick={() => setOrders(orders + 1)}>
          <Card title="Orders" count={orders} />
        </div>

        <div onClick={() => setRevenue(revenue + 100)}>
          <Card title="Revenue" count={`₹${revenue}`} />
        </div>
      </div>

      <p style={{ marginTop: "16px", color: "#555" }}>
        Click on the cards to increase the values.
      </p>

      {showAbout && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={closeAbout}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "32px",
              borderRadius: "8px",
              maxWidth: "500px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ marginTop: 0 }}>About Dashboard</h3>
            <p>
              Welcome to the Dashboard Application. This is a React-based
              dashboard designed to help you track and manage key metrics.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Track user count in real-time</li>
              <li>Monitor order statistics</li>
              <li>View revenue metrics</li>
              <li>Interactive card-based interface</li>
            </ul>
            <p style={{ color: "#666", fontSize: "14px" }}>
              Version 1.0.0 | Built with React & Vite
            </p>
            <button
              onClick={closeAbout}
              style={{
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Closeq
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
