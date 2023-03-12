import React, { useEffect, useState } from 'react'
import { Hero, MainDiv, Source } from './style/style';
import playBtn from './assets/playBtn.svg'
import ListItem from './ListItem';
import sourceIMG from './assets/sourceIMG.svg'
import playBtnClicked from './assets/playBtnClicked.svg'
// import ReactAudioPlayer from 'react-audio-player';

function List({data,setInfo,setText,mode}) {
    const[songPlaying,setSongPlaying]=useState(false)
    const [reading, setReading] = useState("");
    const [music, setMusic] = useState("");
    let counter=0
    let meanings = [];
    data.forEach((element) => {
      element.meanings.forEach((item) => meanings.push(item));
    });
    
  useEffect(()=>{
    if (data.length < 2) {
        // console.log('1 dona: ',data);
      try{
        data[0].phonetic?setReading(data[0].phonetic):setReading(data[0].phonetics[1].text)
      }catch(err){
        setReading('No phonetic DATA()')
      }
    } else if (data.length >= 2) {
        // console.log('2 dona: ',data);
        try {
            if(data[0].phonetics[0].text){
                setReading(data[0].phonetics[0].text);
            }else if(data[0].phonetic){
                setReading(data[0].phonetic);
            }
            if(data[1].phonetic){
                setReading(data[1].phonetic);
            }else if(data[1].fonetics[0].text){
                setReading(data[1].fonetics[0].text)
            }
        } catch (error) {
            setReading('No phonetic DATA()')
        }
    }
  },[data])

  useEffect(()=>{
    if(data[0].phonetics){
        if(data[0].phonetics[0] && counter==0){
            if(data[0].phonetics[0].audio.length>2){
                counter++
                setMusic(data[0].phonetics[0].audio)
            }
        }
        if(data[0].phonetics[1] && counter==0){
            if(data[0].phonetics[1].audio.length>2){
                counter++
                setMusic(data[0].phonetics[1].audio)
            }
        }
        if(data[0].phonetics[2] && counter==0){
            if(data[0].phonetics[2].audio.length>2){
                counter++
                setMusic(data[0].phonetics[2].audio)
            }
        }
        if(data[0].phonetics[3] && counter==0){
            if(data[0].phonetics[3].audio.length>2){
                counter++
                setMusic(data[0].phonetics[3].audio)
            }
        }
        if(data[0].phonetics[4] && counter==0){
            if(data[0].phonetics[4].audio.length>2){
                counter++
                setMusic(data[0].phonetics[4].audio)
            }
        }
        if(data[0].phonetics[5] && counter==0){
            if(data[0].phonetics[5].audio.length>2){
                counter++
                setMusic(data[0].phonetics[5].audio)
            }
        }
    }
    if(data[1] && data[1].phonetics){
        if(data[1].phonetics[0] && counter==0){
            if(data[1].phonetics[0].audio.length>2){
                counter++
                setMusic(data[1].phonetics[0].audio)
            }
        }
        if(data[1].phonetics[1] && counter==0){
            if(data[1].phonetics[1].audio.length>2){
                counter++
                setMusic(data[1].phonetics[1].audio)
            }
        }
        if(data[1].phonetics[2] && counter==0){
            if(data[1].phonetics[2].audio.length>2){
                counter++
                setMusic(data[1].phonetics[2].audio)
            }
        }
    }
  },[data])

  let song = new Audio(music);
  song.onplaying = function(){
    setSongPlaying(true)}
  song.onended = function(){
    setSongPlaying(false)}
  return (
    <MainDiv>
      <Hero mode={mode}>
        <div>
          <h1>{data[0].word}</h1>
          <p>{reading}</p>
        </div>
        <nav>
            {!songPlaying&&<img src={playBtn} onClick={() => {song.play(); }} />}
            {songPlaying&&<img src={playBtnClicked}/>}
        </nav>
      </Hero>
      <ListItem mList={meanings} setInfo={setInfo} setText={setText} mode={mode}></ListItem>
      <Source mode={mode}>
        <p>Source</p>
        <a href={data[0].sourceUrls[0]}>
          {data[0].sourceUrls[0]}
          <img src={sourceIMG} />
          
        </a>
      </Source>
    </MainDiv>
  );
}

export default List