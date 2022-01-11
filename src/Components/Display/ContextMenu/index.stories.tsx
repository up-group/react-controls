import * as React from 'react';
import UpContextMenuTrigger from './UpContextMenuTrigger';
import UpContextMenu, { UpContextMenu as UpContextMenuComponent } from './UpContextMenu';
import UpContextMenuItem from './UpContextMenuItem';
import UpContextMenuItemDivider from './UpContextMenuItemDivider';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Components/Display/UpContextMenu',
  decorators: [withKnobs, getRootContainer('UpContextMenu')],
  component: UpContextMenuComponent,
};

export const General = () => {
  const [logs, setLogs] = React.useState([]);

  const handleClick = (e, data) => {
    setLogs([...logs, `Clicked on menu ${data.item}`]);
  };

  const MENU_TYPE = 'SIMPLE';

  return (
    <>
      <h3>Simple Menu</h3>
      <p>Mise en oeuvre d'une utilisation du menu contextuel sur un paragraphe :</p>

      <UpContextMenuTrigger id={MENU_TYPE} holdToDisplay={1000} renderTag="p" attributes={{ style: { color: 'red' } }}>
        <div
          className="well"
          style={{
            cursor: 'pointer',
            margin: '30px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #369',
          }}
        >
          Cliquez avec le bouton droit de votre souris pour afficher le menu
        </div>
      </UpContextMenuTrigger>

      <div>
        {logs.map((log, i) => (
          <p key={i}>{log}</p>
        ))}
      </div>

      <UpContextMenu id={MENU_TYPE}>
        <UpContextMenuItem onClick={handleClick} data={{ item: 'item 1' }}>
          Menu Item 1
        </UpContextMenuItem>

        <UpContextMenuItem onClick={handleClick} data={{ item: 'item 2' }}>
          Menu Item 2
        </UpContextMenuItem>

        <UpContextMenuItemDivider size={2} />

        <UpContextMenuItem onClick={handleClick} data={{ item: 'item 3' }}>
          Menu Item 3
        </UpContextMenuItem>
      </UpContextMenu>
    </>
  );
};
