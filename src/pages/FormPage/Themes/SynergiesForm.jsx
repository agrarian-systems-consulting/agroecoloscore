import React, { Fragment } from 'react';
import { Button, Form, Grid, Header, Label, Segment } from 'semantic-ui-react';
import ProgressBar from '../../../app/utils/forms/ProgressBarComponent';
import SemanticField from '../../../app/utils/forms/SemanticField';
import DropdownFieldComponent from './DropdownFieldComponent';

const SynergiesForm = ({ val, theme }) => {
  return (
    <Fragment>
      <Header as='h3'>
        Synergies
        <Label circular color='olive'>
          {parseInt(val.integration_agriculture_elevage, 10) +
            parseInt(val.rotations_et_associations, 10)}{' '}
          / {theme.max}
        </Label>
      </Header>
      <ProgressBar
        bgcolor={'#6a1b9a'}
        completed={
          ((parseInt(val.integration_agriculture_elevage, 10) +
            parseInt(val.rotations_et_associations, 10)) /
            theme.max) *
          100
        }
      />
   {theme.questions.map((question) => {
        return <DropdownFieldComponent question={question} />;
      })}
    </Fragment>
  );
};

export default SynergiesForm;
