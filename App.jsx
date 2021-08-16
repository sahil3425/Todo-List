import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Comp from "./Comp";
import "./index.css";

const App = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const deleteItem = (id) => {
    setNewItem((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });}
 
  const listOfItems = () => {
    setNewItem((pre) => {
      return [...pre, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add an Item"
            value={item}
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon className="addIcon" />
          </Button>
          <br />
          <ol>
            {/* <li>{item}</li> */}
            {newitem.map((cur, index) => {
              return (
                <Comp key={index} text={cur} id={index} onSelect={deleteItem} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
