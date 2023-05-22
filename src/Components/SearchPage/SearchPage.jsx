import { useEffect, useRef, useState } from "react";
import "./SearchPage.css";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  const [barActive, setBarActive] = useState(false);
  const searchBarRef = useRef();

  const handleClick = () => {
    if (barActive) {
      const city = searchBarRef.current.value;
      if (city === "") {
        setBarActive(false);
      } else {
        navigate(`/dashboard/${city}`);
      }
    } else {
      setBarActive(true);
      searchBarRef.current.focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      const city = searchBarRef.current.value;
      if (e.key === 'Enter') {
        if (city != "" && document.activeElement === searchBarRef.current) {
          navigate(`/dashboard/${city}`);
        }
      }
    });
  }, []);

  return (
    <div className="search-page">
      <h1 className="search-page-title">WeathApp</h1>
      <div
        className={
          barActive ? "search-page-container active" : "search-page-container"
        }
      >
        <button onClick={handleClick} className="search-page-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input ref={searchBarRef} type="text" className="search-page-input" />
      </div>
    </div>
  );
};

export default SearchPage;
