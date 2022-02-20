import React from 'react'
import Note from '../note/Note.jsx';
import classes from './NoteList.module.css'
function NoteList({notes, remove, title, change}){
    return(
        <div className = {classes.notesContainer}>
            <div className = {classes.titleDiv}>
                <h1 className = {classes.mainTitle}>
                    {title}
                </h1>
             </div>
            {notes.map(note =>
                <Note note = {note} remove = {remove} change = {change}key = {note.id}/>
            )}
        </div>
    );
};
export default NoteList;