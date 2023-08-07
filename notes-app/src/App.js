import { useEffect, useState } from "react";
import Noteslist from "./components/Noteslist";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      text: "This is my first note !",
      date: "15/04/2021",
      id: nanoid(),
    },
    {
      text: "This is my second note !",
      date: "19/04/2021",
      id: nanoid(),
    },
    {
      text: "This is my third note !",
      date: "17/04/2021",
      id: nanoid(),
    },
    {
      text: "This is my fourth note !",
      date: "10/04/2021",
      id: nanoid(),
    },
  ]);
  const [searchtext, setSearchtext] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-note-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-note-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

   

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const RemoveNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkmode={setDarkMode} />
        <Search handleSearchnote={setSearchtext} />
        <Noteslist
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchtext)
          )}
          handleAddNote={addNote}
          handleRemovenote={RemoveNote}
        />
      </div>
    </div>
  );
};

export default App;
