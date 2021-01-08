import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const emptySentence = {
  articleOne: 'The',
  adj1: '',
  noun1: '',
  adv: '',
  verb: '',
  articleTwo:'the',
  adj2: '',
  noun2: '',
  puncOne: '.'
}

const PlayerSubmissionForm = (props) => {
  // states
  const [formFields, setFormFields] = useState({...emptySentence});
  const [currentPlayer, setCurrentPlayer] = useState(1)
  
  // event handlers
  const onInputChange = (event) => {
    const newFormFields = {...formFields}
    newFormFields[event.target.id] = event.target.value;
    setFormFields(newFormFields);
    console.log(newFormFields);
    console.log(Object.values(newFormFields));
  }
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newSentence = Object.values(formFields).join(' ')
  
    console.log(newSentence)
    
    props.sendSubmission(newSentence);
    setCurrentPlayer(currentPlayer + 1)
    setFormFields(emptySentence)
  };


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ currentPlayer }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">
          <span>The </span>
          <input
              id="adj1"
              name="adj1" 
              placeholder="adjective"
              type="text"
              onChange={onInputChange}
              value={formFields.adj1}
          />
          <input
              id="noun1"
              name="noun1"
              placeholder="noun"
              type="text" 
              onChange={onInputChange}
              value={formFields.noun1}
          />
          <input
              id="adv"
              name="adv"
              placeholder="adverb"
              type="text" 
              onChange={onInputChange}
              value={formFields.adv}
          />
          <input
              id="verb"
              name="verb"
              placeholder="verb"
              type="text"
              onChange={onInputChange}
              value={formFields.verb}
          />
          <span>the </span>
          <input
              id="adj2"
              name="adj2"
              placeholder="adjective"
              type="text"
              onChange={onInputChange}
              value={formFields.adj2}
          />
          <input
              id="noun2"
              name="noun2"
              placeholder="noun"
              type="text"
              onChange={onInputChange}
              value={formFields.noun2}
          />
          <span>.</span>
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
