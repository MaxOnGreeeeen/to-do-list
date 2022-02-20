import React, {useEffect, useState} from 'react';
import SaveButton from '../UI/SaveButton/SaveButton.jsx';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MultiLineTextarea from '../UI/MultilineTextarea/MultiLineTextarea'
import classes from './noteCreateForm.module.css'
function NoteCreateForm({create}){
    const [note, setNote] = useState({title: '', description : ''});
    const [notesToAdd, setNotesToAdd] = useState([]);
    const createRandomNote = () =>{
        const randomId = Math.floor(Math.random()*notesToAdd.length);
        console.log(randomId)
        const newNote = {
            title : notesToAdd[randomId].title,
            id : Date.now(),
            description: notesToAdd[randomId].body
        }
        console.log(newNote)
        create(newNote)
        setNote({title : '', description : ''})
    }
    useEffect(async () =>{
        console.log("Данные подгрузились")
        try {
            const resultFromBack = await fetch('https://jsonplaceholder.typicode.com/posts')
            setNotesToAdd(await resultFromBack.json());
        } catch (error) {
            console.log('error')
        }
    }, [])

    const addNewNote = (e) =>{
         e.preventDefault();
         const newNote = {
            ...note, id : Date.now(),
         }
         create(newNote);
         setNote({title : '', description : ''})
    }
    return(
    <div className={classes.noteForm}>
       <form>
             <Stack direction="column" spacing={2}>
                <TextField
                    size = "small"
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value = {note.title}
                    onChange = {e => setNote({...note, title : e.target.value})}/>
                 <MultiLineTextarea
                    id ="outlined-basic"
                    value = {note.description}
                    label = "Description"
                    onChange = {e => setNote({...note, description : e.target.value})}/>
                <SaveButton onClick = {addNewNote}  children = {"Create"}/>
                 <SaveButton onClick = {createRandomNote}  style = {{background : "red"}} children = {"Random Note"}/>
               </Stack>
        </form>
    </div>
    );
};
export default NoteCreateForm;