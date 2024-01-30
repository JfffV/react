import "./header.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Header(props) {
  const [gameName, setGameName] = useState("");
  const [gameStatus, setGameStatus] = useState("todo");
  const addGame = () => {
    const games = JSON.parse(JSON.stringify(props.games));
    games[gameStatus].push({ name: gameName });
    props.setGames(games);
  };
  
  return (
    <div className="header">
      <Form.Control
        className="input"
        type="text"
        placeholder="Введіть назву гри"
        onChange={(event) => setGameName(event.target.value)}
      />
      <Form.Select
        className="asd"
        onChange={(event) => setGameStatus(event.target.value)}
      >
        <option value="todo">To do</option>
        <option value="inprogress">In progress</option>
        <option value="done">Done</option>
      </Form.Select>
      <Button variant="primary" onClick={addGame} className="">
        {" "}
        Add{" "}
      </Button>
    </div>
  );
}

export default Header;
