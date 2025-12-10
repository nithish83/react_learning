import { useState } from "react";
import Card from "../Components/Card";

export default function Dashboard() {
  const [users, setUsers] = useState(10);
  const [orders, setOrders] = useState(5);
  const [revenue, setRevenue] = useState(2000);

  return (
    <div className="page-content">
      <h2>Overview</h2>

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
    </div>
  );
}
