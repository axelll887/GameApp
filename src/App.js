import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GameCollection from "./pages/GameCollection";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {

  const [gamesToAdd, setGamesToAdd] = useState({
    games: [],
  });
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/Gamecol"
            element={
              <GameCollection
                gamesToAdd={gamesToAdd}
                setGamesToAdd={setGamesToAdd}
              />
            }
          />
          <Route
            path="/Search"
            element={
              <Search
                gamesToAdd={gamesToAdd}
                setGamesToAdd={setGamesToAdd}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
