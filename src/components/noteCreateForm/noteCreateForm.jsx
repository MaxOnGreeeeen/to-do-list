import React, {useEffect, useState} from 'react';
import SaveButton from '../UI/SaveButton/SaveButton.jsx';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MultiLineTextarea from '../UI/MultilineTextarea/MultiLineTextarea'
import classes from './noteCreateForm.module.css'
import {useDataLoad} from "../../customHooks/useDataLoad";
import PostService from "../../API/PostService";
function NoteCreateForm({create}){
    const [note, setNote] = useState({title: '', description : ''});
    const [notesToAdd, setNotesToAdd] = useState([]);

    const [fetchPosts, isPostLoading, errorMessage] = useDataLoad(async () => {
        await fetchAllPosts;
    })
    const fetchAllPosts = async () =>{
        const postsFromServer = await PostService.getAllPosts();
        setNotesToAdd(postsFromServer);
    }
    const createRandomNote = () =>{
        const randomId = Math.floor(Math.random()*notesToAdd.length);
        const newNote = {
            title : notesToAdd[randomId].title,
            id : Date.now(),
            description: notesToAdd[randomId].body
        }
        create(newNote)
        setNote({title : '', description : ''})
    }

    useEffect(async () =>{
        await fetchAllPosts();
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
                 <div className={classes.buttonsBlock}>
                     <SaveButton onClick = {addNewNote}  children = {"Create"}/>
                     <SaveButton onClick = {createRandomNote}  style = {{background : "#538552", marginLeft: "0.3em"}} children = {"Random"}/>
                 </div>
               </Stack>
        </form>
    </div>
    );
};
export default NoteCreateForm;