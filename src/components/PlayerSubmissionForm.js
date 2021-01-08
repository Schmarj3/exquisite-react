import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const sentenceFormat = {
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
  const [formFields, setFormFields] = useState({sentenceFormat});
  const [currentPlayer, setCurrentPlayer] = useState(1)
  
  // event handlers
  const onInputChange = (event) => {
    const newFormFields = formFields
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
    console.log(newFormFields);
    console.log(Object.values(newFormFields));
  }
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const newSentence = Object.values(formFields).reduce(reducer)
    console.log(newSentence)
    
    props.addLineCallback(newSentence);
    setCurrentPlayer(currentPlayer + 1)
  };

  // generate input list based on fields list in Game Component
  const inputs = props.fields.map((field, index) => {
    if (field.key) {
      return<input 
          key={field.key}
          id={field.key}
          name={field.key}
          placeholder={field.placeholder}
          type="text"
          onChange={onInputChange}
          className="PlayerSubmissionFormt__input--invalid"
        />
    } else {
      return <span key={index}>{field} </span>;
    }
  });
 

  // helper function
  const reducer = (accumulator, currentValue) => accumulator + ' ' + currentValue;

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ currentPlayer }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            inputs
          }
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
