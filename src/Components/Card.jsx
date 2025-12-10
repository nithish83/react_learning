export default function Card({ title, count }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-count">{count}</div>
    </div>
  );
}
