import Axios from 'axios';
import { Formik } from 'formik';
import React, { Fragment, useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Label,
  Menu,
} from 'semantic-ui-react';
import * as Yup from 'yup';
import RadarComponent from './RadarComponent';
import BiodiversiteCultiveeElevageForm from './Themes/BiodiversiteCultiveeElevageForm';
import SynergiesForm from './Themes/SynergiesForm';
import themes from '../../app/data/themes';
import MenuComponent from './MenuComponent';

const FicheFormComponent = () => {
  const [mode, setmode] = useState('form');
  const [selectedTheme, setSelectedTheme] = useState(
    'agrobiodiversite_et_elevage'
  );

  const selectTheme = (name) => setSelectedTheme(name);

  return (
    <Formik
      initialValues={{
        diversite_de_cultures: '0',
        animaux_d_elevage: '0',
        integration_agriculture_elevage: '0',
        rotations_et_associations: '0',
      }}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({
        values,
        errors,
        dirty,
        isValid,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign='right'>
              <Button.Group icon>
                <Button
                  color='blue'
                  active={mode === 'form'}
                  onClick={() => setmode('form')}
                >
                  <Icon
                    name='file alternate outline

'
                  />
                </Button>
                <Button
                  color='blue'
                  active={mode === 'chart'}
                  onClick={() => setmode('chart')}
                >
                  <Icon name='chart bar' />
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
          {mode === 'form' && (
            <Grid.Row>
              <Grid.Column width={3}>
                <MenuComponent
                  values={values}
                  selectedTheme={selectedTheme}
                  selectTheme={selectTheme}
                />
              </Grid.Column>
              <Grid.Column width={13} style={{ paddingLeft: 50 }}>
                <Form onSubmit={handleSubmit}>
                  {selectedTheme === 'agrobiodiversite_et_elevage' && (
                    <BiodiversiteCultiveeElevageForm
                      theme={themes.find((theme) => theme.id === '1')}
                      val={values}
                    />
                  )}
                  {selectedTheme === 'synergies' && (
                    <SynergiesForm
                      theme={themes.find((theme) => theme.id === '2')}
                      val={values}
                    />
                  )}
                </Form>
              </Grid.Column>
            </Grid.Row>
          )}

          {mode === 'chart' && (
            <Grid.Row centered>
              <Grid.Column width={11}>
                <RadarComponent values={values} themes={themes} />
              </Grid.Column>
            </Grid.Row>
          )}
        </Grid>
      )}
    </Formik>
  );
};

export default FicheFormComponent;
