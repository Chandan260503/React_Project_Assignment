import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Correct imports

import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full viewport height
          textAlign: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px", padding: "20px" }}>
          <h2>Multi-Feature App</h2>
          <nav style={{ marginBottom: "20px" }}>
            <Link
              to="/counter"
              style={{ margin: "0 10px", textDecoration: "none" }}
            >
              <button>Counter</button>
            </Link>
            <Link
              to="/user-form"
              style={{ margin: "0 10px", textDecoration: "none" }}
            >
              <button>User Form</button>
            </Link>
            <Link
              to="/rich-text-editor"
              style={{ margin: "0 10px", textDecoration: "none" }}
            >
              <button>Rich Text Editor</button>
            </Link>
          </nav>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/rich-text-editor" element={<RichTextEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
