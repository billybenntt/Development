import React from "react"

export default function App() {

    const [formData, setFormData] = React.useState({email: "", password: "", passwordConfirm: "", isJoined: false})

    const handleData = event => {
        const {name, type, value, checked} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    };

    const handleSubmit = (event) => {
        console.log(formData)
        if (formData.password === formData.passwordConfirm) {
           alert("Successfully signed up")
            if (formData.isJoined) {
                console.log("Thanks for signing up for our newsletter!")
            }
        } else {
            console.log("passwords do not match")
        }
        event.preventDefault()
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email address" name="email" className="form--input"
                       onChange={handleData} value={formData.email}/>
                <input type="password" placeholder="Password" name="password" className="form--input"
                       onChange={handleData} value={formData.password}/>
                <input type="password" placeholder="Confirm password" name="passwordConfirm" className="form--input"
                       onChange={handleData} value={formData.passwordConfirm}/>
                <div className="form--marketing">
                    <input id="okayToEmail" type="checkbox" name="isJoined" onChange={handleData} checked={formData.isJoined}/>
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit"> Sign up</button>
            </form>
        </div>)
}
