import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpMenu, { UpMenuState } from './UpMenu'
import UpMenuOH from './UpMenuOH'
import { MenuItemData } from './UpMenu';
import { isEmpty } from '../../../Common/utils';

import UpButton from '../../Inputs/Button/UpButton'
import { style } from 'typestyle';
import UpSvgIcon from '../SvgIcon';
import UpLigne from '../../Display/Ligne';
import colorMap from "../../../Common/theming/colorMap";
import UpBox from "../../Containers/Box";
import UpTooltip from '../Tooltip';

const resetMenuSelection = (menu: Array<MenuItemData>): Array<MenuItemData>  =>  {
    if (isEmpty(menu)) {
        return [];
    }
    return menu.map(m => ({ ...m, childMenuItems : resetMenuSelection(m.childMenuItems), isSelected: false }));
}

const hasItemSelected = (uri: string, menu: Array<MenuItemData>): boolean => {
    return !isEmpty(menu) && menu.find(i => (i.uri != null && uri === i.uri) || hasItemSelected(uri, i.childMenuItems)) != null ;
}

const setMenuSelection = (uri: string, menu: Array<MenuItemData>): Array<MenuItemData> => {
    if (isEmpty(menu)) {
        return [] ;
    }
    return  menu.map(m => ({ ...m, childMenuItems: setMenuSelection(uri, m.childMenuItems), isSelected: m.uri !== null && m.uri === uri || hasItemSelected(uri, m.childMenuItems)}));
}

