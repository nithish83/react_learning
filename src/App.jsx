import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (
    <Routes>
      {/* Layout route */}
      <Route path="/" element={<Layout />}>
        {/* index = default route for "/" */}
        <Route index element={<Dashboard />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="settings" element={<SettingsPage />} />
        {/* catch-all for unknown URLs */}
        <Route path="*" element={<div className="page-content"><h2>Page not found</h2></div>} />
      </Route>
    </Routes>
  );
}
