import React from 'react';
import { Radar } from '@nivo/radar';
import { Segment } from 'semantic-ui-react';

const RadarComponent = ({ values, themes }) => {
  return (
    <Segment>
      <Radar
        data={[
          {
            theme: themes.find((theme) => theme.id === '1').text,
            Exploitation:
              ((parseInt(values.diversite_de_cultures, 10) +
                parseInt(values.animaux_d_elevage, 10)) /
                themes['1'].text) *
              100,
          },
          {
            theme: 'Synergies',
            Exploitation: 24,
          },
          {
            theme: 'Autonomie',
            Exploitation: 45,
          },
          {
            theme: 'Protection des sols et recyclage',
            Exploitation: 17,
          },
          {
            theme: 'Variétés locales et savoir-faire locaux',
            Exploitation: 80,
          },
          {
            theme: 'Economie circulaire et solidaire',
            Exploitation: 100,
          },
        ]}
        keys={['Exploitation']}
        indexBy='theme'
        maxValue='100'
        width={900}
        theme={{
          dots: {
            text: {
              fill: '#2d374d',
              fontSize: 12,
              fontWeight: 800,
            },
          },
        }}
        height={400}
        margin={{ top: 70, right: 80, bottom: 60, left: 80 }}
        curve='catmullRomClosed'
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape='circular'
        gridLabelOffset={36}
        enableDots={true}
        dotSize={15}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel='value'
        dotLabelYOffset={-12}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode='multiply'
        animate={true}
        motionConfig='wobbly'
        isInteractive={true}
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </Segment>
  );
};

export default RadarComponent;
