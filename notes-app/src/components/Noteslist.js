import Note from "./Note";
import AddNote from "./AddNotes";
const Noteslist=({notes,handleAddNote,handleRemovenote}) =>{
    return <div className="notes-list">
        {notes.map((note)=> 
        <Note  id={note.id} text={note.text} date={note.date} handleRemovenote={handleRemovenote}/>

        )}
        <AddNote handleAddNote={handleAddNote}/>
        
    
    </div>;

};

export  default Noteslist;
