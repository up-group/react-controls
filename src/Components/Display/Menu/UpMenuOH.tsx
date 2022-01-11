import React from 'react';
import { style } from 'typestyle';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {
  getFontClassName,
  stringIsNullOrEmpty,
  isNullOrUndef,
  addZeroBeforeNumber,
} from '../../../Common/utils/helpers';
import UpHover from '../../Containers/Hover/UpHover';
import { IconChevron, IconUtilisateur, IconDeconnexion, DirectionEnum, IconVerrou, IconAlertes } from '../Icons/Icons';
import {
  imgHomelink,
  rightSpace,
  rightSpaceCollapse,
  styleContenu,
  styleLeftMenu,
  styleLeftMenuCollapse,
  styleMenuOh,
  styleTopbar,
  styleUserExpand,
} from './styles';
import { toRem } from '../../../Common/theming/utils';

import UP from './sources/up.png';

class branchIdHelper {
  static toArray(id: string) {
    return id.split(/(\d{1,})/).filter(x => {
      return x !== '';
    });
  }

  static getLevel(id: string) {
    return this.toArray(id).length / 2;
  }

  static hasChild(id: string) {
    return id.substr(id.length - 1, 1) === '*';
  }
}

//Types
export interface Utilisateur {
  Nom: string;
  DerniereConnexion: Date;
  NomBinome: string;
  onChangeMdpClick: () => void;
  Alertes: {
    NonLues: number;
    onClick: () => void;
  };
}

export interface MenuItemData {
  icon?: string;
  title: JSX.Element | string;
  uri: string;
  isVisible: boolean;
  childMenuItems?: MenuItemData[];
  styleType?: 'button';
  forceOpen?: boolean;
}

export interface UpMenuProps {
  menuItems: MenuItemData[];
  onMenuClick?: (uri: string) => boolean | void;
  onHomeClick?: () => void;
  Recherche: JSX.Element;
  Antennes: JSX.Element;
  Utilisateur: Utilisateur;
  onDeconnexionClick: () => void;
  selectMenu?: (menu: MenuItemData) => boolean;
}

export interface UpMenuState {
  selectedBranchId?: string;
  collapseActive: boolean;
  collapse: boolean;
  hoverMenu: boolean;
}
//Fin types

export default class UpMenuOH extends React.Component<UpMenuProps, UpMenuState> {
  constructor(p, c) {
    super(p, c);
    this.state = {
      selectedBranchId: '',
      collapse: false,
      hoverMenu: false,
      collapseActive: false,
    };
  }

  onCollapseChange = () => {
    if (this.state.collapseActive) {
      // widthLeftMenu = widthLeftMenuStandard;
      this.setState({ collapseActive: false, collapse: false });
    } else {
      // widthLeftMenu = widthLeftMenuCollapse;
      this.setState({ collapseActive: true, collapse: true });
    }
  };

  onHover = (hover: boolean) => {
    if (this.state.collapseActive) {
      // widthLeftMenu = hover ? widthLeftMenuStandard : widthLeftMenuCollapse;
      this.setState({ collapse: !hover });
    }
  };

  componentDidUpdate() {
    if (this.props.selectMenu != null) {
      const idSelected = this.findSelected(this.props.menuItems);
      if (this.state.selectedBranchId !== idSelected && idSelected != null) {
        this.setState({ selectedBranchId: idSelected });
      }
    }
  }

  private findSelected(MenuItemData: MenuItemData[]): string {
    for (let i = 0; i < MenuItemData.length; i++) {
      const localId =
        i + (MenuItemData[i].childMenuItems != null && MenuItemData[i].childMenuItems.length != 0 ? '*' : '-');
      if (this.props.selectMenu(MenuItemData[i]) == true) {
        return localId;
      } else {
        if (MenuItemData[i].childMenuItems != null && MenuItemData[i].childMenuItems.length != 0) {
          const child = this.findSelected(MenuItemData[i].childMenuItems);
          if (child != null) {
            return localId + child.toString();
          }
        }
      }
    }
    return null;
  }

  private onBranchClick = (branchId: string) => {
    this.setState({ selectedBranchId: branchId });
  };

