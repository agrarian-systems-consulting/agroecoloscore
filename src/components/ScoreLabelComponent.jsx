import React from 'react';
import { Label } from 'semantic-ui-react';

const ScoreLabelComponent = ({ theme, val }) => {
  return (
    <Label circular color='olive'>
      {theme.questions.reduce((total, q) => {
        return total + parseInt(val[q.id], 10);
      }, 0)}{' '}
      / {theme.max}
    </Label>
  );
};

export default ScoreLabelComponent;
