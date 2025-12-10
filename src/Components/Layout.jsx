import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        {/* This is where each page will render */}
        <Outlet />
      </div>
    </div>
  );
}
