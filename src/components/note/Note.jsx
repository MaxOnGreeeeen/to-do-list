import React, {useState} from 'react';
import DeleteButton from '../UI/DeleteButton/DeleteButton.jsx';
import ChangeContentButton from '../UI/changeContentButton/ChangeContentButton.jsx';

import classes from './Note.module.css';
function Note(props){

    const handleChangButtonClick = () =>{
        props.modalSetActive(true);
        props.setModalContent(props.note);
    }
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
                <ChangeContentButton onClick = {handleChangButtonClick}/>
           </div>
    </div>
    );
};
export default Note;