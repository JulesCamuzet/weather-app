import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<span>The map</span>} />
          <Route path="/saved_location" element={<div>saved_location</div>} />
          <Route path="/calendar" element={<div>calendar</div>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
