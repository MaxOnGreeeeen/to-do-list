import React,{useEffect, useState} from 'react';
import NoteCreateForm from '../components/noteCreateForm/noteCreateForm';
import NoteList from '../components/noteList/NoteList.jsx';
import ButtonAppBar from "../components/TopPanel/ButtonAppBar";
import {connect} from "react-redux";

const Notes = (active) => {
    const [notes, setNotes] = useState([
        {title : 'sdfsdf', id : 1,description: 'fdgsgsdf sdfgsdf sdfgsdg'},
        {title : 'Меня зовут максим Андреевич',id : 2, description:'Мне 22 года'},
        {title : 'Fsdf',id : 3, description:'Привет Олег'},
        {title : 'sdfgsdfg',id : 4, description:'Hello world : println("heeeello world")'}
    ]);
    const [marginLeft, setMarginLeft] = useState(active);

    const addNote = (noteToAdd) =>{
        setNotes([noteToAdd,...notes])
    }
    const changeNote = (changedNote) =>{
        setNotes(() =>{
            return notes.map((item) => {
                if (item.id !== changedNote.id) {
                    return item
                }
                // Otherwise, this is the one we want - return an updated value
                return {...changedNote}
            })
        })
    }
    useEffect(() =>{
        setMarginLeft(false)
    },[])
    useEffect(() => {
        setMarginLeft( (prev) => !prev)
    },[active])

    const removeNote = (noteToDelete) =>{
        setNotes(notes.filter( note => note.id !== noteToDelete.id))
    }
    return (
        <div className={marginLeft ? 'App' : 'App disableNavBar'}>
            <NoteCreateForm create = {addNote}/>
            {notes.length !== 0
                ? <NoteList
                    title = "Your notes list"
                    notes = {notes}
                    remove = {removeNote}
                    changeNote = {changeNote}/>
                : <div style={{textAlign: "center", fontSize: 25}}>Notes are not found :(</div>
            }
        </div>
    );
};

export default Notes;