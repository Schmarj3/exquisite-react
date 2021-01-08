import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  // variables
  const revealState = props.revealState

  // creat list of all submissions
  const finalPoem = props.submissions.map(sentence => {
    return <p>{sentence}</p>
  })

// event handler
  const onPoemReveal = () => {
    props.onRevealPoemCallback(revealState)
  }

  
  return (
    <div className="FinalPoem">
      <section className={revealState ? 'FinalPoem__poem' : 'hide FinalPoem__poem'}>
        <h3>Final Poem</h3>
        {finalPoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onPoemReveal}/>
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
