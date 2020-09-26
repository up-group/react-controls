import * as React from 'react'
import { action } from '@storybook/addon-actions';

import UpMenu, { UpMenuState, UpMenuProps } from "./UpMenu";
import { MenuItemData } from './UpMenu';
import { isEmpty } from '../../../Common/utils';

import UpButton from '../../Inputs/Button/UpButton'
import { style } from 'typestyle';
import UpSvgIcon from '../SvgIcon';
import UpLigne from '../../Display/Ligne';
import colorMap from "../../../Common/theming/colorMap";
import UpBox from "../../Containers/Box";
import UpTooltip from '../Tooltip';
import * as IconsM from "../Icons/materialinear"

const logoSvg = require('./logo-up-square.svg');

const resetMenuSelection = (menu: Array<MenuItemData>): Array<MenuItemData>  =>  {
    if (isEmpty(menu)) {
        return [];
    }
    return menu.map(m => ({ ...m, childMenuItems : resetMenuSelection(m.childMenuItems), isSelected: false }));
}

const hasItemSelected = (uri: string, menu: Array<MenuItemData>): boolean => {
    return !isEmpty(menu) && menu.find(i => (i.uri != null && uri === i.uri) || hasItemSelected(uri, i.childMenuItems)) != null ;
}

const setMenuSelection = (
  uri: string,
  menu: Array<MenuItemData>,
  prev?:Array<MenuItemData>
): Array<MenuItemData> => {
  if (isEmpty(menu)) {
    return [];
  }
  return menu.map((m,index) => ({
    ...m,
    childMenuItems: setMenuSelection(uri, m.childMenuItems),
    isSelected: m.uri === uri || hasItemSelected(uri, m.childMenuItems)
  }));
};

const HookedMenu = (props) => {
    const defaultMenu: Array<MenuItemData> = [
      {
        title: 'Stack',
        icon: (propsIcon)=> <UpSvgIcon iconHtml={logoSvg} width={22} height={22} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      {
        title: 'Smart',
        icon: 'smartphone',
        isSelected: false,
        isVisible: true,
        uri: '/smart',
        childMenuItems: []
      },{
        title: 'Stack',
        icon: (propsIcon)=> <UpSvgIcon iconHtml={logoSvg} width={22} height={22} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      { isSeparator: true },{
        title: 'Stack',
        icon: (propsIcon)=> <UpSvgIcon iconHtml={logoSvg} width={22} height={22} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      {
        title: 'Settings',
        icon: 'settings',
        isSelected: false,
        isVisible: true,
        uri: '/settings',
        childMenuItems: []
      },
      { isSeparator: true },{
        title: 'Stack',
        icon: (propsIcon)=> <UpSvgIcon iconHtml={logoSvg} width={22} height={22} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      {
        render: (
          item: MenuItemData,
          propsMenu: UpMenuProps,
          state: UpMenuState
        ) => {
          return (
            <UpButton
              intent={'primary'}
              onClick={e => {
                action('Command');
              }}
              width={state.minified ? 'icon' : 'full'}
              height={'large'}
              actionType={'briefcase'}>
              {'Commander'}
            </UpButton>
          );
        }
      },{
        title: 'Stack',
        icon: (propsIcon) => <IconsM.AssignmentLate color={colorMap.primary} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      {
        title: 'Stack',
        icon: (propsIcon)=> <UpSvgIcon iconHtml={logoSvg} width={22} height={22} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },{
        title: 'Stack',
        icon: (propsIcon)=> <UpSvgIcon iconHtml={logoSvg} width={22} height={22} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      {
        title: 'Stack',
        icon: (propsIcon) =>  <IconsM.LcloudRain color={colorMap.primary} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      {
        title: 'Stack',
        icon: (propsIcon) =>  <IconsM.Accessible color={colorMap.primary} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      {
        title: 'Stack',
        icon: (propsIcon) =>  <IconsM.AccountBalance color={colorMap.primary} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      },
      {
        title: 'Stack',
        icon: (propsIcon) =>  <IconsM.AccountBox color={colorMap.primary} />,
        isSelected: false,
        isVisible: true,
        uri: '/stack',
        childMenuItems: [
          {
            title: 'Option 1',
            icon: 'weather-rain',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option1',
            childMenuItems: []
          },
          {
            title: 'Option 2',
            icon: 'weather-snow',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option2',
            childMenuItems: []
          },
          {
            title: 'Option 3',
            icon: 'weather-sunset',
            isSelected: false,
            isVisible: true,
            uri: '/stack/option3',
            childMenuItems: []
          }
        ]
      }
    ];

    const [menu, setMenu] = React.useState(defaultMenu);

    const footerStyle = style({
        color: '#9B9B9B',
        fontFamily: 'Roboto',
        fontSize: '12px',
        lineHeight: '18px',
        textAlign: 'center',
        whiteSpace: 'pre-line',
    });

    return (
      <UpMenu
        onMinifiedChange={(minified)=>action(`Menu minified: ${minified}`)}
        customStyles={{
          menu : (props) => ({
            $nest: {
              "li.active ul.up-sub-menu:not(:hover), li.active ul.up-sub-menu:hover" : {
                backgroundColor: `${colorMap.primary} !important`,
                color : "colorMap.white !important",
                borderRadius : "6px",
                padding:"16px !important",
                marginLeft:"32px !important",
                marginTop:"8px !important"
              },
              "li.active .up-sub-menu li:hover a span.up-menu-item-title" : {
                color : colorMap.white3,
              },
              "li.active .up-sub-menu li.active a span.up-menu-item-title" : {
                color : colorMap.white3,
              }
            }
          })}}
        onClick={uri => {
          const newMenu = prev => setMenuSelection(uri, menu, prev);
          setMenu(previousMenu => newMenu(previousMenu));
          return false;
        }}
        menuItems={menu}
        footer={(props: Partial<UpMenuProps>, state : UpMenuState) => {
           return (
            <>
            {!state.minified &&
            <UpBox alignItems={'center'} justifyContent={'center'} style={{ width: "100%", height: "100%" }}>
                <div className={footerStyle}>
                Copyright. Tous droits réservés Up 2019
              </div>
              <a
                className={footerStyle}
                href="https://up.coop/donnees-personnelles"
                target="_blank"
              >
                Conditions générales
              </a>
                    <a
                    className={footerStyle}
                href="https://up.coop/mentions-legales"
                target="_blank"
              >
                Mentions légales
              </a>
            </UpBox>
            }
            {state.minified &&
                <UpTooltip place={'top'} content={'Copyright.Tous droits réservés Up 2019'} >
                    <UpBox alignItems={'center'} justifyContent={'center'} style={{ width: "100%", height: "100%" }}>
                        <UpSvgIcon color={colorMap.disabledFg} iconName={"info-sign"} />
                    </UpBox>
                </UpTooltip>
            }
            </>
           );
        }}
        header={(props: Partial<UpMenuProps>, state: UpMenuState) => {
          return ( 
                <UpBox flexDirection={"row"} alignItems={'center'} justifyContent={'center'} style={{ height: "100%"}}>
                {!state.minified &&
                    <UpSvgIcon color={colorMap.primary} iconName={"checkmark"} />
                }
                {!state.minified &&
                    <UpLigne color={colorMap.primary} className={style({ marginLeft : '8px' })}>
                    Acceptation de titre
                </UpLigne>
                }
            </UpBox>
          );
        }}
      />
    );
};

export default { 
    title: 'Components/Display/UpMenu'
};
  
export const General =  () => (<HookedMenu />)
