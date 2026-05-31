import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h2 style={{ color: "#1677ff" }}>React Sub-App</h2>
      <p>This is the React micro-frontend, loaded by qiankun.</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: "8px 24px",
          fontSize: 16,
          cursor: "pointer",
          background: "#1677ff",
          color: "#fff",
          border: "none",
          borderRadius: 6,
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}
