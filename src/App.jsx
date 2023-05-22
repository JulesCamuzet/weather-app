import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Components/Dashboard/Dashboard";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/dashboard/:city" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/search-page" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
