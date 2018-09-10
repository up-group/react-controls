import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';


import UpButton from './'

storiesOf('UpButton', module)
    .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
        () => (
            <UpButton actionType="add" onClick={(event) => { console.log(event) }} width={"auto"}>
                Add
      </UpButton>
        )).addWithInfo('Icon', 'Utilisation du composant en lui passant les données à afficher',
            () => (
                <UpButton actionType="add" width={"icon"} onClick={(event) => { console.log(event) }}>
                    Add
     </UpButton>
            )).addWithInfo('Icon à droite', 'Utilisation du composant en lui passant les données à afficher',
                () => (
                    <UpButton actionType="add" iconPosition={"right"} width={"normal"} onClick={(event) => { console.log(event) }}>
                        Add
    </UpButton>
                )).addWithInfo('DropDown', 'Utilisation du composant en mode DropDown',
                    () => (
                        <UpButton onClick={(event) => { action("Main") }} dropDown={'down'}
                            extraActions={[
                                {
                                    libelle: "Option 1",
                                    onClick: action("Option 1")
                                },
                                {
                                    libelle: "Option 2",
                                    onClick: action("Option 2")
                                },
                                {
                                    size: 2,
                                },
                                {
                                    libelle: "Option 3",
                                    onClick: action("Option 3")
                                }
                            ]}>
                        </UpButton>
                    )).addWithInfo('DropDown avex text', 'Utilisation du composant en mode DropDown',
                        () => (
                            <UpButton onClick={(event) => { action("Main") }} dropDown={'down'}
                                extraActions={[
                                    {
                                        libelle: "Option 1",
                                        onClick: action("Option 1")
                                    },
                                    {
                                        libelle: "Option 2",
                                        onClick: action("Option 2")
                                    },
                                    {
                                        size: 2,
                                    },
                                    {
                                        libelle: "Option 3",
                                        onClick: action("Option 3")
                                    }
                                ]}>Options
   </UpButton>
                        )).addWithInfo('DropDown avex text et icon à gauche', 'Utilisation du composant en mode DropDown',
                            () => (
                                <UpButton iconPosition={"left"} onClick={(event) => { action("Main") }} dropDown={'down'}
                                    extraActions={[
                                        {
                                            libelle: "Option 1",
                                            onClick: action("Option 1")
                                        },
                                        {
                                            libelle: "Option 2",
                                            onClick: action("Option 2")
                                        },
                                        {
                                            size: 2,
                                        },
                                        {
                                            libelle: "Option 3",
                                            onClick: action("Option 3")
                                        }
                                    ]}>Options
   </UpButton>
                            )).addWithInfo('Avec indication d\'opération', 'Utilisation du composant avec activation de l\'indication dd\'un processus en cours',
                                () => (
                                    <UpButton onClick={null} width={"normal"} isProcessing={true}>Save</UpButton>
                                )).addWithInfo('Arrondi', 'Utilisation du composant avec activation de l\'indication dd\'un processus en cours',
                                    () => (
                                        <UpButton rounded={true} width="icon" onClick={this.refresh} actionType="refresh"></UpButton>
                                    ));


