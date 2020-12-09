import React from 'react';
import { Icon, Label, Menu } from 'semantic-ui-react';

const MenuComponent = ({ themes, values, selectedTheme, selectTheme }) => {
  return (
    <Menu vertical>
      {themes.map((t) => {
        if (
          t.questions.reduce((total, q) => {
            return total + parseInt(values[q.id], 10);
          }, 0) /
            t.max ===
          0
        ) {
          return (
            <Menu.Item
              active={selectedTheme === t.slug}
              onClick={() => selectTheme(t.slug)}
            >
              {t.text}
              <Label circular floating>
                {t.questions.reduce((total, q) => {
                  return total + parseInt(values[q.id], 10);
                }, 0)}
              </Label>
            </Menu.Item>
          );
        } else if (
          t.questions.reduce((total, q) => {
            return total + parseInt(values[q.id], 10);
          }, 0) /
            t.max <
          0.4
        ) {
          return (
            <Menu.Item
              active={selectedTheme === t.slug}
              onClick={() => selectTheme(t.slug)}
            >
              {t.text}
              <Label color='orange' circular floating>
                {t.questions.reduce((total, q) => {
                  return total + parseInt(values[q.id], 10);
                }, 0)}
              </Label>
            </Menu.Item>
          );
        } else if (
          t.questions.reduce((total, q) => {
            return total + parseInt(values[q.id], 10);
          }, 0) /
            t.max <
          0.6
        ) {
          return (
            <Menu.Item
              active={selectedTheme === t.slug}
              onClick={() => selectTheme(t.slug)}
            >
              {t.text}

              <Label color='yellow' circular floating>
                {t.questions.reduce((total, q) => {
                  return total + parseInt(values[q.id], 10);
                }, 0)}
              </Label>
            </Menu.Item>
          );
        } else if (
          t.questions.reduce((total, q) => {
            return total + parseInt(values[q.id], 10);
          }, 0) /
            t.max <
          1
        ) {
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
        } else if (
          t.questions.reduce((total, q) => {
            return total + parseInt(values[q.id], 10);
          }, 0) /
            t.max ===
          1
        ) {
          return (
            <Menu.Item
              active={selectedTheme === t.slug}
              onClick={() => selectTheme(t.slug)}
            >
              {t.text}

              <Label color='green' circular floating>
                {t.questions.reduce((total, q) => {
                  return total + parseInt(values[q.id], 10);
                }, 0)}
              </Label>
            </Menu.Item>
          );
        }
      })}

      <Menu.Item
        active={selectedTheme === 'all'}
        onClick={() => selectTheme('all')}
      >
        Tous les thèmes
        <Label color='pink' circular floating>
          {Object.values(values).reduce((total, value) => {
            return total + parseInt(value, 10);
          }, 0)}
        </Label>
      </Menu.Item>

      {/* <pre>{JSON.stringify(themes, true, 2)}</pre> */}
      {/* <pre>{JSON.stringify(values, true, 2)}</pre> */}
    </Menu>
  );
};

export default MenuComponent;
