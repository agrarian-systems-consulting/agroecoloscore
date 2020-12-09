import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import DropdownFieldComponent from '../../components/DropdownFieldComponent';
import ScoreLabelComponent from '../../components/ScoreLabelComponent';
import ProgressBarComponent from '../../components/ProgressBarComponent';
const ThemeFormComponent = ({ theme, val }) => {
  return (
    <Fragment>
      <Header as='h3'>
        {theme.text}
        <ScoreLabelComponent val={val} theme={theme} />
      </Header>
      <ProgressBarComponent val={val} theme={theme} />

      {theme.questions.map((question) => {
        return <DropdownFieldComponent question={question} />;
      })}

      {/* <pre>{JSON.stringify(theme.questions, true, 2)}</pre> */}
    </Fragment>
  );
};

export default ThemeFormComponent;
