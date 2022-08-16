import React from "react";

function App() {

    // Initialize State for Multiple Fields using Object
    const [title, setTitle] = React.useState({firstName: "", lastName: ""})


    // Pass the Event Parameter
    const showStuff = (e) => {
        setTitle(prevState => {
            // Standard update object notation
            return {
                ...prevState,
                // Use Bracket Notation to modify object with dots
                [e.target.name]: e.target.value
            }
        })
    }


    return (
        <div className="App">
            <h2>This is a Form</h2>
            <form>

                <label>Name</label>
                {/* Use name attribute to refer to object and pass event listener when inptu changes*/}
                <input type="text" name="firstName" onChange={showStuff}/>

                <label>LastName</label>
                <input type="text" name="lastName" onChange={showStuff}/>

                {/* See Changes on current State*/}
                <p>FirstName: {title.firstName.length} lastName: {title.lastName.length}</p>

                <button>Add Blog</button>
            </form>


        </div>)
}

export default App
