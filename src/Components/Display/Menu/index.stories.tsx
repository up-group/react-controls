import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpMenu from './UpMenu'
import UpMenuBeta from './UpMenuBeta'

storiesOf('UpMenu', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpMenu   onMenuClick={action("Menu clicked")}
                topMenuItems={[
                    { title: "Recherche", icon: "up up-dossier", action: "https://www.google.fr" },
                    { title: "Alertes", icon: "up up-dossier", action: () => { alert(5); } }
                ]}
                menuItems={
                    [
                        {
                            title: "test", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [
                                {
                                    title: "aaaaaa", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [

                                        { title: "bbbbb", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ccccc", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ddddd", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                                    ]
                                },
                                { title: "ffffff sc", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                { title: "ddddd", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                            ]
                        },
                        { title: "tehtztst", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                        { title: "t", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                        { title: "teshtztht", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                    ]}></UpMenu>
    </UpThemeProvider>
    ))
    .addWithInfo('Simple usage 2', 'Utilisation du composant en lui passant les données à afficher',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpMenuBeta onMenuClick={action("Menu clicked")}
                topMenuItems={[
                    { title: "Recherche", icon: "up up-dossier", action: "https://www.google.fr" },
                    { title: "Alertes", icon: "up up-dossier", action: () => { alert(5); } }
                ]}
                menuItems={
                    [
                        {
                            title: "test", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [
                                {
                                    title: "aaaaaa", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [

                                        { title: "bbbbb", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ccccc", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ddddd", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                                    ]
                                },
                                { title: "ffffff sc", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                { title: "ddddd", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                            ]
                        },
                        { title: "tehtztst", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                        { title: "t", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                        { title: "teshtztht", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                    ]}></UpMenuBeta>
        </UpThemeProvider>
    ))
    ;