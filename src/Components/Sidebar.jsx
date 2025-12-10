import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/" },
  { label: "Users", path: "/users" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            "sidebar-item" + (isActive ? " sidebar-item-active" : "")
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
