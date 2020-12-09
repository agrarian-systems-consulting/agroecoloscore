import React from 'react';
import { Radar } from '@nivo/radar';
import { Header, Segment } from 'semantic-ui-react';

const RadarComponent = ({ values, themes }) => {
  const data = themes.map((theme) => {
    return {
      theme: theme.short,
      Exploitation: (
        (theme.questions.reduce((total, q) => {
          return total + parseInt(values[q.id], 10);
        }, 0) /
          theme.max) *
        100
      ).toFixed(0),
    };
  });

  return (
    <Segment.Group>
      <Segment attached='top'>
        <Header as='h4'>Radar de score d'agroécologie</Header>
      </Segment>
      <Segment attached='bottom'>
        <Radar
          data={data}
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
    </Segment.Group>
  );
};

export default RadarComponent;
