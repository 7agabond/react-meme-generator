import React from "react";
import memesData from "../memesData.js";

function getMemeImage() {
  const memesArray = memesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
}

export default function Meme() {
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
    </main>
  );
}
