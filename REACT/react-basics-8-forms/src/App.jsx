import React from "react";

function App() {

    // Initialize State for Multiple Fields using Object
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFilled: true,
        option: "",
        favColor: ""
    })

    // Log Current State
    // console.log(formData)


    // Pass the Event Parameter
    const showStuff = (e) => {

        // Destructuring the Properties into variables
        const {type, value, name, checked} = e.target

        setFormData(prevState => {
            // Standard update object notation
            return {
                ...prevState,
                // Use Bracket Notation to modify changing variables
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }


    const handleSubmit = (e) => {
        // Prevent default - prevent page to reload and wipe data always do this
        e.preventDefault()
        console.log("prevented default")
        console.log(formData)
    }

    return (
        <div className="App">
            <h2>This is a Form</h2>

            {/* This event handler watches for the form submit when the button is clicked*/}
            <form onSubmit={handleSubmit}>


                {/*------------------ Text Based Inputs ------------------*/}


                {/* Use name attribute to refer to object and pass event listener when input changes*/}
                {/* When using the Value Attribute it will become a controlled input*/}
                <label>Name</label>
                <input type="text" name="firstName" onChange={showStuff} value={formData.firstName}/>
                <label>LastName</label>
                <input type="text" name="lastName" onChange={showStuff} value={formData.lastName}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={showStuff} value={formData.email}/>


                {/*------------------ Text Area Inputs ------------------*/}
                {/* Text area in React can be self-closing*/}
                <label>Comments</label>
                <textarea name="comments" onChange={showStuff} value={formData.comments}/>


                {/*------------------ Checkbox Inputs ------------------*/}

                {/*There is only Checked Attribute on checkbox rather than value*/}
                <label htmlFor="isFilled">Are you crazy?</label>
                <input type="checkbox" name="isFilled" id="isFilled" onChange={showStuff} checked={formData.isFilled}/>


                {/*------------------ Radio Inputs ------------------*/}
                {/* The name attribute makes them mutually exclusive */}
                {/*Checked works as the controlled component just like the checkboxes*/}
                {/* the name should match exactly the checked object otherwise won't work*/}
                <fieldset>
                    <legend>Radio Inputs</legend>
                    <label>Benchod</label>
                    <input type="radio" name="option" onChange={showStuff} value="benchod-1"
                           checked={formData.option === "benchod-1"}/>
                    <label>You Bloody 2</label>
                    <input type="radio" name="option" onChange={showStuff} value="benchod-2"
                           checked={formData.option === "benchod-2"}/>
                    <label>You Blastard 3</label>
                    <input type="radio" name="option" onChange={showStuff} value="benchod-3"
                           checked={formData.option === "benchod-3"}/>
                </fieldset>


                {/*------------------ Select Option Inputs ------------------*/}
                {/*Instead of using Selected on each option, the controlled stated is declared in the root <select>*/}
                <fieldset>
                    <legend>Favorite Color</legend>
                    <label htmlFor="favColor">Color Selector </label>
                    <select id="favColor" name="favColor" onChange={showStuff} value={formData.favColor}>
                        <option value="">-Select Color-</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                        <option value="orange">Orange</option>
                    </select>
                </fieldset>


                {/*------------------ Submit button ------------------*/}
                {/*The button tag can be used instead of the input type submit and the value is declared within tags*/}
                {/*The button tag default value is submit*/}
                <button disabled>Add Blog</button>
            </form>


        </div>)
}

export default App
