import React, {useState} from 'react';
import data from './data.js';
import List from './List.jsx';


function App() {

    // Initialize State from Object
    const [people, setPeople] = useState(data)

    // State Changing Event Listener Function
    const clearPeople = () => {

        // Completely Replace the Array with an empty one
        setPeople([])
    }

    return (<main>

            <section className="container">
                <h3>{people.length} Birthdays Today</h3>

                {/* Pass Prop to Child Component */}
                <List people={people}/>

                {/* Event Listener */}
                <button onClick={clearPeople}>Clear All</button>

            </section>

        </main>

    )
}

export default App;
