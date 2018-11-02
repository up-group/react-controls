import * as React from 'react'
import { storiesOf } from '@storybook/react'

import FinanceurInput, { PosIconEnum, InputTypeEnum } from "./TextInput"
import Button from './Button';
import TextArea from './TextArea';


function InputValidateFalse(texte: string): {ok:boolean} {
    return {ok:false};
}
function InputValidateTrue(texte: string): {ok:boolean} {
    return {ok:true};
}
function InputpasswordChange(texte: string): void {
    alert("Nouvelle valeur : " + texte);
}
function InputpasswordValidate(texte: string): {ok:boolean} {
    var regexResult = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/i.exec(texte);
    return {ok: regexResult !== null};
}
function onButtonClick() {
    alert("click !");
}

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/FinanceurInput', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('FinanceurInput'));

stories.add('Standard',  
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Value="Valeur" />
                    &emsp;
                    <FinanceurInput />
                </p>
                <p>
                    <FinanceurInput Placeholder="hover" />
                    &emsp;
                    <FinanceurInput Value="hover" ReadOnly={false} />
                </p>
                <p>
                    <FinanceurInput Placeholder="focus" />
                    &emsp;
                    <FinanceurInput Value="focus" />
                </p>
                <p>
                    <FinanceurInput Placeholder="success" Validate={InputValidateTrue} />
                    &emsp;
                    <FinanceurInput Value="success" Validate={InputValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Placeholder="error" Validate={InputValidateFalse} />
                    &emsp;
                    <FinanceurInput Value="error" Validate={InputValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Placeholder="password" Type={InputTypeEnum.Password} onChange={InputpasswordChange} Validate={InputpasswordValidate} />
                    &emsp;
                    <FinanceurInput Value="password" Type={InputTypeEnum.Password} onChange={InputpasswordChange} Validate={InputpasswordValidate} />
                </p>
                <p>
                    <FinanceurInput Placeholder="ReadOnly" ReadOnly={true} />
                    &emsp;
                    <FinanceurInput Value="ReadOnly" ReadOnly={true} />
                </p>
            </div>
        )
    )
    .add('With Bot label',
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Placeholder="info" InformationText="balabalabalabalabalabalabalabaablabablalblab" />
                    &emsp;
                    <FinanceurInput Value="info"InformationText="balabalabalabalabalabalabalabaablabablalblab" />
                </p>
                <p>
                    <FinanceurInput Placeholder="success" Validate={InputValidateTrue} SuccessText="Victoire pour le peuple !" />
                    &emsp;
                    <FinanceurInput Value="success" Validate={InputValidateTrue} SuccessText="Victoire pour le peuple !" />
                </p>
                <p>
                    <FinanceurInput Placeholder="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." />
                    &emsp;
                    <FinanceurInput Value="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate} 
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." />
                </p>
            </div>
        )
    )
    .add('With Top Label', 
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="Valeur" />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="hover" />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="hover" />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="focus" />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="focus" />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="success" Validate={InputValidateTrue} />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="success" Validate={InputValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="error" Validate={InputValidateFalse} />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="error" Validate={InputValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate} />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate} />
                </p>
                <p>
                    <FinanceurInput Label="Alors ici c'est surtout pour voir ce qu'il ce passe si on dépasse la ligne." Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Label="Alors ici c'est surtout pour voir ce qu'il ce passe si on dépasse la ligne." Value="Valeur" />
                    &emsp;
                    <FinanceurInput Label="Alors ici c'est surtout pour voir ce qu'il ce passe si on dépasse la ligne." />
                </p>
                <p>
                    <FinanceurInput Width={"400px"} Label="Alors ici c'est surtout pour voir ce qu'il ce passe si on dépasse la ligne, mais en plus long." Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Width={"400px"} Label="Alors ici c'est surtout pour voir ce qu'il ce passe si on dépasse la ligne, mais en plus long." Value="Valeur" />
                    &emsp;
                    <FinanceurInput Width={"400px"} Label="Alors ici c'est surtout pour voir ce qu'il ce passe si on dépasse la ligne, mais en plus long." />
                </p>
            </div>
        )
    )
    .add('With Icon (left)', 
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Label="Pour repair" Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Label="Pour repair" Value="Valeur" />
                    &emsp;
                    <FinanceurInput Label="Pour repair" />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="Valeur" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} Placeholder="hover" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="hover" />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="focus" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} Value="focus" />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="success" Validate={InputValidateTrue} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} Value="success" Validate={InputValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} Placeholder="error" Validate={InputValidateFalse} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="error" Validate={InputValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} Placeholder="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate} />
                </p>
            </div>
        )
    )
    .add('With Icon (right)', 
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Label="Pour repair" Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Label="Pour repair" Value="Valeur" />
                    &emsp;
                    <FinanceurInput Label="Pour repair" />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="Valeur" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="hover" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="hover" />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="focus" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="focus" />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="success" Validate={InputValidateTrue} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="success" Validate={InputValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="error" Validate={InputValidateFalse} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="error" Validate={InputValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate} />
                </p>
            </div>
        )
    )
    .add('With Label and Icon',
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="Valeur" />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite}
                        InformationText="Ceci est une infos. Très utile. Oui. Même qu'elle est super longue." Label={"Bien le bienvenue à toutes et tous dans cette foire."} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche}
                        InformationText="Ceci est une infos. Très utile. Oui. Même qu'elle est super longue." Label={"Bien le bienvenue à toutes et tous dans cette foire."} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="hover"
                        InformationText="Ceci est une infos. Très utile. Oui." />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="hover"
                        InformationText="Ceci est une infos. Très utile. Oui." />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="focus"
                        InformationText="Ceci est une infos. Très utile. Oui." />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="focus"
                        InformationText="Ceci est une infos. Très utile. Oui." />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="success" Validate={InputValidateTrue}
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"cliquez pour victorier"} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="success" Validate={InputValidateTrue}
                        SuccessText="Ce mot de passe est robuste. Comm... non." />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="error" Validate={InputValidateFalse}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="error" Validate={InputValidateFalse}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        Label={"cliquez pour perdoyer"} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="disable" Disable={true}
                        InformationText="Ceci est une infos. Très utile. Oui." Label={"Au revoir"} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="disable" Disable={true}
                        InformationText="Ceci est une infos. Très utile. Oui." Label={"Au revoir"} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"mdp bonjour"} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"mdp bonjour"} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"mdp au revoir"} Disable={true} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="password" Type={InputTypeEnum.Password} Validate={InputpasswordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"mdp au revoir"} Disable={true} />
                </p>
            </div>
        )
    )
    .add('Require',  
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Value="Valeur" />
                    &emsp;
                    <FinanceurInput />
                </p>
                <p>
                    <FinanceurInput Require={true} Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Require={true} Value="Valeur" />
                    &emsp;
                    <FinanceurInput Require={true} />
                </p>
                <p>
                    <FinanceurInput Require={true} Label="Bonjour" Placeholder="hover" />
                    &emsp;
                    <FinanceurInput Require={true} Label="Bonjour" Value="hover" />
                </p>
                <p>
                    <FinanceurInput Require={true} Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="focus" />
                    &emsp;
                    <FinanceurInput Require={true} Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="focus" />
                </p>
                <p>
                    <FinanceurInput Require={true} Placeholder="success" Validate={InputValidateTrue}
                        SuccessText="Victoire pour le peuple." />
                    &emsp;
                    <FinanceurInput Require={true} Value="success" Validate={InputValidateTrue} Label="ah ?"
                        SuccessText="Victoire pour le peuple." />
                </p>
                <p>
                    <FinanceurInput Placeholder="error" Validate={InputValidateFalse}
                        ErrorText="Réessayer encore." />
                    &emsp;
                    <FinanceurInput Value="error" Validate={InputValidateFalse}
                        ErrorText="Réessayer encore." />
                </p>
                <p>
                    <FinanceurInput Require={true} Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Require={true} Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Require={true} Placeholder="password" Type={InputTypeEnum.Password} onChange={InputpasswordChange} Validate={InputpasswordValidate} />
                    &emsp;
                    <FinanceurInput Require={true} Value="password" Type={InputTypeEnum.Password} onChange={InputpasswordChange} Validate={InputpasswordValidate} />
                </p>
            </div>
        )
    )
    .add('ComboBox',
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="empty" />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="invalid idx" ComboItems={["1", "2", "3", "4"]} ComboItemSelectIdx={-4} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="invalid idx" ComboItems={["1", "2", "3", "4"]} ComboItemSelectIdx={-1} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="invalid idx" ComboItems={["1", "2", "3", "4"]} ComboItemSelectIdx={4} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="placeholder" ComboItems={["1", "2", "3", "4"]} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="placeholder" ComboItemSelectIdx={0} ComboItems={["1", "2", "3", "4"]} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="focus" ComboItems={["bonjour", "bonjour", "bonjour", "bonjour"]} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="focus" ComboItemSelectIdx={1} ComboItems={["bonjour", "bonjour", "bonjour", "bonjour"]} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="success" ComboItems={["1", "2", "3", "4"]} Validate={InputValidateTrue} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="success" ComboItemSelectIdx={2} ComboItems={["1", "2", "3", "4"]} Validate={InputValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="error" ComboItems={["1", "2", "3", "4"]} Validate={InputValidateTrue} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="error" ComboItemSelectIdx={3} ComboItems={["1", "2", "3", "4"]} Validate={InputValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="disable" ComboItems={["1", "2", "3", "4"]} Disable={true} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="disable" ComboItemSelectIdx={1} ComboItems={["1", "2", "3", "4"]} Disable={true} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="icons" ComboItems={["1", "2", "3", "4"]} Icon={<span>♫</span>} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="icons" ComboItemSelectIdx={1} ComboItems={["1", "2", "3", "4"]} Icon={<span>♫</span>} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="taille" ComboItems={["parce qu'il y a besoin de place", "2", "3", "4"]} Width={"300px"} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="taille" ComboItemSelectIdx={1} ComboItems={["parce qu'il y a besoin de place", "2", "3", "4"]}
                            Width={"300px"} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="label" ComboItems={["parce qu'il y a besoin de place", "2", "3", "4"]} Label="Bonjour" />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="label" ComboItemSelectIdx={1} ComboItems={["parce qu'il y a besoin de place", "2", "3", "4"]} 
                            Label="Bonjour" />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="success" ComboItems={["1", "2", "3", "4"]} Validate={InputValidateTrue} 
                            SuccessText="victoire" InformationText="click !" />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="success" Icon={<span>♫</span>} ComboItemSelectIdx={2} ComboItems={["1", "2", "3", "4"]} 
                            Validate={InputValidateTrue} SuccessText="victoire" InformationText="click !" />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="error" Icon={<span>♫</span>} ComboItems={["1", "2", "3", "4"]} Validate={InputValidateTrue} 
                            ErrorText="defaite" InformationText="click !" />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.ComboBox} Placeholder="error" ComboItemSelectIdx={3} ComboItems={["1", "2", "3", "4"]} Validate={InputValidateTrue} 
                            ErrorText="defaite" InformationText="click !" />
                </p>
            </div>
        )
    )
    .add('Button',
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <Button Text="" />
                    &emsp;
                    <Button Text="" onClick={onButtonClick} />
                    &emsp;
                    <Button Text="" Secondary={true} />
                    &emsp;
                    <Button Text="" Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="bonjur" />
                    &emsp;
                    <Button Text="bonjur" onClick={onButtonClick} />
                    &emsp;
                    <Button Text="bonjur" Secondary={true} />
                    &emsp;
                    <Button Text="bonjur" Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="bonjur" Disable={true} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} onClick={onButtonClick} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} Secondary={true} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="bonjur" TwoLines={true} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} onClick={onButtonClick} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} Secondary={true} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="bonjur" Disable={true} TwoLines={true} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} TwoLines={true} onClick={onButtonClick} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} TwoLines={true} Secondary={true} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} TwoLines={true} Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="" RoundAngle={true} />
                    &emsp;
                    <Button Text="" RoundAngle={true} onClick={onButtonClick} />
                    &emsp;
                    <Button Text="" RoundAngle={true} Secondary={true} />
                    &emsp;
                    <Button Text="" RoundAngle={true} Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="bonjur" RoundAngle={true} />
                    &emsp;
                    <Button Text="bonjur" RoundAngle={true} onClick={onButtonClick} />
                    &emsp;
                    <Button Text="bonjur" RoundAngle={true} Secondary={true} />
                    &emsp;
                    <Button Text="bonjur" RoundAngle={true} Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="bonjur" Disable={true} RoundAngle={true} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} RoundAngle={true} onClick={onButtonClick} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} RoundAngle={true} Secondary={true} />
                    &emsp;
                    <Button Text="bonjur" Disable={true} RoundAngle={true} Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="bonjur" TwoLines={true} RoundAngle={true} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} RoundAngle={true} onClick={onButtonClick} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} RoundAngle={true} Secondary={true} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} RoundAngle={true} Secondary={true} onClick={onButtonClick} />
                </p>
                <p>
                    <Button Text="bonjur" TwoLines={true} Disable={true} RoundAngle={true} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} Disable={true} RoundAngle={true} onClick={onButtonClick} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} Disable={true} RoundAngle={true} Secondary={true} />
                    &emsp;
                    <Button Text="bonjur" TwoLines={true} Disable={true} RoundAngle={true} Secondary={true} onClick={onButtonClick} />
                </p>
            </div>
        )
    )
    .add('Number',
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Type={InputTypeEnum.Number} Placeholder="placeholder" />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} Value="Valeur" />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.Number} Placeholder="hover" />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} Value="5" ReadOnly={false} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.Number} Placeholder="focus" />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} Value="911" />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.Number} Placeholder="success" Validate={InputValidateTrue} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} Value="76" ReadOnly={false} Validate={InputValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.Number} Placeholder="error" Validate={InputValidateFalse} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} Value="654" Validate={InputValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.Number} Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} Value="6878" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.Number} Placeholder="password" onChange={InputpasswordChange} Validate={InputpasswordValidate} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} Value="38438" onChange={InputpasswordChange} Validate={InputpasswordValidate} />
                </p>
                <p>
                    <FinanceurInput Type={InputTypeEnum.Number} Placeholder="ReadOnly" ReadOnly={true} />
                    &emsp;
                    <FinanceurInput Type={InputTypeEnum.Number} Value="3846" ReadOnly={true} />
                </p>
            </div>
        )
    )
    .add('Text Area',
        () => (
            <div style={{padding: "16px"}} >
                <TextArea InformationText="bdzlkbqdlkbdlzqbfl bqzlkfbqzlibfilqzbfliqzb fliqbzlifbqlizbf liqbzflibqzlifblqizbfilqbzlifbqlib fzlqbzlifb qlizbflqbzflib" />
                <TextArea Placeholder="Place older than me !" />
                <TextArea Placeholder="Place older than me !" 
                        Value="blablablablablablablablablablablablablablablablabalblablablablbalbalbalblablablablablablablablablbalbalbab" />
                <TextArea Placeholder="Place older than me !" Require={true} />
                <TextArea Placeholder="Place older than me !" Disable={true} />
                <TextArea Placeholder="Place older than me !" ReadOnly={true} />
                <TextArea Placeholder="Place older than me !" ErrorText="erreur hahhahhahahha" Validate={InputValidateFalse} />
                <TextArea Placeholder="Place older than me !" SuccessText="reusii hihihihihih" Validate={InputValidateTrue} />
            </div>
        )
    )