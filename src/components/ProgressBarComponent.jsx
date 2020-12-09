import React from 'react';
import ProgressBar from '../app/utils/forms/ProgressBarComponent';

const ProgressBarComponent = ({ theme, val }) => {
  return (
    <ProgressBar
      bgcolor={'#6a1b9a'}
      completed={
        (theme.questions.reduce((total, q) => {
          return total + parseInt(val[q.id], 10);
        }, 0) /
          theme.max) *
        100
      }
    />
  );
};

export default ProgressBarComponent;
