import React from "react";
import ReactDOM from "react-dom";
import NameTag from './nameTag';
import "./styles.css";

const makeGreen = BaseComponent => props => {
  const addGreen = {
    style:{
      color:"green"
    }
  };

  const newProps = {
    ...props,
    ...addGreen
  };
  return <BaseComponent {...newProps} />;
}

const makeRed = BaseComponent => props => {
  const addRed = {
    style:{
      color: "red"
    }
  };

  const newProps = {
    ...props,
    ...addRed
  };
  return <BaseComponent {...newProps} />;
}

const removeInlineStyle = BaseComponent => props => {
  const newProps = {...props};
  delete newProps.style;
  return <BaseComponent {...newProps} />
};


const CleanNameTag = removeInlineStyle(NameTag);
const GreenNameTag = makeGreen(NameTag);
const RedNameTag = makeRed(NameTag);



function App() {
  return (
    <div className="App">
     <header className="App-header">
     <h1 className="name title">Names List</h1>

     <GreenNameTag 
        firstName="Peter"
        lastName="peterson" />

      <CleanNameTag 
        firstName="John"
        lastName="Johnson"
        style={{color: 'red'}} />

      <RedNameTag 
        firstName="Jill" 
        lastName="jillson" />
     </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
