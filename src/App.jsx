import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <UsersPage />
      </div>
    </div>
  );
}
