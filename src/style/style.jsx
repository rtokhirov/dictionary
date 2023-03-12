import styled from "styled-components";

export const Main=styled.div`
    width: 100%;
    background-color:${props=> props.mode?'#050505':'#FFFFFF'};
    min-height: 100vh;
    transition: color ease-in 1s;
    min-width: 300px;
`

export const Container =styled.div`
    padding-top: 5rem;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 73.6rem;
    padding-right:2rem;
    padding-left: 2rem;
    @media only screen and (max-width: 550px) {
        padding-right:1rem;
        padding-left: 1rem;
    }
`



export const Header=styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
`
export const Nav=styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;
`
export const Fontstyle = styled.div`
  transition: color ease-out 1s;
  position: relative;
  display: flex;
  gap: 1.6rem;
  color: ${(props) => (props.mode ? "#FFFFFF" : "#2D2D2D")};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  user-select: none;
  cursor: pointer;
  div {
    z-index: 2;
    display: ${(props) => (props.fontShow == "yes" ? "block" : "none")};
    padding: 2.4rem;
    position: absolute;
    top: 4rem;
    right: -2.1rem;
    width: 18rem;
    height: 15rem;
    background-color: ${(props) => (props.mode ? "#2D2D2D" : "#FFFFFF")};
    box-shadow: 0px 5px 20px 0px
      ${(props) => (props.mode ? "#A445ED" : "#0000002A")};
    border-radius: 16px;
    cursor: auto;
    p {
      font-size: 1.8rem;
      padding-bottom: 1.6rem;
      &:hover {
        color: #a445ed;
        cursor: pointer;
      }
      @media only screen and (max-width: 550px) {
        font-size: 1.4rem;
      }
    }
  }
`;
export const DarkBTN=styled.div`
    display: flex;
    justify-content: left;
    width: 4rem;
    height: 2rem;
    /* background: #A445ED; */
    transition: all ease-out 1s, color 1s ;
    transition: justify-content 0.5s, color 3s;
    background-color:${props=> props.mode?'#A445ED':'#757575'};
    justify-content: ${props=> props.mode?'right':'left'};
    border-radius: 10px;
    padding: 3px;
    &:hover{
        cursor: pointer;
        background-color: #A445ED;
    }
    span{
        /* transform: translateX(${props=> props.mode?'0rem':'2rem'}); */
        transition: all 10s;
         transition: justify-content 0.5s, color 3s;

        display: block;
        border-radius: 50%;
        width: 1.4rem;
        height: 1.4rem;
        background-color: #FFFFFF;
    }
`
export const Form=styled.form`
    user-select: none;
    position: relative;
    border-radius: 1.6rem;
    margin-bottom: 4rem;
     img{
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
`

export const Search=styled.input`
    transition: color ease-in 1s;
    background-color: #1F1F1F;
    background-color:${props=> props.mode?'#1F1F1F':'#F4F4F4'};
    color:${props=> props.mode?'#FFFFFF':'#2D2D2D'};
    border-radius: 1.6rem;
    border: 0;
    width: 100%;
    padding: 1.7rem 2.4rem;
    border: 1px solid transparent;
    font-size: 2rem;
    line-height: 2rem;
    padding-right: 5rem;
    &:focus{
        outline: 0;
        border: 1px solid #A445ED;
        caret-color: #A445ED;
    }
    @media only screen and (max-width: 550px) {
        font-size: 1.6rem;
        line-height: 1.8rem;
    }
`

export const MainDiv=styled.div`
    
`
export const Hero = styled.div`
  transition: color ease-in 1s;
  color: ${(props) => (props.mode ? "#FFFFFF" : "#2D2D2D")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    transition: color ease-in 1s;
    color: ${(props) => (props.mode ? "#FFFFFF" : "#2D2D2D")};
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 7rem;
    @media only screen and (max-width: 550px) {
        font-size: 3.2rem;
        line-height: 3.8rem;
    }
  }
  p {
    transition: color ease-in 1s;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #a445ed;
    @media only screen and (max-width: 550px) {
        font-size: 1.8rem;
        line-height: 2.4rem;
    }
  }
  img {
    position: relative;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  nav {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: #a445ed;
      width: 6rem;
      height: 6rem;
      &:hover {
        display: block;
      }
    }
  }
`;

export const Source = styled.div`
  transition: color ease-in 1s;
  display: flex;
  gap: 1.5rem;
  border-top: 1px solid #3a3a3a;
  width: 100%;
  padding-top: 1.5rem;
  font-size: 1.4rem;
  line-height: 1.7rem;
  margin-top: 4rem;
  padding-bottom: 5rem;
  p {
    transition: color ease-in 1s;
    text-decoration-line: underline;
    color: #757575;
    color:${props=> props.mode?'#FFFFFF':'#2D2D2D'};
    @media only screen and (max-width: 550px) {
       display: inline-block;
    }
  }
  a{

    /* color: #FFFFFF; */
    color:${props=> props.mode?'#FFFFFF':'#2D2D2D'};
    display: flex;
    gap: 1rem;
    align-items: center;
    word-wrap: break-word;
    word-break: break-all;
  }
  @media only screen and (max-width: 550px) {
       flex-direction: column;
       gap: 8px;
    }
`;

export const Meaning = styled.div`
  transition: color 1s;
  margin-top: 4rem;
  color: ${(props) => (props.mode ? "#FFFFFF" : "#2D2D2D")};
  h3 {
    transition: color ease-in 3s;
    margin-top: 4rem;
    font-size: 2rem;
    line-height: 2.4rem;
    color: #757575;
    @media only screen and (max-width: 550px) {
        font-size: 1.6rem;
        line-height: 2rem;
    }
  }
  ul {
    padding-top: 2.5rem;
  }
  li {
    transition: color ease-in 1s;
    color: #7703cf;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 1.5rem;
    h4 {
      /* color: #FFFFFF; */
      transition: color ease-in 1s;
      color: ${(props) => (props.mode ? "#FFFFFF" : "#2D2D2D")};
      font-weight: 400;
      letter-spacing: 0.9px;
      font-size: 1.8rem;
      line-height: 2.4rem;
      @media only screen and (max-width: 550px) {
        font-size: 1.5rem;
        line-height: 2.4rem;
      }
    }
    p {
      transition: color ease-in 3s;
      color: #757575;
      span {
        margin: 0;
        &:hover {
          cursor: auto;
          text-decoration: none;
        }
      }
      @media only screen and (max-width: 550px) {
        font-size: 1.5rem;
        line-height: 2.4rem;
      }
    }
  }
  div {
    transition: color 3s;
    p {
      transition: color 3s;
      @media only screen and (max-width: 550px) {
        font-size: 1.8rem;
        line-height: 2.3rem;
      }
    }
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    span {
      width: 100%;
      height: 1px;
      background: #3a3a3a;
    }
  }
  small {
    font-size: 2rem;
    line-height: 2.4rem;
    color: #757575;
    @media only screen and (max-width: 550px) {
        font-size: 1.6rem;
        line-height: 2rem;
    }
  }
  span {
    margin-left: 5px;
    cursor: pointer;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    color: #a445ed;
    &:hover {
      text-decoration: underline;
    }
    @media only screen and (max-width: 550px) {
        font-size: 1.6rem;
        line-height: 2rem;
    }
  }
`;

export const Loading =styled.div`
    display: flex;
    justify-content: center;
`
export const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 6.4rem;
    margin-bottom: 2rem;
  }
  h4 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
    color: #757575;
    margin-bottom: 2.4rem;
  }
  p{
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #757575;
  }
`;