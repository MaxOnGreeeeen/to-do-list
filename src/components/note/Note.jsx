import React from 'react';
import DeleteButton from '../UI/DeleteButton/DeleteButton.jsx';
import classes from './Note.module.css';
function Note(props){
    return(
    <div className={classes.note}>
         <div className= {classes.noteHeader}>
              <h1 className = {classes.title}>{props.note.title}</h1>
         </div>
          <div className={classes.noteDescription}>
                {props.note.description}
          </div>
           <div className={classes.buttonsBlock}>
                <DeleteButton className = {classes.button} onClick = {() => props.remove(props.note)}/>
           </div>
    </div>
    );
};
export default Note;