import "./App.css";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/dashboard" element={<div>dashboard</div>} />
        <Route path="/map" element={<div>map</div>} />
        <Route path="/saved_location" element={<div>saved_location</div>} />
        <Route path="/calendar" element={<div>calendar</div>} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
