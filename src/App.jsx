import { Container, DarkBTN, ErrorDiv, Fontstyle, Form, Header, Loading, Main, Nav, Search } from "./style/style"
import siteLogo from './assets/book.svg'
import vertical_line from './assets/vertical_line.svg'
import moonIMG from './assets/moon.svg'
import bottomDirection from './assets/bottom_direction.svg'
import searchIMG from './assets/search.svg'
import loadingImg from './assets/loading.svg'
import useFetch from "./hooks/useFetch"
import List from "./List"
import { useEffect, useState } from "react"
import WebFont from "webfontloader"

function App() {
  const [mode,setMode]=useState(true)
  const dark = localStorage.getItem('mode')
  const[info,setInfo]=useState('Hello')
  const [text,setText]=useState('')
  const [fontShow,setFontShow]=useState('no')
  const [fontText,setFontText]=useState('Sans Serif')
  const [font,setFont]=useState(localStorage.getItem('style')?JSON.parse(localStorage.getItem('style')):'sans')
  const err={
    emoji:"😕",
    title:"No Definitions Found",
    text:"Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead."
  }


  useEffect(()=>{
  if(dark){
    setMode(JSON.parse(localStorage.getItem('mode')))
  }
 },[])
 
 useEffect(() => {
  WebFont.load({
    google: {
      families: ['Inter','Lora','Inconsolata']  
    }
  });
 }, []);

 useEffect(()=>{
    if(font=='sans'){
      setFontText('Sans Serif')
    }else if(font=='serif'){
      setFontText('Serif')
    }else if(font=='mono'){
      setFontText('Mono')
    }
 },[font])

  function handleDark(){
    if(mode){
      setMode(false); localStorage.setItem('mode',JSON.stringify(false));
    }else{
      setMode(true); localStorage.setItem('mode',JSON.stringify(true));
    }
  }


  const {data,loading,error}=useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${info}`)

  function hanldeSubmit(e){
    e.preventDefault()
    
    setInfo(text)
  }
  return (
    <Main className={font} mode={mode}>
      <Container>
        <Header>
          <img src={siteLogo} alt="" />
          <Nav>
            <Fontstyle mode={mode} fontShow={fontShow} onClick={()=>{fontShow=='yes'?setFontShow('no'):setFontShow('yes')}}>
              <p>{fontText}</p>
              <img src={bottomDirection} alt="" />
              <div>
                <p onClick={(e)=>{setFontShow('no');setFontText(e.target.innerText);setFont('sans'); localStorage.setItem('style',JSON.stringify('sans')); }} >Sans Serif</p>
                <p onClick={(e)=>{setFontShow('no');setFontText(e.target.innerText);setFont('serif'); localStorage.setItem('style',JSON.stringify('serif')) }} >Serif</p>
                <p onClick={(e)=>{setFontShow('no');setFontText(e.target.innerText);setFont('mono'); localStorage.setItem('style',JSON.stringify('mono')) }} >Mono</p>
              </div>
            </Fontstyle>
            <img src={vertical_line} alt="" />
            <DarkBTN mode={mode} onClick={handleDark}>
              <span></span>
            </DarkBTN>
            <img src={moonIMG} alt="" />
          </Nav>
        </Header>
        <Form className="form" onSubmit={hanldeSubmit}>
          <Search
            mode={mode}
            type={"text"}
            value={text}
            onFocus={()=>{setText('')}}
            placeholder="Search for any word…"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></Search>
          <img src={searchIMG} alt="" />
        </Form>
        {loading&&<Loading><img src={loadingImg}/></Loading>}
        {!loading && data &&!error && (
          <List
            data={data}
            setInfo={setInfo}
            setText={setText}
            mode={mode}
          ></List>
        )}
        {!loading &&error&&(
          <ErrorDiv>
            <h1>{err.emoji}</h1>
            <h4>{err.title}</h4>
            <p>{err.text}</p>
          </ErrorDiv>
        )}
      </Container>
    </Main>
  );
}

export default App