const HookedMenu = (props) => {
    const defaultMenu: Array<MenuItemData> = [
        {
            title: "Stack", icon: "stack", isSelected: false, isVisible: true, uri: "/stack", childMenuItems: [
                { title: "Option 1", icon: "weather-rain", isSelected: false, isVisible: true, uri: "/stack/option1", childMenuItems: [] },
                { title: "Option 2", icon: "weather-snow", isSelected: false, isVisible: true, uri: "/stack/option2", childMenuItems: [] },
                { title: "Option 3", icon: "weather-sunset", isSelected: false, isVisible: true, uri: "/stack/option3", childMenuItems: [] }
            ]
        },
        { title: "Smart", icon: "smartphone", isSelected: false, isVisible: true, uri: "/smart", childMenuItems: [] },
        { isSeparator: true},
        { title: "Settings", icon: "settings", isSelected: false, isVisible: true, uri: "/settings", childMenuItems: [] },
        { isSeparator: true },
        { render  : (props : MenuItemData & UpMenuState ) => {
            return <UpButton intent={'primary'} onClick={() => action('Command')} width={props.minified ? 'icon' : 'full'} height={'large'} actionType={'briefcase'}>{'Commander'}</UpButton>
        }},
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
        onClick={uri => {
          const newMenu = setMenuSelection(uri, menu);
          setMenu(newMenu);
          return false;
        }}
        menuItems={menu}
        footer={(props:UpMenuState) => {
           return (
            <>
            {!props.minified &&
            <UpBox alignItems={'center'} justifyContent={'center'} style={{ width: "100%", height: "100%" }}>
                <div
                    className={footerStyle}>
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
            {props.minified &&
                <UpTooltip place={'top'} content={'Copyright.Tous droits réservés Up 2019'} >
                    <UpBox alignItems={'center'} justifyContent={'center'} style={{ width: "100%", height: "100%" }}>
                        <UpSvgIcon color={colorMap.disabledFg} iconName={"info-sign"} />
                    </UpBox>
                </UpTooltip>
            }
            </>
           );
        }}
        header={(props) => {
          return ( 
            <UpBox flexDirection={"row"} alignItems={'center'} justifyContent={'center'} style={{ width: "100%", height: "100%" }}>
                <UpSvgIcon color={colorMap.primary} iconName={"checkmark"} />
                {!props.minified &&
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

storiesOf('Display/UpMenu', module)
    .add('Simple usage',
        () => (<HookedMenu />), { info : 'Utilisation du composant en lui passant les données à afficher'}
).add('Simple usage 2',
        () => (
            <UpMenuOH onDeconnexionClick={() => { }} onMenuClick={action("Menu clicked")}
                Antennes={null} Recherche={null}
                Utilisateur={{
                    Nom: "Master Web", DerniereConnexion: new Date(), NomBinome: "Bînomot Hop", onChangeMdpClick: () => { },
                    Alertes: { NonLues: 36, onClick: () => { }, },
                }}
                // topMenuItems={[
                //     { title: "Recherche", icon: "up up-dossier", action: "https://www.google.fr" },
                //     { title: "Alertes", icon: "up up-dossier", action: () => { alert(5); } }
                // ]}
                menuItems={
                    [
                        {
                            title: "test", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [
                                {
                                    title: "aaaaaa", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [

                                        { title: "bbbbb", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ccccc", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ddddd", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                                    ]
                                },
                                { title: "ffffff sc", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                {
                                    title: "ddddd", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [


                                        { title: "bbbbb2", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        {
                                            title: "ccccc2", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [

                                                { title: "c1", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                                { title: "ccccc2 22222222", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                                { title: "c3", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }


                                            ]
                                        },
                                        { title: "ddddd2", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "NonVisible", icon: "up up-dossier", isVisible: false, uri: "https://www.google.fr", childMenuItems: [
                                { title: "bbbbb", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                { title: "ccccc", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                { title: "ddddd", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                            ]
                        },

                        {
                            title: "NonVisibleSub 2", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [
                                { title: "bbbbb", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                { title: "ccccc", icon: "up up-dossier", isVisible: false, uri: "https://www.google.fr", childMenuItems: [] },
                                { title: "ddddd", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                            ]
                        },
                        {
                            title: "selected", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [
                                { title: "bbbbb", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                {
                                    title: "selected", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [
                                        { title: "bbbbb", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "selected", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ddddd", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                                    ]
                                },
                                { title: "ddddd", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                            ]
                        },
                        { title: "t", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                        { title: "teshtztht", icon: "up up-dossier", isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                    ]}>
            </UpMenuOH>
        ), { info : 'Utilisation du composant en lui passant les données à afficher'}
).add('UpMenuOH ss',
        () => (
            <UpMenuOH
                Antennes={null} Recherche={null} Utilisateur={{
                    Nom: "Master Web", DerniereConnexion: new Date(), NomBinome: "Bînomot Hop", onChangeMdpClick: () => { },
                    Alertes: { NonLues: 36, onClick: () => { }, },
                }}

                onDeconnexionClick={() => { }}
                onMenuClick={() => { }}
                selectMenu={null}
                menuItems={
                    [

                        {
                            styleType: "button",
                            "title": "Tableau de bord",
                            "uri": "",
                            //"icon": "up up-certificatSante",
                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Chèques déjeuner",
                                    "uri": "/Patient/Administratif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Cadhoc",
                                    "uri": "/Patient/Administratif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Découvrez nos autres produits",
                                    "uri": "/Patient/Administratif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                }
                            ]

                        },

                        {
                            "title": "Dernier acces",
                            "uri": "",
                            forceOpen: true,
                            "icon": "up up-certificatSante",
                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "SPONGE BOB",
                                    "uri": "/Patient?SejourId=39593&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                    "icon": null,

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "aaaaa",
                                            "uri": "/Patient/Administratif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "bbbbb",
                                            "uri": "/Patient/Administratif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": false,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "cccc",
                                            "uri": "/Patient/Administratif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]

                                },
                                {
                                    "title": "39610 SUIVI",
                                    "uri": "",
                                    "icon": null,

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Administratif",
                                            "uri": "/Patient/Administratif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Etat civil",
                                                    "uri": "/Patient/Administratif/Etat_civil?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Correspondants",
                                                    "uri": "/Patient/Administratif/Correspondants?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Editions",
                                                    "uri": "/Patient/Administratif/Editions?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Couvertures sociales",
                                                    "uri": "/Patient/Administratif/Couvertures_sociales?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Prise en charge HAD",
                                                    "uri": "/Patient/Administratif/Prise_En_Charge?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "Création d'une prise en charge HAD",
                                                            "uri": "/Patient/Administratif/Prise_En_Charge/Crea_PriseEnCharge?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Mouvements",
                                                    "uri": "/Patient/Administratif/HAD/Mouvements?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Messages",
                                                    "uri": "/Patient/Administratif/Messages?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Facturation",
                                            "uri": "/Patient/Facturation?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Médicaments facturables en sus",
                                                    "uri": "/Patient/Facturation/Produits_LPP?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Facturation/Produits_LPP/Affichage_LPP?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Facturation/Produits_LPP/Creation_LPP?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Facturation/Produits_LPP/Modification_LPP?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Médicaments coûteux",
                                                    "uri": "/Patient/Facturation/MedicamentCouteux?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Visites médecin traitant",
                                                    "uri": "/Patient/Facturation/visite_medecin?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Facturation/visite_medecin/affichage_vm?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Facturation/visite_medecin/creation_vm?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Facturation/visite_medecin/modification_vm?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Médical",
                                            "uri": "/Patient/Medical?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Général",
                                                    "uri": "/Patient/Medical/Informations_Medicales?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "Modification Informations Médicales",
                                                            "uri": "/Patient/Medical/Informations_Medicales/Modification_Informations_Medicales?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Antécedents",
                                                            "uri": "/Patient/Medical/Informations_Medicales/Antecedents?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Motif",
                                                    "uri": "/Patient/Medical/Motif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Séquences",
                                                    "uri": "/Patient/Medical/Sequence_Medicale?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "Creation Sequence Medicale",
                                                            "uri": "/Patient/Medical/Sequence_Medicale/Creation_Sequence_Medicale?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Creation Sequence Medicale Depuis Simulation TAA",
                                                            "uri": "/Patient/Medical/Sequence_Medicale/Creation_Sequence_Medicale_SimuTAA?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Creation Sequence Medicale",
                                                            "uri": "/Patient/Medical/Sequence_Medicale/Modification_Sequence_Medicale?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Consultation Sequence Medicale",
                                                            "uri": "/Patient/Medical/Sequence_Medicale/Consultation_Sequence_Medicale?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Informations",
                                                    "uri": "/Patient/Medical/Informations?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Actes CCAM",
                                                    "uri": "/Patient/Medical/Actes_CCAM?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Chimiothérapie",
                                                    "uri": "/Patient/Medical/Chimiotherapie?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Comptes rendus",
                                                    "uri": "/Patient/Medical/Compte_rendu?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Dispensation",
                                                    "uri": "/Patient/Medical/Dispensations?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "Lire",
                                                            "uri": "/Patient/Medical/Dispensations/Lire?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Ajouter",
                                                            "uri": "/Patient/Medical/Dispensations/Ajouter?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Modifier",
                                                            "uri": "/Patient/Medical/Dispensations/Modifier?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Traitements",
                                                    "uri": "/Patient/Medical/Traitements?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Soins",
                                            "uri": "/Patient/Soins?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Evaluations",
                                                    "uri": "/Patient/Soins/Evaluations?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "AGGIR",
                                                            "uri": "/Patient/Soins/Evaluations/AGGIR?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Braden",
                                                            "uri": "/Patient/Soins/Evaluations/Braden?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Norton",
                                                            "uri": "/Patient/Soins/Evaluations/Norton?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Doloplus",
                                                            "uri": "/Patient/Soins/Evaluations/Doloplus?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "G0",
                                                            "uri": "/Patient/Soins/Evaluations/G0?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "G3",
                                                            "uri": "/Patient/Soins/Evaluations/G3?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "G4",
                                                            "uri": "/Patient/Soins/Evaluations/G4?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": [
                                                                {
                                                                    "title": "G4 Modification",
                                                                    "uri": "/Patient/Soins/Evaluations/G4/G4_Modif?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                                    "icon": "",

                                                                    "isVisible": true,
                                                                    "childMenuItems": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "title": "SIIPS",
                                                            "uri": "/Patient/Soins/Evaluations/SIIPS?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Précautions",
                                                    "uri": "/Patient/Soins/Precautions?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "AVQ",
                                                    "uri": "/Patient/Soins/AVQ?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "Consultation Grille AVQ",
                                                            "uri": "/Patient/Soins/AVQ/Consultation_AVQ?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Comptes rendus",
                                                    "uri": "/Patient/Soins/Compte_rendu?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Prescriptions",
                                                    "uri": "/Patient/Medical/Ordonnances?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "Ajouter numérisation",
                                                            "uri": "/Patient/Soins/Prescriptions/Ajouter?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": false,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Lire Numérisation",
                                                            "uri": "/Patient/Soins/Prescriptions/Lire?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": false,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Modifier Numérisation",
                                                            "uri": "/Patient/Soins/Prescriptions/Modifier?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": false,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Vue Globale",
                                                            "uri": "/Patient/Soins/Prescriptions/VueGlobale?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": false,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Anciens Traitements",
                                                    "uri": "/Patient/Soins/Anciens_Traitements?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Spécificités",
                                                    "uri": "/Patient/Soins/Specificites?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Social",
                                            "uri": "/Patient/Social?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Situation",
                                                    "uri": "/Patient/Social/Situation_Sociale?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "Consultation de la situtation sociale du patient",
                                                            "uri": "/Patient/Social/Situation_Sociale/Consu_SituationSociale?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "Renseignement de la situation sociale du patient",
                                                            "uri": "/Patient/Social/Situation_Sociale/Crea_SituationSociale?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Condition de vie",
                                                    "uri": "/Patient/Social/Condition_de_vie?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Autres Budgets",
                                                    "uri": "/Patient/Social/Autres_Budgets?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Prestations",
                                                    "uri": "/Patient/Social/Prestations?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Comptes rendus",
                                                    "uri": "/Patient/Social/Compte_rendu?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Placements",
                                                    "uri": "/Patient/Social/Placements?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Psychologie",
                                            "uri": "/Patient/Psychologie?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Demandes",
                                                    "uri": "/Patient/Psychologie/Demandes?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Visites",
                                                    "uri": "/Patient/Psychologie/Visites_a_dom?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Comptes rendus",
                                                    "uri": "/Patient/Psychologie/Compte_rendu?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Coordination",
                                            "uri": "/Patient/Coordination?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Plans de soins salariés",
                                                    "uri": "/Patient/Coordination/Plans_Soins_Salaries?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Visites Salariés",
                                                    "uri": "/Patient/Coordination/Visites_Salaries?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Coordination/Visites_Salaries/Affichage?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Coordination/Visites_Salaries/Creation?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Visites Libérales",
                                                    "uri": "/Patient/Coordination/Visites_Liberales?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": [
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Coordination/Visites_Liberales/Affichage?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Coordination/Visites_Liberales/Creation?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        },
                                                        {
                                                            "title": "",
                                                            "uri": "/Patient/Coordination/Visites_Liberales/Creation_HPS?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                            "icon": "",

                                                            "isVisible": true,
                                                            "childMenuItems": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "Transmissions ciblées",
                                                    "uri": "/Patient/Coordination/Trans_Ciblees?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Résumé Sej.",
                                                    "uri": "/Patient/Coordination/Resume_Sej?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Demandes Produits",
                                            "uri": "/Patient/Commandes?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Demandes de produits",
                                                    "uri": "/Patient/Commandes/Demande_Nom_Usage?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Articles au chevet du patient",
                                                    "uri": "/Patient/Commandes/Articles_Patient?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Transports",
                                                    "uri": "/Patient/Commandes/Transports?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Comptes rendus Lib.",
                                            "uri": "/Patient/Comptes_rendus_Lib?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Fichiers associés",
                                            "uri": "/Patient/Fichiers_associes?SejourId=39610&PatientId=27387&DossierId=e680e431-cd7c-4402-a0f2-0eb523501c45",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                            ]

                        },

                        {
                            "title": "",
                            "uri": "/Home",
                            "icon": "",

                            "isVisible": false,
                            "childMenuItems": []
                        },
                        {
                            "title": "Patients",
                            "uri": "/Patients",
                            "icon": "up up-utilisateur",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Recherche",
                                    "uri": "/Patients/Recherche",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Précautions complémentaires",
                                    "uri": "/Patients/Precautions",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Transmissions ciblées",
                                    "uri": "/Patients/Transmissions_ciblees",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Fichiers Externes",
                                    "uri": "/Patients/Resultats_labo",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                }
                            ]
                        },
                        {
                            "title": "RH",
                            "uri": "/RH",
                            "icon": "up up-environnementMedicoSocial",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Salariés",
                                    "uri": "/RH/Salaries",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Liste des salariés",
                                            "uri": "/RH/Salaries/Liste",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Création salarié",
                                                    "uri": "/RH/Salaries/Creation",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Anciens plannings",
                                            "uri": "/RH/Salaries/Anciens_planning",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Horaires de travail ",
                                            "uri": "/RH/Salaries/Gestion_horaires",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Anciennes tournées",
                                            "uri": "/RH/Salaries/Anciennes_tournees",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Tournées",
                                            "uri": "/RH/Salaries/Tournees",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Structures",
                                    "uri": "/RH/Structures",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Libéraux",
                                    "uri": "/RH/Liberaux",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Hôpitaux",
                                    "uri": "/RH/Hopitaux",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Créer hôpital",
                                            "uri": "/RH/Hopitaux/Creer",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Intervenants hospitaliers",
                                    "uri": "/RH/Intervenants_hospitaliers",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                }
                            ]
                        },
                        {
                            "title": "Activité",
                            "uri": "/Activite",
                            "icon": "up up-rendezVous",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Relevés salariés",
                                    "uri": "/Activite/Releves_salaries",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Relevés libéraux",
                                    "uri": "/Activite/Releves_liberaux",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Activité SSIAD",
                                    "uri": "/Activite/Activite_SSIAD",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Prolongations",
                                            "uri": "/Activite/Activite_SSIAD/Prolongations",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Suspensions",
                                            "uri": "/Activite/Activite_SSIAD/Suspensions",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Grilles AGGIR",
                                            "uri": "/Activite/Activite_SSIAD/Grilles_AGGIR",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Prescriptions",
                                            "uri": "/Activite/Activite_SSIAD/Prescriptions",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "TAA",
                            "uri": "/Facturation",
                            "icon": "up up-releveBancaire",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Contrôles TAA",
                                    "uri": "/Facturation/Controles_TAA",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Seq. à valider",
                                            "uri": "/Facturation/Controles_TAA/Seq_a_valider",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Seq. validées",
                                            "uri": "/Facturation/Controles_TAA/Seq_validees",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Alertes Séq.",
                                            "uri": "/Facturation/Controles_TAA/Alertes_Seq",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Alertes Séjours",
                                            "uri": "/Facturation/Controles_TAA/Alertes_Sejours",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Alertes AVQ",
                                            "uri": "/Facturation/Controles_TAA/Alertes_AVQ",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Alertes prise en charge",
                                            "uri": "/Facturation/Controles_TAA/Alertes_TAA",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Factures TAA",
                                    "uri": "/Facturation/Factures_TAA",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Périodes",
                                            "uri": "/Facturation/Factures_TAA/Periodes",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Période",
                                                    "uri": "/Facturation/Factures_TAA/Periodes/Periode",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Factures",
                                            "uri": "/Facturation/Factures_TAA/Factures",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Fichiers TAA",
                                    "uri": "/Facturation/Fichiers_TAA",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Envois",
                                            "uri": "/Facturation/Fichiers_TAA/Envois",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Noémie",
                                            "uri": "/Facturation/Fichiers_TAA/Noemie",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "BGH",
                                            "uri": "/Facturation/Fichiers_TAA/BGH",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Fichier RPSS",
                                            "uri": "/Facturation/Fichiers_TAA/Fichier_RPSS",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Export/Import",
                                    "uri": "/Facturation/ExportImport",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Exportation TAA",
                                            "uri": "/Facturation/ExportImport/Exportation_TAA",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Journal des exportations",
                                            "uri": "/TAA/ExportImport/Journal",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "Achats",
                            "uri": "/Achats",
                            "icon": "up up-commande",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Fournisseurs",
                                    "uri": "/Achats/Fournisseurs",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Factures d'achats",
                                    "uri": "/Facturation/Factures_Achats",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Factures",
                                            "uri": "/Facturation/Factures_Achats/Liste",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Création",
                                                    "uri": "/Facturation/Factures_Achats/Creation",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Consultation",
                                                    "uri": "/Facturation/Factures_Achats/Consultation",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Exportation Achats",
                                            "uri": "/Facturation/ExportImport/Exportation_Achats",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Journal des exportations",
                                            "uri": "/Facturation/ExportImport/Journal",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Catalogue de location",
                                    "uri": "/Stock/Articles",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Article",
                                            "uri": "/Stock/Articles/Article",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Produit",
                                            "uri": "/Stock/Articles/Produit",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Sous famille",
                                            "uri": "/Stock/Articles/Sous_famille",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Famille",
                                            "uri": "/Stock/Articles/Famille",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Location",
                                    "uri": "/Achats/Location",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Commandes Location",
                                            "uri": "/Achats/Cde_Location",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Livraison Location",
                                            "uri": "/Achats/Liv_Location",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "Logistique",
                            "uri": "/Stock_V2",
                            "icon": "up up-reporting",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Etat du stock",
                                    "uri": "/Stock_V2/Etat_Stock",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Catalogue",
                                    "uri": "/Stock_V2/Catalogue_Produits",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Recherche",
                                            "uri": "/Stock_V2/Catalogue_Produits/Recherche",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Création Produit",
                                                    "uri": "/Stock_V2/Catalogue_Produits/Creation_Produit",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title": "Stock",
                                    "uri": "/Stock_V2/Gestion_Des_Articles",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Articles en stock",
                                            "uri": "/Stock_V2/Gestion_Des_Articles/Recherche",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Visualisation Fiche Article",
                                                    "uri": "/Stock_V2/Gestion_Des_Articles/Fiche_Article",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Mouvements dans le stock",
                                            "uri": "/Stock_V2/Gestion_Des_Articles/Mouvement",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Création Retour au stock",
                                                    "uri": "/Stock_V2/Gestion_Des_Articles/Edition_RetourStock",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Création Sortie",
                                                    "uri": "/Stock_V2/Gestion_Des_Articles/Edition_Sortie",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                },
                                                {
                                                    "title": "Création Transfert",
                                                    "uri": "/Stock_V2/Gestion_Des_Articles/Edition_Transfert",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Inventaires du stock",
                                            "uri": "/Stock_V2/Gestion_Des_Articles/Inventaire",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Création Inventaire",
                                                    "uri": "/Stock_V2/Gestion_Des_Articles/Creation_Inventaire",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Lieux de stock",
                                            "uri": "/Stock_V2/Parametrage/Lieux_Stock",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Patients",
                                    "uri": "/Stock_V2/Demandes_Patient",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Demandes des patients",
                                            "uri": "/Stock_V2/Demandes_Patient/Recherche",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Livraisons aux patients",
                                            "uri": "/Stock_V2/Gestion_Des_Articles/Livraion_Patient",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Création Livraison patient",
                                                    "uri": "/Stock_V2/Gestion_Des_Articles/Creation_Livraison_Patient",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title": "Approvisionnement",
                                    "uri": "/Stock_V2/Commandes",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Commandes aux fournisseurs",
                                            "uri": "/Stock_V2/Catalogue_Produits/Commande_Fournisseur",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Création Commande Fournisseur",
                                                    "uri": "/Stock_V2/Catalogue_Produits/Creation_Commande_Fournisseur",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        },
                                        {
                                            "title": "Réceptions des fournisseurs",
                                            "uri": "/Stock_V2/Gestion_Des_Articles/Reception",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": [
                                                {
                                                    "title": "Création Réception Fournisseur",
                                                    "uri": "/Stock_V2/Gestion_Des_Articles/Creation_Reception_Fournisseur",
                                                    "icon": "",

                                                    "isVisible": true,
                                                    "childMenuItems": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title": "Cueillettes",
                                    "uri": "/Stock_V2/Cueillettes",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                }
                            ]
                        },
                        {
                            "title": "Communication",
                            "uri": "/Communication",
                            "icon": "up up-reporting",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Visites Salariés",
                                    "uri": "/Communication/Visites_Salaries",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "",
                                            "uri": "/Communication/Visites_Salaries/Journee",
                                            "icon": "",

                                            "isVisible": false,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "",
                                            "uri": "/Communication/Visites_Salaries/Consultation",
                                            "icon": "",

                                            "isVisible": false,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "",
                                            "uri": "/Communication/Visites_Salaries/Modification",
                                            "icon": "",

                                            "isVisible": false,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Visites Libéraux",
                                    "uri": "/Communication/Visites_Liberaux",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Visites",
                                            "uri": "/Communication/Visites_Liberaux/Visites",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Global",
                                            "uri": "/Communication/Visites_Liberaux/Global",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Requêtes",
                                    "uri": "/Communication/Requetes",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Statistiques",
                                    "uri": "/Communication/Statistiques",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Editions",
                                    "uri": "/Communication/Editions",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Tableaux de bord",
                                    "uri": "/Communication/Tableaux_de_bord",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Rapports Trimestriels",
                                            "uri": "/Communication/Tableaux_de_bord/Rapport_Trimestriel",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Indicateurs",
                                            "uri": "/Communication/Tableaux_de_bord/Indicateur",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Prévisions Plans de soins libéraux",
                                            "uri": "/Communication/Tableaux_de_bord/Prevision_Plans_Soins_Liberaux",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Transports",
                                            "uri": "/Communication/Tableaux_de_bord/Transports",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Placements",
                                            "uri": "/Communication/Tableaux_de_bord/Placements",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Rapport annuel SSIAD",
                                    "uri": "/Communication/Rapport_Annuel_SSIAD",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Millésime",
                                            "uri": "/Communication/Rapport_Annuel_SSIAD/Millesime",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Caractéristiques",
                                            "uri": "/Communication/Rapport_Annuel_SSIAD/Caracteristiques",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Éléments qualitatifs",
                                            "uri": "/Communication/Rapport_Annuel_SSIAD/Elements_qualitatifs",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Coûts structure",
                                            "uri": "/Communication/Rapport_Annuel_SSIAD/Couts_structure",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Semaine réf.",
                                            "uri": "/Communication/Rapport_Annuel_SSIAD/Semaine_reference",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Rapports",
                                            "uri": "/Communication/Rapport_Annuel_SSIAD/Rapports",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Scans domiciles",
                                    "uri": "/Communication/Scans_domiciles",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                }
                            ]
                        },
                        {
                            "title": "Paramètres",
                            "uri": "/Parametres",
                            "icon": "pe pe-7s-tools",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Général",
                                    "uri": "/Parametres/General",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                }
                            ]
                        },
                        {
                            "title": "Arcan",
                            "uri": "/Arcan",
                            "icon": "pe pe-7s-smile",

                            "isVisible": true,
                            "childMenuItems": [
                                {
                                    "title": "Paramètres",
                                    "uri": "/Arcan/Parametres",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Anciens Paramètres",
                                            "uri": "/Arcan/Parametres/Anciens",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "Nouveaux Paramètres",
                                            "uri": "/Arcan/Parametres/Nouveaux",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Scripts",
                                    "uri": "/Arcan/Scripts",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Modules",
                                    "uri": "/Arcan/Modules",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "Logs",
                                    "uri": "/Arcan/Logs",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": [
                                        {
                                            "title": "Général",
                                            "uri": "/Arcan/Logs/General",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        },
                                        {
                                            "title": "HL7",
                                            "uri": "/Arcan/Logs/HL7",
                                            "icon": "",

                                            "isVisible": true,
                                            "childMenuItems": []
                                        }
                                    ]
                                },
                                {
                                    "title": "Maintenance",
                                    "uri": "/Arcan/Commands",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                },
                                {
                                    "title": "HangFire",
                                    "uri": "/Arcan/HangFire",
                                    "icon": "",

                                    "isVisible": true,
                                    "childMenuItems": []
                                }
                            ]
                        },
                        {
                            "title": "Aide",
                            "uri": "/Aide",
                            "icon": "",

                            "isVisible": false,
                            "childMenuItems": []
                        },
                        {
                            "title": "Offres",
                            "uri": "/Offres",
                            "icon": "",

                            "isVisible": false,
                            "childMenuItems": []
                        },
                        {
                            "title": "Messagerie",
                            "uri": "/Messagerie",
                            "icon": "",

                            "isVisible": false,
                            "childMenuItems": []
                        },
                        {
                            "title": "Alerte",
                            "uri": "/Alerte",
                            "icon": "",

                            "isVisible": false,
                            "childMenuItems": []
                        }
                    ]
                }>

                <div>
                    Sed ut dolore et commodo sed eirmod labore sadipscing justo sanctus dolor elitr sea ex magna at kasd amet est facilisi amet ea facilisis dolor dolores dolor gubergren adipiscing takimata consetetur voluptua accusam clita gubergren stet elitr sed amet vel aliquyam et kasd feugait possim clita takimata dolor et diam ea eros ut ipsum duis imperdiet sit magna gubergren vel labore sit dolores tempor at erat magna et ipsum lorem est veniam facilisis consectetuer vero invidunt dolor odio sed dolore sadipscing eros sadipscing tation kasd invidunt diam et dolores illum amet consetetur justo zzril ipsum et sit et labore ullamcorper magna duis lorem veniam eos adipiscing dolor et eos justo consetetur tincidunt sed diam voluptua facilisis et no feugait tation eirmod no clita dolor lorem consetetur nonumy aliquyam labore diam eos sed tempor lorem labore eum eos luptatum esse eros nonumy molestie ipsum amet diam stet ipsum elitr takimata et rebum sed zzril amet consequat nonumy illum consequat tation sed diam dolores nonumy et amet et consequat veniam sadipscing facilisis ipsum in iriure dolore duo clita consetetur praesent dolore sed te tempor placerat kasd diam adipiscing adipiscing dolore nostrud nulla dolor invidunt sadipscing takimata est justo dolore ea sed labore id elitr lorem at justo amet dolores eu sadipscing molestie erat dolore nonumy minim ipsum nisl quod consetetur sanctus diam nisl at ipsum adipiscing consequat et amet invidunt eum erat eirmod sed sea no kasd illum lobortis erat sed ea rebum ipsum duo erat consequat ipsum et doming accusam sit facilisis diam gubergren diam justo aliquam sadipscing praesent no ipsum sit eos ut ipsum imperdiet volutpat eum dolore labore duo sit nulla ipsum sed diam liber laoreet aliquip magna ut illum elit lorem kasd sit blandit ut dolores diam eum vulputate est sit accusam ea ea clita et consequat aliquyam lorem ut clita ipsum sanctus ipsum esse dolor sit et consetetur sea invidunt amet et ut et at dolor diam ipsum diam accusam esse sed diam magna amet voluptua sea hendrerit odio lorem sit rebum duis laoreet sit est dolor labore et ad sed sit sit justo hendrerit dolor ipsum magna molestie in magna clita at veniam placerat at ea duo ut sadipscing kasd accumsan vero est ut autem est stet nisl lorem sit consetetur ut erat ipsum amet iriure et et ipsum dolore vero et rebum ipsum tation amet justo aliquyam accusam dolore et lorem accumsan aliquyam dolore sed sit et sed ipsum dolor gubergren dolor aliquyam amet in duo amet lorem ipsum tempor sadipscing tempor ea illum qui gubergren takimata dolor clita dolor dolore clita facilisis diam iriure kasd diam stet eos option et labore amet kasd dolores lorem blandit nisl nulla ipsum ipsum voluptua eos dolore sed clita tempor liber praesent justo diam et sed sit ex vero iusto dolor amet magna sed lorem aliquyam autem sit no tempor est dolores et et dolore enim at eos sanctus dolor et molestie dolore ea ut ad est quis duo sanctus lorem euismod quod ea duo ipsum ipsum at elit amet takimata euismod dolore at eos lorem sit minim ipsum eirmod ea sed clita iriure diam minim sit stet at suscipit voluptua voluptua labore ipsum et facilisis hendrerit ut sed duo vel cum eu iriure eirmod aliquam ipsum takimata facilisis dolore stet dolore eos minim odio sanctus quis dolor feugait ex ipsum vel et voluptua ipsum ipsum no erat nulla sed minim et magna duo invidunt luptatum amet ut lobortis nobis at sadipscing soluta dolore doming eirmod eos eirmod et voluptua sit consetetur euismod takimata ea lorem lorem facilisi diam ut erat voluptua commodo dolore dignissim sit sed ut rebum est takimata clita takimata sadipscing tincidunt euismod duo nisl commodo justo dolor facer illum sit consetetur wisi ullamcorper rebum lorem tempor aliquyam veniam sea erat aliquam amet consetetur amet takimata duis elitr sea vero kasd et nisl cum et quis est dolore sed gubergren takimata kasd sea stet magna sea invidunt voluptua diam et voluptua hendrerit augue cum iusto hendrerit diam amet sit rebum lorem duis amet luptatum et ipsum liber et sed aliquam lorem liber sed dolor et nonumy ipsum et diam sea et diam ea magna ipsum justo euismod lorem aliquyam consetetur invidunt liber aliquyam et consetetur dolore et hendrerit consetetur amet dolore et sit diam accusam accusam gubergren clita labore et sed et ipsum in elitr in ea sed erat ut vulputate ut ut et labore minim laoreet ea sea accumsan justo nam autem feugiat ut dolor magna eirmod ea hendrerit no stet justo vel ipsum sit ut tempor sed lorem rebum aliquyam elitr no nulla justo ut duis elitr nonummy duis sit est sadipscing ea cum sit in eos sed gubergren diam et hendrerit voluptua sanctus amet accusam duis tempor kasd assum eos eirmod erat nonumy ipsum tempor lorem consequat dolores eu amet voluptua sed augue no id praesent ut sit stet rebum amet euismod invidunt euismod ex praesent et lobortis vel tempor sanctus ut kasd voluptua vel ea takimata diam no dolore suscipit vero clita dolore commodo autem nostrud ipsum eirmod ipsum sed tempor ipsum tincidunt vero feugait elitr dolore dolor volutpat eirmod dolore soluta nibh diam vero duo facilisis accumsan elit sadipscing sed et dolore nonummy tation sit et sed dolor nonumy dolor wisi nibh tincidunt justo erat tempor ipsum sed vulputate diam sadipscing eos dolor eos facer ad sed et feugiat invidunt erat nulla eu lorem sed stet dolor illum voluptua justo est amet feugiat eros illum eos ipsum accusam no illum sed dolore diam ea tempor justo dolore est accusam ut dolore takimata nonumy dolor labore nonumy labore sanctus lobortis magna facilisi consectetuer amet tempor facer dolor te odio esse ad quis dignissim clita sit sed magna lorem rebum amet kasd nonumy elitr gubergren facilisi odio rebum vulputate dolor ut imperdiet lobortis et lorem kasd vero vero gubergren lorem vero takimata nonummy gubergren sit et sanctus nulla sed est gubergren erat magna tempor dolores aliquyam elitr nulla gubergren elitr labore voluptua lobortis magna amet diam gubergren lorem accusam amet sed eirmod rebum molestie nonumy aliquam labore aliquyam gubergren tempor consectetuer sed et volutpat et sanctus voluptua accusam tempor dolor assum consetetur sit at ipsum volutpat erat dolore ea sed stet dolor gubergren nulla sed eum facilisi tempor ipsum dolor sit sed aliquyam et sed sadipscing nam tempor dolor nonumy sit nam eum erat magna et et lobortis nulla vulputate est eos lorem ut iriure illum magna kasd takimata et et eirmod vero consectetuer et gubergren eirmod erat duo facilisis gubergren adipiscing augue at diam takimata eos ullamcorper dolor nibh delenit amet at at et nonumy stet et erat euismod kasd aliquyam aliquyam voluptua iriure clita et rebum elitr accusam sed tempor sea dolor nonummy hendrerit eum invidunt amet vel kasd sanctus no clita eros ut consectetuer ipsum sea velit dolor qui lorem sea duo delenit sit tempor ut sed suscipit gubergren dolore voluptua invidunt kasd dolore eos iriure magna veniam lobortis vero stet rebum est ea dolores labore at vel ea est at hendrerit feugait eirmod option et magna elitr liber et sit diam ut takimata nonumy gubergren amet est no ipsum diam et velit dolor lobortis stet dolor duis consequat dolor nibh lorem eos accusam tempor dolor voluptua et clita vulputate stet vulputate no sit nulla ut sed dolor te sea duo accusam assum dolore diam ea duo magna et invidunt invidunt et hendrerit dolores no ipsum iusto autem magna tempor labore tempor sadipscing vulputate eos eirmod delenit tempor invidunt et labore amet nonumy et vel suscipit te elitr consetetur suscipit amet consetetur nonumy at qui zzril dolor sed nam ipsum stet aliquyam luptatum eos vero ullamcorper sed dolor hendrerit nonumy ipsum aliquyam iriure rebum invidunt invidunt consetetur molestie dolore sea et ea aliquip dolor labore nonumy nonumy duo dolore sea diam tation amet rebum accusam lorem dolores ea justo kasd sed in ea est odio soluta labore ut suscipit dolore accusam consectetuer gubergren stet ipsum dolores amet consetetur dignissim labore est kasd dolor labore duis rebum duis lorem eum et in erat et et lorem enim ea duis vel dignissim vulputate aliquyam sed sit est ut ipsum ipsum et eos in vero augue labore dolore et et enim nonumy et ipsum labore ea no stet iriure et nonumy et feugiat nobis facilisis exerci ea feugiat vero luptatum aliquip autem sea dolores stet consequat qui in rebum labore illum et magna at et amet eu dolores est ea duo sanctus stet quis gubergren lorem invidunt at lorem dolore augue vero labore nobis at et ipsum ut diam et magna justo lorem sea blandit lorem dolor vero magna ut erat lorem ut takimata autem amet amet luptatum dolore no ipsum sanctus elitr feugiat erat sea dolore congue eleifend nisl dolor accusam voluptua tempor labore lorem takimata est takimata ex ut amet diam stet tempor autem sit vero justo nulla et eleifend praesent aliquyam eos dolor eum dolor est dolore feugait dolor vero dolore accusam takimata et duo et autem iusto amet vero et vero dolor dolor sed kasd eos sanctus sea dolor ut eirmod diam iusto dolor vel dolore et sanctus justo dolor amet dolore accusam lorem elitr duis nibh dolore wisi accusam no accusam in imperdiet takimata dolor sit dolor takimata dolore velit sit no eirmod elitr ut lorem voluptua suscipit sadipscing amet praesent dolor vero voluptua elitr magna consequat ut vel enim vero tation accumsan diam et est voluptua diam in magna et ipsum tempor at exerci vero et sea blandit nulla aliquip duis no dolor et autem ea qui ea elitr ea dolores feugait duo ut consetetur ut kasd vero dolor erat invidunt vero sed et duo lobortis clita duo cum lorem quis ad sanctus rebum iriure ipsum ea magna et sed at at et amet tempor diam justo no dolore eirmod accusam labore labore et veniam illum illum dolor takimata tempor at clita eu elitr et ut sit lorem et sit accusam ullamcorper invidunt kasd ipsum eum et augue nonumy facilisis assum kasd eleifend ut nulla nulla kasd takimata dolores diam vel eum rebum ut rebum est facilisis nulla aliquyam duo et lorem diam tempor et magna dolore eos eu justo nulla illum no tincidunt et ut dignissim stet sit velit dolor sit suscipit elitr erat no doming sit dolor dolore dolore ipsum dolore accusam sed justo labore nostrud option magna stet sadipscing dolor lorem justo dolores aliquip est consectetuer clita justo et sadipscing sed et tincidunt in dolor ut eros ut eleifend dolore amet invidunt at sit sadipscing labore consetetur rebum elitr dolore diam voluptua at praesent takimata mazim clita takimata sed option molestie ea dolores lorem ut est ipsum elit sed invidunt eos imperdiet dolore eu aliquip aliquyam diam ea sadipscing accusam lorem elit sed dolor et ea suscipit sanctus odio laoreet lorem illum diam sit amet minim justo magna sadipscing diam nulla consequat et est no in at sit dolores diam blandit sit dolore et no sit et elit ipsum minim duo dolor no sit nisl nonumy duo magna accusam ut kasd sit facilisi est no elitr voluptua justo sadipscing lorem et nostrud diam dolor justo dolor invidunt no elitr eum gubergren lorem gubergren feugiat justo duis ut et dolores invidunt accumsan ut in magna et soluta ipsum euismod nibh vel at ut ipsum ea sadipscing sea takimata duo et qui lorem vero sanctus sed at sed at at invidunt tation blandit vulputate est takimata at lorem et id sadipscing invidunt magna at facilisis euismod volutpat clita autem gubergren aliquam gubergren hendrerit diam clita augue et dolore gubergren nulla aliquyam at hendrerit facilisis hendrerit justo et ipsum exerci ipsum vero nonumy sadipscing illum in minim tation eum stet option erat feugiat sed rebum labore voluptua labore minim est elitr ullamcorper sadipscing minim invidunt nonumy duo vel ut dolore te hendrerit ea consectetuer luptatum suscipit sit dolores nonumy illum velit sed lobortis ipsum kasd et nulla vel sed facilisis volutpat ut nonumy ipsum magna vero aliquyam dolor takimata sadipscing odio et sanctus aliquyam ipsum takimata magna sit duis feugiat molestie elitr et dolor zzril amet sanctus et consequat duis elit accusam minim voluptua duo te tempor dolores et nulla at nonumy no dolor dolor duo invidunt dolore et lorem sanctus kasd clita justo ipsum takimata sed dolor gubergren qui duo ut consetetur sea nonummy aliquip tincidunt erat wisi dolore dolor ea feugiat justo ipsum dolor eos laoreet eu kasd zzril ex in dolore at vel ut erat est at magna eros et delenit no in amet dolor nonumy veniam sadipscing diam gubergren ut ut elitr magna sit et takimata diam sea stet dolor justo consequat clita gubergren congue kasd minim consetetur in in adipiscing clita magna sit euismod ea dolor elit et dolores et eum at accusam vel vulputate dolor soluta magna consequat ipsum eos delenit magna te et facilisis eum eirmod feugiat ipsum adipiscing feugiat sit sed diam kasd erat facilisi sit est ea at amet vel amet et diam eos kasd elitr rebum clita sit sadipscing nostrud wisi labore vero et takimata invidunt elitr aliquam justo aliquam kasd molestie aliquyam est nulla vero amet magna mazim consequat dolor aliquam ipsum duo kasd ipsum nonumy sed tempor ut esse velit nonumy aliquip hendrerit kasd vero consequat vero duis eos tempor voluptua at amet ut kasd velit ea dolores duo magna odio hendrerit clita sit aliquyam sed nonummy accusam esse magna velit labore amet consetetur sadipscing eum augue minim justo diam eirmod elitr nonummy gubergren consetetur sed sit vel in accusam eum ipsum dolores sanctus rebum lorem diam eum aliquyam eirmod no sanctus ea elitr illum elitr at nonumy duo lorem velit invidunt ipsum et clita nibh et dolor odio erat vero sea magna rebum odio sed sit sadipscing elit est tation dolor sit invidunt et adipiscing vero vel voluptua dolor ipsum eum ut vero eu tation lorem sadipscing minim justo diam iusto voluptua sadipscing no duo eros dolor et tempor at magna vero augue ullamcorper aliquam ut clita at aliquyam dolores eu elitr ipsum ipsum vero elitr dolore ea et elitr at ex kasd esse sit diam feugait diam et accusam tation rebum nonumy nonummy eirmod justo et dolores gubergren et euismod vel eu invidunt lorem enim sanctus accumsan dolore elitr nonumy dignissim et amet vel option amet sed vero eum gubergren ut dolor gubergren et justo ipsum et dolore feugait dignissim tempor possim gubergren eos facilisi duo voluptua iriure est lorem labore consetetur elitr praesent sed dolor amet elitr nisl dolor euismod consetetur eos kasd no consetetur laoreet gubergren laoreet kasd magna nibh tation accusam ea magna clita eum sed diam sed dolores molestie voluptua at sed amet quis ut dolore sea et quod sanctus sed veniam elitr lorem ut rebum rebum ea sed consetetur nonumy nulla est consequat rebum kasd erat eirmod ea vero eum sit vero est lobortis duo at stet te voluptua ipsum dolore et nobis ipsum elitr eos stet elitr feugiat dolor voluptua voluptua no lorem ipsum tempor quis doming diam sit feugait duo qui nonumy augue tempor dolore stet odio consectetuer sit hendrerit rebum no sed eum ipsum sanctus eos tempor dolore sed dolor vulputate volutpat invidunt minim dolor suscipit dolore lorem esse lobortis vel te no dolore vero ut est ullamcorper dolore dolore sit dolor suscipit nonummy duo stet ut luptatum elitr esse ipsum ut ea adipiscing sed hendrerit diam diam amet sea tation molestie et labore et zzril dolore clita zzril dolore blandit zzril consequat assum sanctus velit ea tincidunt erat accumsan magna wisi in duis aliquip no elitr augue ipsum autem facilisis elit et at rebum tempor ut dolore eros ex esse clita invidunt accusam accusam stet volutpat ea stet sea feugiat ipsum no no voluptua elitr clita lorem aliquip facilisis lobortis et ut et sit justo in suscipit tincidunt erat lobortis nostrud stet exerci nonumy assum aliquyam justo ut aliquyam magna voluptua ut sit et iusto accumsan stet ipsum et ea aliquyam et dolore sit ipsum consequat justo eros dolor diam stet nulla dolores ipsum et diam et accusam takimata feugiat elitr duis labore est nonummy magna nulla eum dolor stet feugiat at nisl feugiat ut hendrerit ad minim et dolores diam consetetur dolore volutpat exerci tempor amet sadipscing eirmod consectetuer no elitr no no ut nisl eu voluptua duo accusam diam sanctus ipsum facilisi clita tempor sanctus sit ipsum sea sed amet sit velit lorem sed accusam vel rebum sed magna eirmod diam sea lorem tincidunt ut amet no accusam voluptua dolor ea duo nostrud est vero duo eos at eos magna erat magna elitr elitr sed justo est diam diam magna sit takimata hendrerit consequat aliquyam amet diam vero ut kasd at tempor magna amet lorem commodo diam duis accumsan dolor vero eirmod sit illum nostrud dolor dolores clita eirmod zzril diam ipsum takimata eum id no sed elitr eros autem rebum vel velit stet molestie dignissim ea sed eirmod nulla elitr vero dolores sadipscing tempor no kasd dignissim amet dolore nonummy at eos nonumy et gubergren justo aliquam vero amet esse invidunt nonumy gubergren nonumy diam et feugait dolore eirmod magna te eos et velit adipiscing ipsum rebum diam velit lorem no minim sadipscing et takimata exerci ut amet sea consequat ea sit sadipscing ut takimata molestie sea lorem sed at dolores iusto sanctus consectetuer et nobis et ex est vero et elitr eirmod nulla delenit eirmod dolor tempor eleifend molestie dolore sed est vero amet et aliquyam diam magna ut sit sea dolores te ea tempor sadipscing elitr est est stet ut sit lorem diam justo clita rebum nonumy tempor eirmod et dolore voluptua consetetur sanctus dolore amet sit sed odio sadipscing erat accusam erat dolor at sit zzril gubergren amet lorem dolore kasd et dolor eirmod sit aliquyam autem clita et ut duis sit voluptua velit et volutpat sea tempor sadipscing sed stet justo accusam ut voluptua at augue lorem vel vel aliquyam elitr consequat tempor eros est sit hendrerit magna lorem vero stet et lobortis est vero dolor nulla illum erat hendrerit eos invidunt delenit duo vero sit elit ut eros ut magna clita ipsum vero lorem magna nonumy rebum magna accusam molestie est nonumy amet aliquam dolore illum eu sit eos diam enim accusam diam eos ullamcorper illum dolor labore ipsum illum justo nonumy sanctus sadipscing sit velit labore ut voluptua rebum id et nulla no dolor ea stet duo erat hendrerit dolor sanctus esse voluptua praesent vero ad sit autem eum liber erat ad molestie ea illum labore mazim ipsum sit dolor gubergren at gubergren augue kasd stet minim dolor elitr accusam labore eirmod et amet stet illum erat nostrud voluptua et et tempor rebum facilisis minim nobis ipsum consetetur praesent magna diam ea eirmod elitr et magna sed stet et kasd dolor duis lorem sed odio sed gubergren nonumy dolor lorem est et voluptua eos illum et kasd commodo ipsum zzril suscipit iusto tempor euismod lorem justo accumsan sea elitr eleifend sanctus dolores diam et at lorem magna takimata est dolore et aliquip sed praesent tempor sea et no dolor ipsum magna diam rebum dignissim accusam consetetur et clita kasd praesent invidunt at magna qui consetetur tempor elitr quis lorem diam laoreet laoreet clita sadipscing ea takimata nonummy lorem invidunt elitr dolor lorem dolor nonumy magna sed dolore lorem ad ea stet et amet eirmod justo no magna accusam eos nonumy ea magna quis invidunt vero dolor et vulputate invidunt magna nihil in dolor justo tempor tempor dolore elitr possim praesent dignissim lobortis dolor et ea ullamcorper eros suscipit justo voluptua ut vero illum sit dolore lorem esse clita stet et clita nibh aliquyam eirmod diam eos quod doming nobis dolor illum sed sit takimata justo facilisi labore nonummy accusam nonumy nonumy at volutpat duo quod eos gubergren autem suscipit ut et elit aliquyam tation velit diam vero elit minim elitr stet dolore sea duo vero sea et vero sed lorem elit erat ullamcorper takimata nostrud ut gubergren stet velit aliquyam stet amet invidunt sit dolor autem ipsum rebum velit sed ea dolor kasd erat et takimata duo dolores sadipscing kasd praesent ex accusam ut accusam est at eos amet labore magna zzril gubergren dolor sanctus duo sit kasd dolores diam stet amet eirmod eirmod eirmod lorem dolores rebum eleifend aliquyam stet elitr justo dolor elit erat eum lorem vero eu et elitr duo ut dolor volutpat et consetetur dolores ut sed eos sit et ipsum voluptua feugiat eirmod eu eos accusam facilisis in tincidunt diam vulputate kasd vulputate sanctus labore quod aliquyam tempor ipsum diam accusam diam est dolore diam placerat vero consequat et diam rebum invidunt molestie eirmod takimata commodo est volutpat dolor voluptua erat aliquam sadipscing et sed iusto eirmod aliquyam labore zzril eos invidunt dolores clita adipiscing erat amet invidunt kasd amet autem et amet ipsum blandit molestie sea amet feugiat cum eirmod dolore ut eros voluptua stet labore illum amet enim ipsum blandit duis te erat diam takimata in accumsan aliquyam lorem aliquam sanctus ut erat sit justo ad tempor takimata congue et nulla lorem veniam amet dolor diam erat consetetur consetetur te hendrerit tincidunt sit magna assum velit qui dolor vero sit et amet amet sit elitr lorem congue erat duo hendrerit ipsum stet et feugiat consetetur ipsum lorem erat at dolores est ea lobortis nulla hendrerit duis diam ipsum nulla rebum consetetur facilisis ea ipsum ipsum et ipsum vero nulla ipsum sea iriure elitr lorem et hendrerit nulla labore invidunt invidunt dolore lorem gubergren te sit erat ea eos gubergren nulla gubergren eleifend consequat aliquam id ut eos et sit lorem amet takimata accusam est vulputate nulla nonumy option dolor labore tempor nonumy clita ipsum velit nonumy dolore iusto ut amet diam at stet diam tincidunt dolore odio in erat iriure et consequat adipiscing ex eos amet aliquam kasd invidunt zzril takimata ea voluptua lobortis elitr lorem in praesent ipsum est nonumy aliquam tempor dolor sed at sit consetetur at aliquyam vero illum accusam magna est clita diam facilisis aliquyam sea dolor blandit dolor et elit dolore lorem diam ut takimata sed nonumy possim vero sanctus dolor ea ipsum eos praesent est et labore takimata sed sanctus at et praesent placerat magna no eirmod feugait commodo esse dolore dolores dolores molestie elitr et no aliquyam et consequat aliquyam ipsum rebum no et stet takimata nulla lorem ipsum esse consetetur rebum at dolore takimata ullamcorper duis tempor dolore illum aliquyam sed dolores ea consequat ipsum nonumy at dolore et erat labore est sadipscing illum sed in consequat sadipscing sit sea diam tempor lorem esse esse voluptua aliquip duo elit enim clita no dolor et in et sadipscing sanctus illum duo nonumy dolore dolore ut kasd at dolore magna veniam clita elitr consequat nibh voluptua accumsan lorem autem kasd dolore kasd ullamcorper takimata labore amet dolores id ipsum sadipscing lorem magna consequat lorem no magna lorem qui et volutpat vero nihil sed magna dolor invidunt aliquam nihil nulla voluptua exerci iusto ad consequat iriure elitr nibh dolore tempor enim lorem esse et nonumy aliquyam autem magna kasd vero gubergren takimata sanctus dolore magna dolore ipsum labore euismod diam erat rebum nonumy erat sed nisl duo labore lorem lorem consectetuer diam accusam amet nibh nostrud sea facilisis eirmod sit est accumsan sit eos liber consequat ut in dolor dolores consequat no est consetetur takimata aliquip illum ut consetetur lorem duis amet magna lobortis magna ipsum duo dolore et vulputate takimata ipsum quis vero dolore facilisi sit dolore sadipscing gubergren sit iriure sed dolore et gubergren ut amet consetetur voluptua erat velit et et eos diam diam iusto volutpat invidunt erat sed dolores lorem euismod sea nonummy ea elit et zzril soluta sit ea lorem dolor amet lorem et ipsum wisi facilisi ea congue no blandit at nibh sit elitr ipsum rebum amet sea sed eos dolor illum justo volutpat quis et rebum gubergren amet vel sadipscing nulla congue et possim erat diam justo soluta diam magna diam lobortis voluptua velit dolor rebum assum invidunt ipsum et nonumy eros dolore at labore at lorem wisi stet elitr liber tempor rebum nostrud te magna congue accusam ut takimata rebum vero rebum at at diam dolor dolore nostrud sanctus amet vero no at eirmod est sit magna aliquyam lorem sed aliquam lorem ut at sit nulla velit at et dolores duo amet facilisis magna rebum vel sanctus et vero vel duo takimata sea ut eum feugiat exerci volutpat nam rebum volutpat dolore dolore sit amet volutpat erat lorem vero ipsum kasd sanctus sea ipsum consetetur vero ea sit eos voluptua consetetur ea et tincidunt iusto minim sit vulputate aliquyam in ut ea diam sanctus dolores ut duo amet consetetur rebum erat sanctus quis est dolor vel dolore ipsum justo et no et clita magna justo ipsum amet nibh clita sit dolore ullamcorper et dolore ut sit dolor amet eirmod elitr sanctus accusam takimata facilisis takimata ullamcorper aliquam erat esse at magna sadipscing ea sed kasd autem ipsum vero invidunt consequat invidunt sea dolore veniam iusto sea velit in justo facilisi kasd elit ea magna consequat gubergren ea duo takimata dolore minim et lorem invidunt tempor eum autem augue diam facilisi sadipscing at ex eos sanctus erat eirmod rebum takimata ipsum accusam amet no dolore ea illum facilisis labore et duo nonummy ut amet eirmod duo rebum tation sit vero elitr dolore velit accusam magna autem et aliquyam et feugait molestie et justo kasd sea clita consequat clita et et dolore duo kasd eos eirmod diam sed sed nostrud ut dolor diam elitr diam ea vel kasd mazim dolore sit et ipsum lorem no ipsum sit amet ullamcorper gubergren autem dolore sit amet sea eirmod vero et consequat lorem lobortis sed lorem invidunt lorem invidunt ea stet erat amet et sit sed invidunt accusam magna feugiat rebum dolor ipsum elitr nobis zzril lorem dolores et possim vulputate nisl dolor vero delenit duis sadipscing elitr gubergren erat diam amet eos tation commodo ea quis amet lorem lorem adipiscing feugiat wisi euismod kasd et magna takimata ipsum at dolor ut commodo nonummy accumsan gubergren nonummy vulputate consetetur ea justo gubergren erat iriure sed rebum facilisis eum nulla vel dolor amet dolor vel lorem stet labore amet duis autem dolor velit justo labore veniam justo et quis autem takimata sanctus vero quod labore ut laoreet ipsum vero magna sed vero vel dolores dolore eos consectetuer et facilisis sed imperdiet diam dolore sed enim rebum dolor dignissim stet labore voluptua exerci tempor ipsum dolores erat sed et duo adipiscing rebum et gubergren ea aliquyam accusam commodo justo tempor consetetur voluptua volutpat lorem wisi tempor feugiat diam sit at et praesent et ut diam et accusam eirmod molestie eleifend eos amet sadipscing autem erat nostrud elit amet duo ipsum nihil elit labore dolore dolor at ut et soluta kasd invidunt eirmod dolore amet dolor et sadipscing aliquyam et sadipscing no et rebum ipsum rebum lorem sit eos nostrud takimata dolore ex eos lorem dolor takimata ut eirmod gubergren praesent volutpat sit cum sed enim labore rebum sadipscing commodo sit justo eleifend erat voluptua labore delenit volutpat diam duo et nonumy aliquip tempor doming et tempor et et lorem et ea sanctus sed stet id no ipsum eos et nulla ut sea nonumy luptatum nam at accusam ipsum doming dolore in et ipsum consetetur euismod dolores takimata sea dignissim gubergren dolor magna nonumy sadipscing delenit stet duo no ea ad et consetetur tation nonumy tempor ex clita dolore nonumy sit molestie justo ullamcorper lorem magna nibh erat ipsum vero diam dolor diam velit clita consequat accusam erat duis ipsum sadipscing diam stet luptatum et nobis ea amet aliquyam hendrerit sed lorem dolor justo et vel vel quod tempor clita ut in et ea accusam veniam gubergren sea option ullamcorper dolores magna dolore nulla sit in et eirmod eos ipsum sit sit dolor aliquyam lorem et est et facilisis vel ea iriure rebum amet duo ut sed adipiscing dolor possim sanctus facilisi delenit possim et magna accusam et et dolore eos amet et et dolor justo ea et amet dolores liber takimata aliquyam stet iriure diam dolores sit et dolore dolor diam dolore labore sit voluptua et dolor esse justo et soluta et eum duis lorem euismod ipsum tempor eu dolores est illum sanctus et duo feugiat consequat consetetur invidunt magna nonumy eum eros ea et wisi invidunt et et ipsum et et magna amet lorem sed dolores et sanctus rebum duo stet sea stet magna nulla duo amet eum volutpat aliquyam no dolor eirmod erat accusam vero amet dolore et accusam clita consectetuer ipsum vel nonumy eleifend sed aliquyam diam clita magna eirmod sanctus sit et tempor magna dolores magna justo ea sea dolor gubergren sea vel sadipscing et dolore dolores duo diam molestie mazim euismod dolor tincidunt at at diam et et magna sanctus vero accusam dolor tation molestie et sadipscing ea sanctus vel accusam et autem consetetur amet dolor nisl takimata autem consetetur consetetur vero dolores rebum accusam aliquyam dolore ipsum no kasd dolor lorem nisl wisi invidunt tempor consectetuer sit ea eirmod accumsan ipsum labore dolor dolore est commodo magna et ipsum diam ea et voluptua clita wisi ut gubergren est facilisi magna invidunt et consetetur tation lorem consectetuer sit vero no sanctus nonumy et molestie dignissim elitr sed eirmod sea molestie option duo tempor takimata facer eos consetetur illum lorem invidunt eu ipsum sit dolore stet duo dolor nonumy ad magna eos magna takimata at vel amet sadipscing iusto et stet kasd sanctus sanctus nonumy sadipscing dolor dignissim praesent eos voluptua imperdiet sit rebum accusam sea et sadipscing et erat ipsum nostrud duo et dolore exerci dolor kasd aliquyam sed lorem nonumy sanctus takimata dolores vero consetetur ipsum takimata duo erat delenit aliquyam adipiscing diam ipsum iusto labore ea ipsum sed sanctus vel ut accusam in sadipscing ipsum quod at vero elitr sea diam eu accusam sed consetetur magna dolor et eos tempor kasd et et dolor dolor aliquip sed lorem ut et illum justo lorem dolor accusam lorem elitr duis sea lorem sanctus dolor tempor vero et dolores et sed ad tempor et dolore dolore justo invidunt in ipsum kasd sed ut ea vero accumsan ad
                </div>


            </UpMenuOH>
        ), { info : 'Utilisation du composant en lui passant les données à afficher'}
);