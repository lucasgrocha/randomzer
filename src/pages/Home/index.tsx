import React, { useState } from 'react';
import '../../assets/styles/global.css';
import './styles.css';

const Home: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [word, setWord] = useState<string>('');

  function handleKeyPress(evt: React.KeyboardEvent) {
    if (evt.key === 'Enter' && word.length) {
      appendWord()
    }
  }

  function appendWord() {
    setWords((prev) => [...prev, word]);
    setWord('');
  }

  return (
    <div className="container">
      <div id="input-field">
        <input
          type="text"
          id="word-input"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={appendWord}>+</button>
      </div>
    </div>
  );
};

export default Home;
