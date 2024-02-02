import { Button } from "react-bootstrap";
import { useEffect } from "react";
import "./body.css";

function Column(props) {
  useEffect(() => {
    console.log(props);
  }, []);

  

  return (
    <div className="border">
      <p className="title_game">{props.title}</p>
      {props.games.map((game) => (
        <div className="for_games">
          {props.title === 'inprogress' || props.title === 'done' ?(  
            
          <Button onClick={()=>{props.moveGame(props.title, 'left', game.name)}} variant="primary">
            <i class="bi bi-arrow-left"></i>
          </Button> ) : null}
          <p className="game_name"> {game.name} </p>
          
          {props.title === 'todo' || props.title === 'inprogress'  ?(
          <Button onClick={()=>{props.moveGame(props.title, 'right', game.name)}} variant="primary">
            <i class="bi bi-arrow-right"></i>
          </Button>) : null}
          

          </div>
      ))}
    </div>
  );
}

export default Column;
