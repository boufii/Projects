import { useState } from "react";


const AddNote = ({handleAddNote}) => {
    const [noteText,SetNoteText]=useState("");
    const characterLimte=200;

    const handleChange = (event) => {
      if(characterLimte-event.target.value.length>=0)
        SetNoteText(event.target.value);
      };      
    const handleSaveClick=()=>{
      if (noteText.trim().length>0){
        handleAddNote(noteText);
        SetNoteText("");
      }
    }

  return (
    <div className="note new">
      <textarea 
        rows="8"
        cols="10"
        placeholder="Type to add a note ... "
        value={noteText}
        onChange={handleChange}></textarea>
      <div className="note-footer">
        <small>{characterLimte - noteText.length} Remaining </small>
        <button className="save" onClick={handleSaveClick}> Save </button>
      </div>
    </div>
  );
};
export default AddNote;
