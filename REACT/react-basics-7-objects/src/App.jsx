import React from "react"
import Star from "./components/Star.jsx";


// Current State of Object
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


    // Event Listener Trigger
    const toggleFavorite = () => {
        //Update State Function enclosed in parentheses ()
        setContact(prevState => {
                return {
                    ...prevState,
                    isFavorite: !prevState.isFavorite
                }
            }
        )
    }

    return (
        <main>
            <article className="card">
                <img src="../public/images/user.png" className="card--image" alt="Custom"/>
                <div className="card--info">

                    <Star  isFilled={contact.isFavorite} handleClick={toggleFavorite}/>

                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
