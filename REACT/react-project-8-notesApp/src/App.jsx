import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Editor from "./components/Editor.jsx";
import {data} from "./data";
import Split from "react-split";
import {nanoid} from "nanoid";

export default function App() {


    //   Initial State of Notes Data if empty initialize to empty array
    const [notes, setNotes] = React.useState( JSON.parse(localStorage.getItem("notes"))||[]);

    // If the first note exists(True) assign the ID else /assign empty string ""
    const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || "");

    // External Action
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])


    // Nanoid is an ID Generator

    function createNewNote() {

        // Starter Object
        const newNote = {
            id: nanoid(), body: "# Type your markdown note's title here",
        };

        // Pass new Object to Notes Array
        setNotes((prevNotes) => [newNote, ...prevNotes]);


        //  Grab ID from new Note and  pass it to selected note
        setCurrentNoteId(newNote.id);
    }


    function updateNote(text) {
        //  Modify state of notes
        setNotes((oldNotes) => oldNotes.map((oldNote) => {
            return oldNote.id === currentNoteId ? {...oldNote, body: text} : oldNote;
        }));
    }

    function findCurrentNote() {
        return (notes.find((note) => {
            return note.id === currentNoteId;
        }) || notes[0]);
    }


    return (

        <main>
            {/*   Conditional Rendering */}
            {notes.length > 0 ? (<Split sizes={[30, 70]} direction="horizontal" className="split">

                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                />

                {currentNoteId && notes.length > 0 && (
                    <Editor currentNote={findCurrentNote()} updateNote={updateNote}/>)}
            </Split>) : (// Render Basic when Notes are 0

                <div className="no-notes">
                    <h1>You have no notes</h1>
                    <button className="first-note" onClick={createNewNote}>
                        Create one now
                    </button>


                </div>)}
        </main>

    );
}
