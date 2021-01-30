import React, { useRef, useState } from 'react';
import Word from '../../components/Word';
import './styles.css';

const Home: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [word, setWord] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyPress(evt: React.KeyboardEvent) {
    if (evt.key === 'Enter') {
      appendWord();
    }
  }

  function appendWord() {
    if (word.length) {
      setWords((prev) => [...prev, word]);
      setWord('');
      inputRef.current?.focus();
    }
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
          ref={inputRef}
          autoComplete="off"
        />
        <button onClick={appendWord}>+</button>
      </div>

      <div id="words-container">
        <div id="words-list">
          {words.map((word, id) => (
            <Word word={word} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
