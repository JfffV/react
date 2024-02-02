import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import Column from "./column.js";
import "./body.css";

function Body(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  const moveGame = (title, direction, name) => {
    const games = JSON.parse(JSON.stringify(props.games));
    let keyToAdd = '';
  
    if (title === 'todo' || title === 'done') {
      keyToAdd = 'inprogress';
    } else {
      keyToAdd = direction === 'left' ? 'todo' : 'done';
    }

    games[title] = games[title].filter((game) => game.name !== name);
    games[keyToAdd].push({ name: name });
    props.setGames(games);  
  };

  return (
    <div className="games_container">
      <Column games={props.games.todo} title="todo" moveGame={moveGame} />
      <Column
        games={props.games.inprogress}
        title="inprogress"
        moveGame={moveGame}
      />
      <Column games={props.games.done} title="done" moveGame={moveGame} />
    </div>
  );
}

export default Body;
