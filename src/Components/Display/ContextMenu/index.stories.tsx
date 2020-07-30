import * as React from 'react'
import * as update from 'react-addons-update'

import UpContextMenuTrigger from './UpContextMenuTrigger'
import UpContextMenu from './UpContextMenu'
import UpContextMenuItem from './UpContextMenuItem'
import UpContextMenuItemDivider from './UpContextMenuItemDivider'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const MENU_TYPE = 'SIMPLE';

interface SimpleMenuState {
    logs:Array<string> 
}

class SimpleMenu extends React.PureComponent<any, SimpleMenuState> {
    
    constructor(props) {
        super(props);
        this.state = { logs: [] };
    }

    handleClick = (e, data) => {
        this.setState(update(this.state, {
            logs: {$push : [`Clicked on menu ${data.item}`]}
        }));
    }

    render() {
        return (
            <div>
                <h3>Simple Menu</h3>
                <p>Mise en oeuvre d'un utilisation du menu contextuel sur un paragraphe :</p>
                <UpContextMenuTrigger id={MENU_TYPE} holdToDisplay={1000} renderTag="p" attributes={{style : { color : "red"}}} >
                    <div className='well' style={{cursor: 'pointer', margin: "30px", padding: "10px", borderRadius: "6px",
                        border:"1px solid #369"}}>Cliquez avec le bouton droit de votre souris pour afficher le menu</div>
                </UpContextMenuTrigger>
                <div>
                    {this.state.logs.map((log, i) => (<p key={i}>{log}</p>))}
                </div>
                <UpContextMenu id={MENU_TYPE}>
                    <UpContextMenuItem onClick={this.handleClick} data={{item: 'item 1'}}>Menu Item 1</UpContextMenuItem>
                    <UpContextMenuItem onClick={this.handleClick} data={{item: 'item 2'}}>Menu Item 2</UpContextMenuItem>
                    <UpContextMenuItemDivider size= {2} />
                    <UpContextMenuItem onClick={this.handleClick} data={{item: 'item 2'}}>Menu Item 3</UpContextMenuItem>
                </UpContextMenu>
            </div>
        );
    }
}

export default { 
    title: 'Components|Display/UpContextMenu',
    decorators : [withKnobs, getRootContainer('UpContextMenu')]
};

export const General =
    () => (
        <SimpleMenu />
    )