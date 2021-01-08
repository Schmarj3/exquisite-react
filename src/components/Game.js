import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  // state
  const [allSubmissions, setAllSubmissions] = useState([])
  const [revealed, setRevealed] = useState(false)

  // dynamically make example sentence
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  // helper functions
  const addLineToPoem = (line) => {
    const newSubmission = [...allSubmissions];
    newSubmission.push(line);
    setAllSubmissions(newSubmission);
  }

  const revealFinalPoem = () => {
    setRevealed(true)
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      <section className={revealed ? 'hide' : ''}>
        <RecentSubmission mostRecentSubmission={allSubmissions[allSubmissions.length - 1]}/>
      </section>
      <section className={revealed ? 'hide' : ''}>
        <PlayerSubmissionForm sendSubmission={addLineToPoem}/>
      </section>
      <section>
        <FinalPoem submissions={allSubmissions} onRevealPoemCallback={revealFinalPoem} revealState={revealed}/>
      </section>
    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
