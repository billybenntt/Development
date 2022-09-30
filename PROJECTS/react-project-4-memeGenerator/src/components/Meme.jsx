import React from "react";
import memesData from "../memesData.js";

export default function Meme() {

    // Initialize Meme Data
    const [allMemeData, setAllMemeData] = React.useState([]);

    // Initialize Text and Image State
    const [meme, setMeme] = React.useState({
        topText: "", bottomText: "", randomImage: "https://i.imgflip.com/1bij.jpg",
    });

    // Update the Meme
    function getMemeImage() {
        const memesArray = allMemeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        // Update Meme Image State
        setMeme((prevMeme) => ({
            ...prevMeme, randomImage: url,
        }));
    }

    // Updates the Text of Meme
    const changeText = (event) => {
        const {name, value} = event.target;
        setMeme((prevState) => ({...prevState, [name]: value}));
    };


    // Use Effect - Calling API Upon Rendering
    React.useEffect(() => {
        const url = "https://api.imgflip.com/get_memes"

        // Standard Fetch->Then Notation
        fetch(url).then(res => res.json()).then(data => setAllMemeData(data))

        // If the meme dependency changes call the API Again
    }, [meme])


    // The Text above the Meme is not tied to the JSON data and can be changed by the user
    return (<main>
        <div className="form">
            <input
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                onChange={changeText}
                value={meme.topText}
            />
            <input
                type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                onChange={changeText}
                value={meme.bottomText}
            />

            {/*This Will update the image */}
            <button className="form--button" onClick={getMemeImage}>
                Get a new meme image 🖼
            </button>
        </div>


        <div className="meme">

            {/* Map is not required when rendering a single image*/}
            <img src={meme.randomImage} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>);
}
