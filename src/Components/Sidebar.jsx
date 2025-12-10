const menuItems = ["Home", "Users", "Orders", "Settings"];

export default function Sidebar() {
  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div key={index} className="sidebar-item">
          {item}
        </div>
      ))}
    </div>
  );
}
