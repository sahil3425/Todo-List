import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from '@material-ui/icons/Check';
const Comp = (prop) => {
    const[line,setLine]=useState(false);
    const cutIt=()=>{
        if(line===false)
        setLine(true);
        else
        setLine(false);
    }
  
  return (
     
    <>
      <div className="todo_style">
      <DeleteIcon className="deleteIcon" onClick={()=>{
        prop.onSelect(prop.id);}}/>
        <span onClick={cutIt}>
       
          <CheckIcon className="checkIcon" />
        </span>
        <li style={{textDecoration:line?'line-through':"none"}}>{prop.text}</li>
      </div>
    </>
  );
};
export default Comp;
