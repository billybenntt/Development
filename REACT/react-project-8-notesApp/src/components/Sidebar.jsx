import React from "react";

export default function Sidebar(props) {

    // Generate List of Notes
    const noteElements = props.notes.map((note, index) => (

        <div key={note.id}>

            <div className={`title ${note.id === props.currentNote.id ? "selected-note" : ""}`}
                onClick={() => props.setCurrentNoteId(note.id)}>
                <h4 className="text-snippet">Note {index + 1}</h4>
            </div>

        </div>));


    // Rendering

    return (<section className="pane sidebar">
        <div className="sidebar--header">
            <h3>Notes</h3>

            {/* Define Create Note Listener and Button*/}
            <button className="new-note" onClick={props.newNote}>
                +
            </button>


            {/* Define Delete Note Listener and Button*/}
            <button className="delete-note" onClick={props.deleteNote}>
                -
            </button>


        </div>

        {/* Render Stack of Notes*/}
        {noteElements}
    </section>);
}
