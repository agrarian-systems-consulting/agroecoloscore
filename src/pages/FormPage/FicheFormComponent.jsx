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
import themes from '../../app/data/themes';
import MenuComponent from './MenuComponent';
import ThemeFormComponent from './ThemeFormComponent';

const FicheFormComponent = () => {
  const [mode, setmode] = useState('form');
  const [selectedTheme, setSelectedTheme] = useState('all');

  const selectTheme = (name) => setSelectedTheme(name);

  return (
    <Formik
      initialValues={{
        11: '0',
        12: '0',
        21: '0',
        22: '0',
        23: '0',
        31: '0',
        32: '0',
        33: '0',
        41: '0',
        42: '0',
        43: '0',
        44: '0',
        45: '0',
        51: '0',
        61: '0',
        62: '0',
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
                  <Icon name='file alternate outline' />
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

          <Grid.Row>
            <Grid.Column width={3}>
              <MenuComponent
                values={values}
                themes={themes}
                selectedTheme={selectedTheme}
                selectTheme={selectTheme}
              />
            </Grid.Column>
            {mode === 'form' && (
              <Grid.Column width={13} style={{ paddingLeft: 50 }}>
                <Form onSubmit={handleSubmit}>
                  {themes.map((theme) => {
                    if (
                      selectedTheme === theme.slug ||
                      selectedTheme === 'all'
                    ) {
                      return (
                        <ThemeFormComponent
                          theme={themes.find((t) => t.id === theme.id)}
                          val={values}
                        />
                      );
                    }
                  })}

                  {/* <pre>{JSON.stringify(values, true, 2)}</pre> */}
                </Form>
              </Grid.Column>
            )}
          </Grid.Row>

          {mode === 'chart' && (
            <Grid.Row centered>
              <Grid.Column width={11}>
                <RadarComponent values={values} themes={themes} />
              </Grid.Column>
            </Grid.Row>
          )}
          <Header as='h5' style={{ margin: 50 }}>
            L'outil a été développé par Hugo Lehoux -{' '}
            <a href='http://agrarian-systems.org'>
              Agrarian Systems Consulting
            </a>{' '}
            sur la base des travaux du GTAE.
          </Header>
        </Grid>
      )}
    </Formik>
  );
};

export default FicheFormComponent;
