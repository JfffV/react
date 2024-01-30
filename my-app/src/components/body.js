import { Button } from "react-bootstrap";
import { useEffect } from "react";
import Column from "./column.js";
import "./body.css";

function Body(props) {
  useEffect(() => {
    console.log(props);
  }, []);

const moveGame= (title, direction) =>{
  console.log(title)
  console.log(direction)
};

  return (
    <div className="games_container">
      <Column games={props.games.todo} title="todo"  moveGame={moveGame}/>
      <Column games={props.games.inprogress} title="inprogress"  moveGame={moveGame} />
      <Column games={props.games.done} title="done"  moveGame={moveGame} />
    </div>
  );
}

export default Body;
