import React from "react";
import {useState} from "react";
// components
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Cards_render from "./components/Cards_render";
// components END
// APPS LIST
import app_list from "./List";
// APPS LIST END
function App() {
  const [render, setRender] = useState(<Cards_render />);
  // search bar features
  const search = (inputValue) => {
    let input_formating = inputValue.toLowerCase().trim();
    const find = app_list.filter((app) => {
      return app.name.includes(input_formating);
    });
    console.log(input_formating);
    console.log("find : ", find);
    setRender(
      find.map((filter) => {
        return (
          <Card
            name={filter.name}
            release={filter.release}
            href={filter.href}
            cover={filter.cover}
            password={filter.password}
            origins={filter.origins}
          />
        );
      })
    );
  };
  // seacrh bar features END

  return (
    <>
      <div className="body">
        <div className="container">
          <h1 className="title">
            Lenz <span>4</span> Games
          </h1>
          {/* navbar */}
          <Navbar />
          {/* navbar END */}
          {/* typograph */}
          <div className="typograph">
            <h1>
              Place To Download <span>FREE</span> Games
            </h1>
            <p>upload recommended games from comunity (no ads & redirect)</p>
          </div>
          {/* typograph END*/}
        </div>
        {/* main content */}
        <main className="content">
          <div className="content-container">
            <div className="search-feature-wrapper">
              <input
                type="text"
                id="search"
                placeholder="Search game names here"
              />
              <button
                id="search-btn"
                onClick={() => {
                  search(document.getElementById("search").value);
                }}
              >
                search
              </button>
            </div>
            <p>
              <span>NOTE :</span> all the game uploaded are taken from other
              mentioned websites
            </p>
            <div className="games-panel">{render}</div>
          </div>
        </main>
        {/* main content END*/}
      </div>
    </>
  );
}

export default App;
