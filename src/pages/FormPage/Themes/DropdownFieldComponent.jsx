import React from 'react';
import SemanticField from '../../../app/utils/forms/SemanticField';
import { Form, Header, Label } from 'semantic-ui-react';

const DropdownFieldComponent = ({ question }) => {
  return (
    <SemanticField
      name={question.slug}
      value=''
      label={question.text}
      component={Form.Dropdown}
      fluid
      search
      selection
      options={question.options}
    />
  );
};

export default DropdownFieldComponent;
