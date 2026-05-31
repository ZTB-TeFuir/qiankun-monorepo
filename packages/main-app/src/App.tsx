import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { registerMicroApps, start } from "qiankun";
import MicroAppContainer from "./pages/micro-app-container";

const apps = [
  {
    name: "sub-react",
    entry: "//localhost:8001",
    container: "#sub-app-container",
    activeRule: "/sub-react",
  },
  {
    name: "sub-vue",
    entry: "//localhost:8002",
    container: "#sub-app-container",
    activeRule: "/sub-vue",
  },
];

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Home</h2>
      <p>Welcome to the Qiankun Monorepo Demo!</p>
      <p>Click the links above to load micro-apps.</p>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    registerMicroApps(apps, {
      beforeLoad: (app) => {
        console.log("[main] before load", app.name);
        return Promise.resolve();
      },
      afterMount: (app) => {
        console.log("[main] after mount", app.name);
        return Promise.resolve();
      },
    });
    start({ sandbox: { experimentalStyleIsolation: true } });
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <nav
        style={{
          display: "flex",
          gap: 16,
          padding: "16px 24px",
          borderBottom: "1px solid #e8e8e8",
          background: "#001529",
        }}
      >
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
          Home
        </Link>
        <Link to="/sub-react" style={{ color: "#fff", textDecoration: "none" }}>
          React Sub-App
        </Link>
        <Link to="/sub-vue" style={{ color: "#fff", textDecoration: "none" }}>
          Vue Sub-App
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub-react" element={<MicroAppContainer />} />
        <Route path="/sub-vue" element={<MicroAppContainer />} />
        <Route path="/sub-react/*" element={<MicroAppContainer />} />
        <Route path="/sub-vue/*" element={<MicroAppContainer />} />
      </Routes>

      <div id="sub-app-container" />
    </div>
  );
}
