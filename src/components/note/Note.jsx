import React, {useState} from 'react';
import DeleteButton from '../UI/DeleteButton/DeleteButton.jsx';
import ChangeContentButton from '../UI/changeContentButton/ChangeContentButton.jsx';
import ModalWindow from '../modalWindow/ModalWindow.jsx';
import classes from './Note.module.css';
function Note(props){
    const [active, setActive] = useState(false)
    return(
    <div className={classes.note}>
        <ModalWindow active={active} setActive = {setActive}/>
         <div className= {classes.noteHeader}>
              <h1 className = {classes.title}>{props.note.title}</h1>
         </div>
          <div className={classes.noteDescription}>
                {props.note.description}
          </div>
           <div className={classes.buttonsBlock}>
                <DeleteButton className = {classes.button} onClick = {() => props.remove(props.note)}/>
                <ChangeContentButton onClick = {() => setActive(true)}/>
           </div>
    </div>
    );
};
export default Note;