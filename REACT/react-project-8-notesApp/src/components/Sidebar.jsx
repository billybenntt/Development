import React from "react";

export default function Sidebar(props) {

    // Generate List of Notes from array of note objects
    const noteElements = props.notes.map((note, index) => (

        <div key={note.id}>

            {/*Select current note and apply style*/}
            <div className={`title ${note.id === props.currentNote.id ? "selected-note" : ""}`}
                onClick={() => props.setCurrentNoteId(note.id)}>

                {/* Note Summary Part */}
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


        </div>

        {/* Render Stack of Notes*/}
        {noteElements}
    </section>);
}
