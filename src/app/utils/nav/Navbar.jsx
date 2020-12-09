import React, { Fragment, useContext, useState } from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Fragment>
      <Menu inverted fixed='top'>
        <Menu.Item name='Agroecoloscore' header />
      </Menu>
    </Fragment>
  );
};

export default Navbar;
