import React, { useState } from 'react'
import memesData from '../memesData';

const Form = () =>{
 const [meme, setMemeUrl] = useState("")
    const handClick = ()=>{
          const {data} = memesData;
          const memes = data.memes;  
         //generate a random url form the meme arr, each ele in the memes is an obj
         const randomMeme = memes[Math.floor(Math.random()* 100)];
         const meme = randomMeme.url;
         console.log(meme)
         setMemeUrl(meme)
       
    }
        

    
return (<main>
    <div className='form'>
        <input className ="form-input"type="text" value="top text"/>
        <input className ="form-input"type="text" value="bottom text"/>
       
        <button type='click' className='form-button' onClick={handClick}>Get a new meme image 🖼</button>
    </div>
    <img src={meme} alt="img"/>
    </main>
  )
}


export default Form