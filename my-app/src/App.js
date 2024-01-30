import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [games, setGames] = useState({
    todo: [{ name: "Dota" }, { name: "Hollow" }],
    inprogress: [{ name: "Cs" }, { name: "Wow" }],
    done: [{ name: "LoL" }, { name: "Cuphead" }],
  });

  return (
    <div className="main">
      <Header games={games} setGames={setGames} />
      <Body games={games} />
    </div>
  );
}

export default App;
