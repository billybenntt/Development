import React from 'react'
import memePack from "../../src/memesData.js"

export default function Meme() {

    // Meme Initial State
    let meme = {
        topText: "Top Text",
        bottomText: "Bottom TEsss",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    }

    // State Initializer
    const [memeImage, setMemeImage] = React.useState(meme)
    const memesArray = memePack.data.memes

    const memeGeneratorImg = () => {

        const randomNumber = Math.floor(Math.random() * memesArray.length)

        console.log(memesArray[randomNumber])
        setMemeImage(prevState => {
            return {
                ...prevState,
                randomImage: memesArray[randomNumber].url,
                bottomText: memesArray[randomNumber].name
            }
        })

    }

    return (
        <main>
            <div className='form'>
                <input type="text" className='form--input' placeholder={memeImage.topText}/> <input type="text"
                                                                                                    className='form--input'
                                                                                                    placeholder={memeImage.bottomText}/>
                <button className='form--button' onClick={memeGeneratorImg}>Get a new meme</button>
            </div>
            <div className="image--container">
                <img src={memeImage.randomImage} alt=""/>
            </div>


        </main>
    )
}

