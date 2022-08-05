import React from 'react'
import memePack from "../../src/memesData.js"

export default function Meme() {

    const [thingsArray, modifyState] = React.useState(["Thing 1", "Thing 2"])

    const addItem = () => {
        const newThing = `Thing ${thingsArray.length + 1}`;
        const randomNumber = Math.floor(Math.random() * 100)
        modifyState(oldState => [...oldState, memePack.data.memes[randomNumber].name])
        console.log(thingsArray);
    }



    const stackofPees = thingsArray.map(element => <p>{element}</p>)

    return (
        <main>

            {stackofPees}
            <div className='form'>
                <input type="text" className='form--input' placeholder='Top Text' />
                <input type="text" className='form--input' placeholder='Bottom Text' />
                <button className='form--button' onClick={addItem}>Get a new meme</button>
            </div>


        </main>
    )
}

