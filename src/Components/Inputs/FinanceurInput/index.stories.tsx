import * as React from 'react'
import { storiesOf } from '@storybook/react'

import FinanceurInput, { PosIconEnum } from "./TextInput"


function ValidateFalse(texte: string): boolean {
    return false;
}
function ValidateTrue(texte: string): boolean {
    return true;
}
function passwordChange(texte: string): void {
    alert("Nouvelle valeur : " + texte);
}
function passwordValidate(texte: string): boolean {
    var regexResult = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/i.exec(texte);
    return regexResult !== null
}


storiesOf('FinanceurInput', module)
    .addWithInfo('Standard', '',  
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
                    <FinanceurInput Value="hover" />
                </p>
                <p>
                    <FinanceurInput Placeholder="focus" />
                    &emsp;
                    <FinanceurInput Value="focus" />
                </p>
                <p>
                    <FinanceurInput Placeholder="success" Validate={ValidateTrue} />
                    &emsp;
                    <FinanceurInput Value="success" Validate={ValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Placeholder="error" Validate={ValidateFalse} />
                    &emsp;
                    <FinanceurInput Value="error" Validate={ValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Placeholder="password" Password={true} onChange={passwordChange} Validate={passwordValidate} />
                    &emsp;
                    <FinanceurInput Value="password" Password={true} onChange={passwordChange} Validate={passwordValidate} />
                </p>
            </div>
        )
    )
    .addWithInfo('With Bot label', '',  
        () => (
            <div style={{padding: "16px"}} >
                <p>
                    <FinanceurInput Placeholder="info" InformationText="balabalabalabalabalabalabalabaablabablalblab" />
                    &emsp;
                    <FinanceurInput Value="info"InformationText="balabalabalabalabalabalabalabaablabablalblab" />
                </p>
                <p>
                    <FinanceurInput Placeholder="success" Validate={ValidateTrue} SuccessText="Victoire pour le peuple !" />
                    &emsp;
                    <FinanceurInput Value="success" Validate={ValidateTrue} SuccessText="Victoire pour le peuple !" />
                </p>
                <p>
                    <FinanceurInput Placeholder="password" Password={true} Validate={passwordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." />
                    &emsp;
                    <FinanceurInput Value="password" Password={true} Validate={passwordValidate} 
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." />
                </p>
            </div>
        )
    )
    .addWithInfo('With Top Label', '',  
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
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="success" Validate={ValidateTrue} />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="success" Validate={ValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="error" Validate={ValidateFalse} />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="error" Validate={ValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Placeholder="password" Password={true} Validate={passwordValidate} />
                    &emsp;
                    <FinanceurInput Label="Tapez quelque chose... s'il-vous-plait..." Value="password" Password={true} Validate={passwordValidate} />
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
    .addWithInfo('With Icon (left)', '',  
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
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="success" Validate={ValidateTrue} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} Value="success" Validate={ValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} Placeholder="error" Validate={ValidateFalse} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="error" Validate={ValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} Placeholder="password" Password={true} Validate={passwordValidate} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="password" Password={true} Validate={passwordValidate} />
                </p>
            </div>
        )
    )
    .addWithInfo('With Icon (right)', '',  
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
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="success" Validate={ValidateTrue} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="success" Validate={ValidateTrue} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="error" Validate={ValidateFalse} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="error" Validate={ValidateFalse} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="password" Password={true} Validate={passwordValidate} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="password" Password={true} Validate={passwordValidate} />
                </p>
            </div>
        )
    )
    .addWithInfo('With Label and Icon', '',  
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
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="success" Validate={ValidateTrue}
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"cliquez pour victorier"} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="success" Validate={ValidateTrue}
                        SuccessText="Ce mot de passe est robuste. Comm... non." />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="error" Validate={ValidateFalse}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères" />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="error" Validate={ValidateFalse}
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
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Placeholder="password" Password={true} Validate={passwordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"mdp bonjour"} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Value="password" Password={true} Validate={passwordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"mdp bonjour"} />
                </p>
                <p>
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Gauche} Placeholder="password" Password={true} Validate={passwordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"mdp au revoir"} Disable={true} />
                    &emsp;
                    <FinanceurInput Icon={<span>♫</span>} IconPos={PosIconEnum.Droite} Value="password" Password={true} Validate={passwordValidate}
                        ErrorText="Le mot de passe doit contenir 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial, et doit faire entre 8 et 16 caractères"
                        InformationText="Ceci est une infos. Très utile. Oui."
                        SuccessText="Ce mot de passe est robuste. Comm... non." Label={"mdp au revoir"} Disable={true} />
                </p>
            </div>
        )
    )
    .addWithInfo('Require', '',  
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
                    <FinanceurInput Require={true} Placeholder="success" Validate={ValidateTrue}
                        SuccessText="Victoire pour le peuple." />
                    &emsp;
                    <FinanceurInput Require={true} Value="success" Validate={ValidateTrue} Label="ah ?"
                        SuccessText="Victoire pour le peuple." />
                </p>
                <p>
                    <FinanceurInput Placeholder="error" Validate={ValidateFalse}
                        ErrorText="Réessayer encore." />
                    &emsp;
                    <FinanceurInput Value="error" Validate={ValidateFalse}
                        ErrorText="Réessayer encore." />
                </p>
                <p>
                    <FinanceurInput Require={true} Placeholder="disable" Disable={true} />
                    &emsp;
                    <FinanceurInput Require={true} Value="disable" Disable={true} />
                </p>
                <p>
                    <FinanceurInput Require={true} Placeholder="password" Password={true} onChange={passwordChange} Validate={passwordValidate} />
                    &emsp;
                    <FinanceurInput Require={true} Value="password" Password={true} onChange={passwordChange} Validate={passwordValidate} />
                </p>
            </div>
        )
    )