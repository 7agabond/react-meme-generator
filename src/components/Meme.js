import React from "react";
import memesData from "../memesData.js";

function getMemeImage() {
  const meme =
    memesData.data.memes[
      Math.floor(Math.random() * memesData.data.memes.length)
    ];
  console.log(meme);
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
