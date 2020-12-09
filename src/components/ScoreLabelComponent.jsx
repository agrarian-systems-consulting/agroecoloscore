import React from 'react';
import { Label } from 'semantic-ui-react';

const ScoreLabelComponent = ({ theme, val }) => {
  if (
    theme.questions.reduce((total, q) => {
      return total + parseInt(val[q.id], 10);
    }, 0) /
      theme.max ===
    0
  ) {
    return (
      <Label color='grey' circular>
        {theme.questions.reduce((total, q) => {
          return total + parseInt(val[q.id], 10);
        }, 0)}{' '}
        / {theme.max}
      </Label>
    );
  }

  if (
    theme.questions.reduce((total, q) => {
      return total + parseInt(val[q.id], 10);
    }, 0) /
      theme.max <
    0.4
  ) {
    return (
      <Label circular color='orange'>
        {theme.questions.reduce((total, q) => {
          return total + parseInt(val[q.id], 10);
        }, 0)}{' '}
        / {theme.max}
      </Label>
    );
  }

  if (
    theme.questions.reduce((total, q) => {
      return total + parseInt(val[q.id], 10);
    }, 0) /
      theme.max <
    0.6
  ) {
    return (
      <Label circular color='yellow'>
        {theme.questions.reduce((total, q) => {
          return total + parseInt(val[q.id], 10);
        }, 0)}{' '}
        / {theme.max}
      </Label>
    );
  }

  if (
    theme.questions.reduce((total, q) => {
      return total + parseInt(val[q.id], 10);
    }, 0) /
      theme.max <
    1
  ) {
    return (
      <Label circular color='olive'>
        {theme.questions.reduce((total, q) => {
          return total + parseInt(val[q.id], 10);
        }, 0)}{' '}
        / {theme.max}
      </Label>
    );
  }
  if (
    theme.questions.reduce((total, q) => {
      return total + parseInt(val[q.id], 10);
    }, 0) /
      theme.max ===
    1
  ) {
    return (
      <Label circular color='green'>
        {theme.questions.reduce((total, q) => {
          return total + parseInt(val[q.id], 10);
        }, 0)}{' '}
        / {theme.max}
      </Label>
    );
  }
};

export default ScoreLabelComponent;
