import React from "react";
import { useState } from "react";

const App = () => {
  const [text,setText] = useState("");
  const [CharactersCount,setCharactersCount] = useState(0);
  const [SentenceCount,setSentenceCount] = useState(0);
  const handelTextChange = (e) => {
    const inputText = e.target.value
    setText (inputText)

    const Characters = inputText.replace(/\s+/g, '');
    setCharactersCount(Characters.length);

    const sentences = inputText.trim().split(/[.!?](\s|$)/).filter(sentence => sentence.trim().length > 0);
    setSentenceCount(sentences.length);
  }
  const resetCounter = () => {
    setText("");
    setCharactersCount("0");
    setSentenceCount("0");
  }

  return(
    <div className = 'container'>
      <div className= 'container_middle'>
        <div className="right">
          <textarea name="text-input" 
          value={text}
          onChange={handelTextChange}
           rows= "6"
           placeholder="Type or paste your text here..." />
           <div className="Button_div">
            <button className="Button-65"onClick={resetCounter}>
              Delete
            </button>
           </div>

        </div>
        <div className="left">

          <div className="Container_middle_para">
            <h2>Result</h2>
          </div>
          <div className="flex-container">
          </div>
          <p>
            <strong>
              Characters:
            </strong>
            {CharactersCount}
          </p>

        </div>
        <div>
          <p>
            <strong>
              Sentence:
            </strong>
            {SentenceCount}
          </p>

        </div>

      </div>
    
    </div>
  )
}

export default App  