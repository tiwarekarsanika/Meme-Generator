import "./meme.css";
import memeData from "./memeData";
import React, { useState } from "react";


function Header(){
    return(
        <header className="header">
            <img className="header--image" src="memeLogo.jpg" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

function CreateMeme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memeData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="form--input" placeholder="Bottom text" name="topText" value={meme.topText} onChange={handleChange}/>
                <button className="form--button" onClick={getMemeImage}>Get new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}

export default function WebContent(){
    return(
        <div>
            <Header />
            <CreateMeme />
        </div>
    )
}

// const [isGoingOut, setIsGoingOut] = React.useState(true)
// function changeMind() {
//     setIsGoingOut(prevState => !prevState)
// } using call back function in setIsGoingOut instead of a newValue
/* <h1>{isGoingOut ? "Yes" : "No"}</h1> */
{/* <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label> */}
// if we put input inside the label tag then clicking on label will check the checkbox, or else, we can use the htmlFor property as shown above and link the two tags that way

// function handleSubmit() {
    // event.preventDefault() --> prevents the page from reloading after you hit submit
//     submitToApi(formData) --> passing state as an argument
// } 

//if a button tag exists inside a form tag then it automatically acts as the submit button for that form