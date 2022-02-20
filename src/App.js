import './App.css';
import {useState, useEffect} from "react";
import NoteCreateForm from './components/noteCreateForm/noteCreateForm';
import NoteList from './components/noteList/NoteList.jsx';
import ButtonAppBar from "./components/TopPanel/ButtonAppBar";

function App(){
  const [notes, setNotes] = useState([
      {title : 'sdfsdf', id : 1,description: 'fdgsgsdf sdfgsdf sdfgsdg'},
      {title : 'Меня зовут максим Андреевич',id : 2, description:'Мне 22 года'},
      {title : 'Fsdf',id : 3, description:'Привет Олег'},
      {title : 'sdfgsdfg',id : 4, description:'Hello world : println("heeeello world")'}
      ]);

  const addNote = (noteToAdd) =>{
      setNotes([...notes, noteToAdd])
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
  useEffect(() => {
  },[notes])

  const removeNote = (noteToDelete) =>{
      setNotes(notes.filter( note => note.id !== noteToDelete.id))
  }
  return (
    <div className="App">
        <ButtonAppBar/>
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
}
export default App;
