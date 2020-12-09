import React, { Fragment } from 'react';
import { Form, Header, Label } from 'semantic-ui-react';
import ProgressBar from '../../../app/utils/forms/ProgressBarComponent';
import SemanticField from '../../../app/utils/forms/SemanticField';
import DropdownFieldComponent from './DropdownFieldComponent';

const BiodiversiteCultiveeElevageForm = ({ theme, val }) => {
  return (
    <Fragment>
      <Header as='h3'>
        Biodiversité cultivée et Elevage
        <Label circular color='olive'>
          {parseInt(val.diversite_de_cultures, 10) +
            parseInt(val.animaux_d_elevage, 10)}
          / {theme.max}
        </Label>
      </Header>
      <ProgressBar
        bgcolor={'#6a1b9a'}
        completed={
          ((parseInt(val.diversite_de_cultures, 10) +
            parseInt(val.animaux_d_elevage, 10)) /
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

export default BiodiversiteCultiveeElevageForm;
