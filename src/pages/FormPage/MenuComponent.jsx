import React from 'react';
import { Icon, Label, Menu } from 'semantic-ui-react';

const MenuComponent = ({ themes, values, selectedTheme, selectTheme }) => {
  return (
    <Menu vertical>
      {themes.map((t) => {
        return (
          <Menu.Item
            active={selectedTheme === t.slug}
            onClick={() => selectTheme(t.slug)}
          >
            {t.text}
            <Label color='olive' circular floating>
              {t.questions.reduce((total, q) => {
                return total + parseInt(values[q.id], 10);
              }, 0)}
            </Label>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MenuComponent;
