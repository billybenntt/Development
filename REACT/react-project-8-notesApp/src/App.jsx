import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Editor from "./components/Editor.jsx";
import {data} from "./data";
import Split from "react-split";
import {nanoid} from "nanoid";

export default function App() {


    //   Initial State of Notes Data
    const [notes, setNotes] = React.useState([...data]);
    const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || "");


    // Nanoid is an ID Generator

    function createNewNote() {
        const newNote = {
            id: nanoid(), body: "# Type your markdown note's title here",
        };
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        setNotes((oldNotes) => oldNotes.map((oldNote) => {
            return oldNote.id === currentNoteId ? {...oldNote, body: text} : oldNote;
        }));
    }

    function findCurrentNote() {
        return (notes.find((note) => {
            return note.id === currentNoteId;
        }) || notes[0]);
    }

    function deleteNote() {
      console.log(currentNoteId)
    }

    return (<main>
        {/*   Conditional Rendering */}
        {notes.length > 0 ? (<Split sizes={[30, 70]} direction="horizontal" className="split">

            <Sidebar
                notes={notes}
                currentNote={findCurrentNote()}
                setCurrentNoteId={setCurrentNoteId}
              // pass Custom Prop
                newNote={createNewNote}
                deleteNote={deleteNote}
            />

            {currentNoteId && notes.length > 0 && (<Editor currentNote={findCurrentNote()} updateNote={updateNote}/>)}
        </Split>) :
            (// Render Basic when Notes are 0

            <div className="no-notes">
                <h1>You have no notes</h1>
                <button className="first-note" onClick={createNewNote}>
                    Create one now
                </button>


            </div>)}
    </main>);
}
