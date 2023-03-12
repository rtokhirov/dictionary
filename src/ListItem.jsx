import React from 'react'
import { Meaning } from './style/style';

function ListItem({mList,setInfo,setText,mode}) {
 
  return (
    <>
      {mList.map((item) => {
        let keyMeaning=Math.random()
        return (
          <Meaning key={keyMeaning} mode={mode} >
            <div>
              <p>{item.partOfSpeech}</p> <span></span>
            </div>
            <h3>Meaning</h3>
            <ul>
                {item.definitions.map(definition=>{
                    let key=Math.random()
                    return(
                        <li key={key}>
                            <h4>{definition.definition}</h4>
                            {definition.example&&(<p><span>Example:</span> {definition.example}</p> )}
                        </li>
                    )
                })}
            </ul>
            <p>
            {item.synonyms.length>0&& <small>Synonyms: </small>}
            {item.synonyms.map(element=>{
                    let key=Math.random()
                    return(
                        <span key={key} onClick={()=>{setInfo(element);setText(element)}}>{element}, </span>
                    )
                })}
            </p>
          </Meaning>
        );
      })}
    </>
  );
}

export default ListItem