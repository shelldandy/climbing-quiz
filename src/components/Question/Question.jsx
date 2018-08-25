import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, index }) => (
  <p>{index}) { question }</p>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Question;
