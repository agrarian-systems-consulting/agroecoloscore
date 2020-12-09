import React from 'react';
import { Icon, Label, Menu } from 'semantic-ui-react';

const MenuComponent = ({ values, selectedTheme, selectTheme }) => {
  return (
    <Menu vertical>
      <Menu.Item
        active={selectedTheme === 'agrobiodiversite_et_elevage'}
        onClick={() => selectTheme('agrobiodiversite_et_elevage')}
      >
        {/* <Icon name='leaf' />  */}
        Agrobiodiversité et élevage
        <Label color='olive' circular floating>
          {parseInt(values.diversite_de_cultures, 10) +
            parseInt(values.animaux_d_elevage, 10)}
        </Label>
      </Menu.Item>
      <Menu.Item
        active={selectedTheme === 'synergies'}
        onClick={() => selectTheme('synergies')}
      >
        {/* <Icon name='handshake' />  */}
        Synergies
        <Label color='olive' circular floating>
          {parseInt(values.integration_agriculture_elevage, 10) +
            parseInt(values.rotations_et_associations, 10)}
        </Label>
      </Menu.Item>
      <Menu.Item
        active={selectedTheme === 'autonomie'}
        onClick={() => selectTheme('autonomie')}
      >
        {/* <Icon name='street view' />  */}
        Autonomie
        <Label circular floating>
          0
        </Label>
      </Menu.Item>
      <Menu.Item
        active={selectedTheme === 'recyclage'}
        onClick={() => selectTheme('recyclage')}
      >
        {/* <Icon name='sync' />  */}
        Protection des sols et recyclage
        <Label circular floating>
          0
        </Label>
      </Menu.Item>
      <Menu.Item
        active={selectedTheme === 'valorisation'}
        onClick={() => selectTheme('valorisation')}
      >
        {/* <Icon name='dot circle' />  */}
        Valorisation des variétés et espèces locales et des savoir-faire locaux
        pour la préparation des aliments
        <Label circular floating>
          0
        </Label>
      </Menu.Item>
      <Menu.Item
        active={selectedTheme === 'economie_circulaire'}
        onClick={() => selectTheme('economie_circulaire')}
      >
        {/* <Icon name='world' />  */}
        Economie circulaire et solidaire
        <Label circular floating>
          0
        </Label>
      </Menu.Item>
    </Menu>
  );
};

export default MenuComponent;