  render() {
    const right = rightSpace + (this.state.collapseActive ? ' ' + rightSpaceCollapse : '');

    return (
      <div className={styleMenuOh /*()*/}>
        <LeftMenu
          onHover={this.onHover}
          onCollapseChange={this.onCollapseChange}
          collapse={this.state.collapse}
          selectedBranchId={this.state.selectedBranchId}
          onBranchClick={this.onBranchClick}
          onHomeClick={this.props.onHomeClick}
          menuItems={this.props.menuItems}
          onMenuClick={this.props.onMenuClick}
        />
        <div className={right}>
          <TopMenu
            Recherche={this.props.Recherche}
            Antennes={this.props.Antennes}
            Utilisateur={this.props.Utilisateur}
            onDeconnexionClick={this.props.onDeconnexionClick}
          />
          <div className={styleContenu /*()*/}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

//types
export interface LeftMenuProps {
  onBranchClick: (branchId: string) => void;
  menuItems: MenuItemData[];
  onHomeClick?: () => void;
  onMenuClick?: (uri: string) => boolean | void;
  selectedBranchId?: string;
  onCollapseChange: () => void;
  onHover: (hover: boolean) => void;
  collapse: boolean;
}

export interface LeftMenuState {}
//Fin types

export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
  constructor(p, c) {
    super(p, c);
    this.state = {
      selectedBranchId: '',
    };
  }

  render() {
    const img_space = style({
      //width: "100%",
      height: toRem(60),
      margin: toRem(24),
    });

    const img_style = style({
      //width: "100%",
      maxHeight: '100%',
      maxWidth: '100%',
      //width: this.props.collapse ? 30 : 60
    });

    const div_style = style({
      height: toRem(45),
      paddingLeft: toRem(25),
      color: '#FFF',
      fontSize: toRem(25),
    });

    const firstSub = style({
      // marginLeft: 24,
      paddingLeft: toRem(24),
      position: 'absolute',
      top: toRem(153),
      bottom: 0,
      left: 0,
      right: 0,
      $nest: {
        '& > *': {
          height: '100%',
          width: '100%',
        },
      },
    });

    const left = styleLeftMenu + (this.props.collapse ? ' ' + styleLeftMenuCollapse : '');
    // <input type="button" value="TTT" onClick={this.props.onCollapseChange} />
    return (
      <aside className={left}>
        <div className={img_space}>
          <a className={imgHomelink} onClick={this.props.onHomeClick}>
            <img className={img_style} src={UP}></img>
          </a>
        </div>
        <div className={div_style}>
          <span className={'icon-Lmenu'} onClick={this.props.onCollapseChange} />
        </div>
        <div className={firstSub}>
          <UpHover onHoverChange={this.props.onHover}>
            <SubMenu
              open={false}
              onBranchClick={this.props.onBranchClick}
              branchId={''}
              selectedBranchId={this.props.selectedBranchId}
              onMenuClick={this.props.onMenuClick}
              childMenuItems={this.props.menuItems}
              top={false}
              collapse={this.props.collapse}
            />
          </UpHover>
        </div>
      </aside>
    );
  }
}

//Types
export interface TopMenuProps {
  Recherche: JSX.Element;
  Antennes: JSX.Element;
  Utilisateur: Utilisateur;
  onDeconnexionClick: () => void;
}

export interface TopMenuState {
  UserExpand: boolean;
}
//Fin types

export class TopMenu extends React.Component<TopMenuProps, TopMenuState> {
  constructor(p, c) {
    super(p, c);
    this.state = {
      UserExpand: false,
    };
  }

  onUserClick = () => {
    this.setState({ UserExpand: true });
  };

  onUserBlur = () => {
    this.setState({ UserExpand: false });
  };

  render() {
    const styleGauche = style({
      width: '20%',
      minWidth: toRem(250),
      float: 'left',
      marginLeft: toRem(60),
      marginTop: toRem(16),
    });

    const styleDroite =
      getFontClassName({
        fontSize: `${toRem(14)}`,
        color: '#4a4a4a',
      }) +
      ' ' +
      style({
        marginTop: toRem(16),
        height: '100%',
        marginRight: toRem(60),
        display: 'inline-block',
      });

    const styleInfosTexte = style({
      marginRight: toRem(48),
      $nest: {
        '& > i': {
          fontStyle: 'normal',
          margin: `0 ${toRem(14)}`,
        },
        '& *:focus': {
          outline: 'none',
        },
      },
    });

    return (
      <div className={styleTopbar}>
        {isNullOrUndef(this.props.Recherche) ? null : <div className={styleGauche}>{this.props.Recherche}</div>}
        <span className={styleDroite}>
          {isNullOrUndef(this.props.Antennes) ? null : this.props.Antennes}
          {isNullOrUndef(this.props.Utilisateur) ? null : (
            <IconUtilisateur
              IconSize="14px"
              lineHeight={1.14}
              AvecCercle={false}
              Color="#4a4a4a"
              BackgroundColor="#ffffff"
            >
              <span className={styleInfosTexte}>
                <i>{this.props.Utilisateur.Nom}</i>
                <IconChevron
                  Direction={DirectionEnum.Bas}
                  Color="#4a4a4a"
                  BackgroundColor="#ffffff"
                  IconSize="14px"
                  onClick={this.onUserClick}
                  tabIndex={-1}
                  onBlur={this.onUserBlur}
                />

                {this.state.UserExpand ? <UserExpand Utilisateur={this.props.Utilisateur} /> : null}
              </span>
            </IconUtilisateur>
          )}

          <IconDeconnexion onClick={this.props.onDeconnexionClick} />
        </span>
      </div>
    );
  }
}

//Types
export interface UserExpandProps {
  Utilisateur: Utilisateur;
}

export interface UserExpandState {}
//Fin types

export class UserExpand extends React.Component<UserExpandProps, UserExpandState> {
  constructor(p, c) {
    super(p, c);
  }

  private writeDateTime = (dateTime: Date): string => {
    if (isNullOrUndef(dateTime)) {
      return null;
    }
    return (
      addZeroBeforeNumber(dateTime.getDate(), 2) +
      '/' +
      addZeroBeforeNumber(dateTime.getMonth(), 2) +
      '/' +
      addZeroBeforeNumber(dateTime.getFullYear(), 4) +
      ' ' +
      addZeroBeforeNumber(dateTime.getHours(), 2) +
      ':' +
      addZeroBeforeNumber(dateTime.getMinutes(), 2) +
      ':' +
      addZeroBeforeNumber(dateTime.getSeconds(), 2)
    );
  };

  render() {
    const styleG = style({
      padding: `${toRem(16)} ${toRem(16)} ${toRem(6)}`,
      zIndex: 9998,
      backgroundColor: '#ffffff',
      borderRadius: toRem(4),
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #eaeae9',
      textAlign: 'left',
    });

    const styleChangeMdp = style({
      cursor: 'pointer',
      marginLeft: toRem(8),
    });

    const styleAlertes = style({
      cursor:
        isNullOrUndef(this.props.Utilisateur.Alertes) || isNullOrUndef(this.props.Utilisateur.Alertes.onClick)
          ? 'auto'
          : 'pointer',
      marginLeft: toRem(8),
    });

    const derniereCo: string = this.writeDateTime(this.props.Utilisateur.DerniereConnexion);
    const nbAlerte: string = isNullOrUndef(this.props.Utilisateur.Alertes.NonLues)
      ? null
      : isNaN(this.props.Utilisateur.Alertes.NonLues)
      ? null
      : this.props.Utilisateur.Alertes.NonLues <= 0
      ? null
      : this.props.Utilisateur.Alertes.NonLues > 99
      ? '99+'
      : this.props.Utilisateur.Alertes.NonLues.toString();

    return (
      <div className={styleUserExpand + ' ' + styleG}>
        {derniereCo === null ? null : <p>Dernière connexion : {derniereCo}</p>}
        {stringIsNullOrEmpty(this.props.Utilisateur.NomBinome) ? null : (
          <p>Votre binôme : {this.props.Utilisateur.NomBinome}</p>
        )}
        {isNullOrUndef(this.props.Utilisateur.onChangeMdpClick) ? null : (
          <p>
            <IconVerrou onMouseDown={this.props.Utilisateur.onChangeMdpClick}>
              <span className={styleChangeMdp}> Changer votre mot de passe</span>
            </IconVerrou>
          </p>
        )}
        {isNullOrUndef(this.props.Utilisateur.Alertes) ? null : (
          <p>
            <IconAlertes
              AlertNumber={nbAlerte}
              AlertCircle={{
                Active: true,
                Color: '#f44336',
              }}
              AlertFont={{
                fontSize: '8px',
                color: '#ffffff',
              }} // la taille de la police va ici être écrasée par l'alerte
              onMouseDown={this.props.Utilisateur.Alertes.onClick}
            >
              <span className={styleAlertes}> Alertes utilisateur</span>
            </IconAlertes>
          </p>
        )}
      </div>
    );
  }
}

//Types
export interface SubMenuProps {
  childMenuItems?: MenuItemData[];
  onMenuClick: (uri: string) => void;
  open: boolean;
  onBranchClick: (branchId: string) => void;
  branchId: string;
  selectedBranchId: string;
  top: boolean;
  collapse: boolean;
}

export interface SubMenuState {}
//Fin types

export class SubMenu extends React.Component<SubMenuProps, SubMenuState> {
  constructor(p, c) {
    super(p, c);
    this.state = {};
  }

  startsWith(str: string, search: string) {
    return str.substr(0, search.length) === search;
  }

  private getMenuItemfromId(branchid: string, menu: MenuItemData[]) {
    const first = branchid.substr(0, 2);
    const rest = branchid.substr(2, branchid.length);

    const find = menu.filter(x => {
      return x.isVisible === true;
    })[first.substr(0, 1)].childMenuItems;

    if (find.length == 0) {
      return menu;
    }

    if (rest == '') {
      return find;
    }
    return this.getMenuItemfromId(rest, find);
  }

  get levelselectedBranchId() {
    return branchIdHelper.getLevel(this.props.selectedBranchId);
  }

  get selectedBranchIdHasChild() {
    return branchIdHelper.hasChild(this.props.selectedBranchId);
  }

  render() {
    if (this.props.childMenuItems == null || this.props.childMenuItems.length == 0) {
      return null;
    }

    const lis = this.props.childMenuItems.map((v, i, arr) => {
      const localId = this.props.branchId + i + (v.childMenuItems != null && v.childMenuItems.length != 0 ? '*' : '-');

      return (
        <SubItems
          forceOpen={v.forceOpen}
          sibling={arr}
          top={this.props.top}
          icon={v.icon}
          selectedBranchId={this.props.selectedBranchId}
          branchId={localId}
          onBranchClick={this.props.onBranchClick}
          key={i}
          open={this.props.open}
          onMenuClick={this.props.onMenuClick}
          uri={v.uri}
          title={v.title}
          isVisible={v.isVisible}
          childMenuItems={v.childMenuItems}
          collapse={this.props.collapse}
          styleType={v.styleType}
        />
      );
    });

    if (this.props.branchId === '') {
      return (
        <Scrollbars
          style={{
            height: '100%', //window.innerHeight - 150
          }}
        >
          {lis}
        </Scrollbars>
      );
    } else {
      return <div>{lis}</div>;
    }
  }
}

//Types
export interface SubItemsProps extends MenuItemData {
  onMenuClick: (uri: string) => boolean | void;
  open: boolean;
  onBranchClick: (branchId: string) => void;
  branchId: string;
  selectedBranchId: string;
  top: boolean;
  sibling: MenuItemData[];
  collapse: boolean;
}

export interface SubItemsState {}
//Fin types

export class SubItems extends React.Component<SubItemsProps, SubItemsState> {
  constructor(p, c) {
    super(p, c);
  }

  startsWith(str: string, search: string) {
    return str.substr(0, search.length) === search;
  }

  shouldComponentUpdate(nextProps: SubItemsProps, nextState: SubItemsState) {
    if (this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId) {
      return true;
    }

    if (nextProps.selectedBranchId.substr(0, nextProps.branchId.length) === nextProps.branchId) {
      return true;
    }

    return false;
  }

  render() {
    const branch = style({
      paddingLeft: this.level == 1 ? 0 : this.level == 2 ? 60 : 20, // 20 + (this.hasIcon ? 0 : 0),/*+ (this.level * 10),*/
      display: this.props.isVisible === false ? 'none' : 'inherit',
      position: 'relative',
    });

    const link = style({
      color: this.isThisMenuSelected ? '#f39100' : this.props.top ? '#FFF' : '#FFF',
      display: this.props.collapse ? 'none' : 'initial',
      paddingLeft: this.level == 1 ? 15 : 0,
    });

    const branchItem = style({
      marginTop: this.props.styleType === 'button' ? 15 : 0,
      fontSize: toRem(14),
      fontWeight: 500,
      fontStyle: 'normal',
      fontStretch: 'normal',
      //lineHeight: 2.29,
      height: this.hasIcon || this.props.styleType === 'button' ? 42 : 32,
      letterSpacing: 'normal',
      color: this.isThisMenuSelected ? '#f39100' : this.props.top ? '#FFF' : '#FFF',
      $nest: {
        ['& a']: {
          color: this.isThisMenuSelected ? '#f39100' : this.props.top ? '#FFF' : '#FFF',
          //display: this.props.collapse ? "none" : "initial",
        },
      },
    });

    const meunuIcon = style({
      color: '#FFF',
      marginTop: toRem(3),
      //position: this.props.collapse ? "relative" : "absolute",
      position: 'relative',

      fontSize: toRem(25),
      display: this.hasIcon ? 'initial' : 'none',
    });

    const innnerSubmenu = style({
      display: this.props.collapse ? 'none' : 'initial',
      $nest: {
        ['& > div']: {
          height: '100%',
          overflow: 'hidden',
          maxHeight: 0,
          transition: 'max-height 1s',
        },
      },
    });

    const innnerSubmenuOpen = style({
      $nest: {
        ['& > div']: {
          maxHeight: 1000,
          transition: 'max-height 2.5s',
        },
      },
    });

    if (this.props.collapse) {
      return (
        <div className={branch} data-branch={this.props.branchId}>
          <div className={branchItem} onClick={this.onClick}>
            <span className={meunuIcon}>
              <i className={this.props.icon} onClick={this.onClick} />
            </span>
            {this.textContentColapse}
          </div>
        </div>
      );
    }

    let content = this.props.title;
    if (this.props.styleType === 'button') {
      content = (
        <span
          style={{
            paddingRight: 53,
            paddingBottom: 12,
            paddingLeft: 53,
            paddingTop: 12,
            borderRadius: 30,
            borderColor: this.isThisMenuSelected ? '#f39100' : this.props.top ? '#FFF' : '#FFF',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          {this.props.title}
        </span>
      );
    }

    return (
      <div className={branch} data-branch={this.props.branchId}>
        <div className={branchItem} onClick={this.onClick}>
          <span className={meunuIcon}>
            <i className={this.props.icon} onClick={this.onClick} />
          </span>
          <a className={link} onClick={this.onClickA} href={this.props.uri}>
            {content}
          </a>
        </div>
        {this.anyChild ? (
          <div
            className={
              innnerSubmenu +
              (this.isMenuSelected === true || this.props.forceOpen === true ? ' ' + innnerSubmenuOpen : '')
            }
          >
            <SubMenu
              top={this.props.top}
              onBranchClick={this.props.onBranchClick}
              branchId={this.props.branchId}
              selectedBranchId={this.props.selectedBranchId}
              open={this.props.open}
              onMenuClick={this.props.onMenuClick}
              childMenuItems={this.props.childMenuItems}
              collapse={this.props.collapse}
            />
          </div>
        ) : null}
      </div>
    );
  }

  get textContentColapse() {
    if (this.props.icon != null && this.props.icon != '') {
      return null;
    }
    if (this.props.title != null && typeof this.props.title === 'string') {
      return (
        <span
          style={{
            paddingRight: 10,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingTop: 5,
            borderRadius: 30,
            borderColor: this.isThisMenuSelected ? '#f39100' : this.props.top ? '#FFF' : '#FFF',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          {this.props.title.substr(0, 2)}
        </span>
      );
    }

    return null;
  }

  get hasIcon() {
    return this.props.icon != null && this.props.icon != '';
  }

  get level() {
    return branchIdHelper.getLevel(this.props.branchId);
  }

  LightenDarkenColor = (col: string, amt: number) => {
    let usePound = false;

    if (col[0] == '#') {
      col = col.slice(1);
      usePound = true;
    }

    const num = parseInt(col, 16);

    let r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
  };

  get anyChild() {
    const child =
      this.props.childMenuItems == null
        ? []
        : this.props.childMenuItems.filter(x => x.isVisible == true && x.title != null);
    return child.length != 0;
  }

  get isMenuSelected() {
    if (this.props.top === false) {
      return this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId;
    }
    return this.isThisMenuSelected;
  }

  get isThisMenuSelected() {
    if (this.startsWith(this.props.selectedBranchId, this.props.branchId) && this.anyChild === false) {
      return true;
    }

    return this.props.selectedBranchId === this.props.branchId;
  }

  onClick = e => {
    if (this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId) {
      this.SendBranchClick();
    } else {
      this.SendBranchClick();
    }

    //this.setState({ active: false });
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  onClickA = e => {
    this.SendBranchClick();
    const value = this.props.onMenuClick(this.props.uri);
    e.preventDefault();
  };

  private SendBranchClick = () => {
    this.props.onBranchClick(this.props.branchId);
  };

  private SendBranchParentClick = () => {
    const idParent = this.props.branchId.substr(0, this.props.branchId.length - 2); //this.props.branchId.substr(0, this.props.branchId.lastIndexOf("-"));
    this.props.onBranchClick(idParent);
  };
}
