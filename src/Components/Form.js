import React, { useState } from 'react'
import memesData from '../memesData';

const Form = () =>{
 const [meme, setMemeUrl] = useState({
     topText:"",
     bottomText:"",
     randomImg:"https://i.imgflip.com/1bhf.jpg"
 })

    
const [allMemeImages,setAllMemeImages]= useState(memesData);

    const getMeme = ()=>{
          const {data} = allMemeImages;
          const memes = data.memes;  
         //generate a random url form the meme arr, each ele in the memes is an obj
         const randomMeme = memes[Math.floor(Math.random()* 100)];
         const memeUrl = randomMeme.url;
         console.log(meme)
         console.log(allMemeImages.data.memes.length)
         setMemeUrl({...meme,randomImg:memeUrl})
       
    }

    const onChangeTopText = ()=>{

    }
    const onChangeButtonText = () =>{

    }
    
return (<main>
    <div className='form'>
        <input className ="form-input"type="text" value={meme.topText} placeholder="top text"/>
        <input className ="form-input"type="text" value={meme.bottomText} placeholder="bottom text"/>
       
        <button type='click' className='form-button' onClick={getMeme}>Get a new meme image 🖼</button>
    </div>
  <img src={meme.randomImg} alt="img" className='memeImage'/>
    </main>
  )
}


export default Form