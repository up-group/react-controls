import * as React from 'react';

import { BaseControlProps } from '../_Common/BaseControl/BaseControl'
import { string } from 'prop-types';

export type ReturnType = 'id' | 'full';

export interface UpSelectOption {
    id: number,
    text: string,
    icon?: string
}

interface DataSource {
    id?: string;
    text?: string;
    endPoint?: string;
    query?: string;
    queryParameterName?: string;
    getExtraParams?: () => any;
    delay?: number;
    handleResponse?: (response: any) => Array<any>;
    fetchData?: (input: string, defaultParameters?: {[key : string]: string}) => Promise<any>;
    defaultParameters?: {[key : string]: string}
}

export interface UpSelectProps extends BaseControlProps<any> {
    default: any;
    multiple?: boolean;
    data?: any;
    isLoading?:boolean;
    placeholder?: string;
    loadingPlaceholder?: string;
    allowClear?: boolean;
    allowCreate?:boolean;
    minimumInputLength?: number;
    dataSource?: DataSource,
    filterOptions?:(option: object, filter: string) => boolean;
    valueKey?: string;
    labelKey?: string;
    autoload?: boolean;
    noResultsText?: string;
    clearAllText?: string;
    clearValueText?: string;
    addLabelText?: string;
    searchPromptText?: string;
    promptTextCreator?:(label:string) => string;
    isOptionUnique?:(option: object, options: Array<object>, labelKey: string, valueKey: string) => boolean;
    onNewOptionClick?: (option) => void;
    optionRenderer?: React.StatelessComponent<UpSelectOption>;
    valueRenderer?: React.StatelessComponent<UpSelectOption>;
    dataFor?: string; //For tooltip,
    returnType?: ReturnType;
    /** Focus le composant quand il est monté */
    autoFocus?: boolean;
    /** Supprime l'option actuellement mis en avant lors de l'utilisation de la touche "retour arrière" */
    backspaceRemovesValue?: boolean;
    /** Enlève le focus sur le composant lors de la sélection d'une option */
    blurInputOnSelect? : boolean;
    /** Lorsque l'utilisateur atteint le haut/bas du menu, prévient de scroller sur le parent */
    captureMenuScroll? : boolean;
    /** Ferme le menu des opitions lorsque l'une d'entre elles est sélectionnée */
    closeMenuOnSelect? : boolean | EventListener;
    /** Fermer ou non le menu des options lorsque l'utilisateur fait défiler the document/body.
        Si une fonction est passée, elle prend un évènement standard javascript ScrollEvent et retourne un booléen
        true => le menu est fermé
        false => le menu reste ouvert 
    */
   closeMenuOnScroll? : boolean | EventListener;
   /** Délimiteur utilisé pour joindre les multiples valeurs dans un seule valeur */
   delimiter? : string;
   /** Supprimer toutes les valeurs lorque l'utilisateur appuye sur la touche 'Echap' ET le menu est fermé */
   escapeClearsValue? : boolean;
   /** Retourne le composant à utiliser pour représenter le label d'un groupe d'options */
   formatGroupLabel? : (group) => React.ReactNode;
   /** Retourne le composant à utiliser pour afficher le label d'une option */
   formatOptionLabel? : (option : Object, optionContext : FormatOptionContext) => React.ReactNode;
   /** Retourne le message dans le cas d'une saisie insufisante */
   formatMinimumInputLenghMessage? : (minimumInputLength : number) => string;
   /** Cache les options sélectionnées du menu */
   hideSelectedOptions?:boolean;
   /** L'identifiant du composant SelectContainer */
   id? : string;
   /** L'identifiant du composant de recherche   */
   inputId? : string;
   /** Surcharge la logique interne de détection de l'état de désactivation d'une option */
   isOptionDisabled? : (option : Object, options : Array<Object>) => boolean;

   /** Surcharge la logique interne de détection de l'état de sélection d'une option */
   isOptionSelected? : (option : Object, options : Array<Object>) => boolean;
   /** Détermine la direction d'affichage */
   isRtl?: boolean;
   /** Activation de la fonction de recherche */
   isSearchable? : boolean ;
    /** Hauteure minimale du menu avant retournement */
    minMenuHeight? : number;
    /** Hauteure maximale du menu avant retournement */
    maxMenuHeight? : number;
    /** Placement par défaut du menu en relation avec le control. 
     * Si 'auto', le placement s'adaptera automatiquement lorsqu'il n'y aura plus assez de place en bas du containeur. */
    menuPlacement? : MenuPlacement;
    /** Activation du blocage du défilement lorsque le menu est ouvert */
    menuShouldBlockScroll? : boolean;
    /** Activation du défilement lors de l'ouverture du menu */   
    menuShouldScrollIntoView? : boolean;
    /** Traitement de l'évènement 'blur' */
    onBlur?: (event: Event) => void;
    /** Traitement de l'évènement 'focus' */
    onFocus?: (event: Event) => void;
    /** Traitement de l'évènement 'keyDown' */
    onKeyDown?: (event: Event) => void;
    /** Lorsque le défilement atteint le haut du menu */
    onMenuScrollToTop?: (event: Event) => void;
    /** Lorsque le défilement atteint le bas du menu */
    onMenuScrollToBottom?: (event: Event) => void;
    /** Activation de l'ouverture automatique du menu lorsque le composant obtient le 'focus' */
    openMenuOnFocus? : boolean;
    /** Activation de l'ouverture automatique du menu lorsque l'utilisateur click sur le composant */
    openMenuOnClick? : boolean;
    /** Définit le tabIndex attribute sur l'input */
    tabIndex?:string;

    /** CREATABLE PROPS */
    /** Activation de la création d'option alors que isLoading est à true. 
     *  Permet de prévenir "Créer ..." option d'être affiché alors que l'appel à une API asynchrone
     *  est toujours en cours */
    allowCreateWhileLoading? : boolean;
    /** Retourne le label pour "Créer ..." option dans le menu */
    formatCreateLabel?: (inputValue : string) => React.ReactNode;
    /** Retourne si l'option  "Créer ..." doit être affichée */
    isValidNewOption?: (inputValue, selectValue, selectOptions) => boolean;
    /** Retourne le nouvel objet */
    getNewOptionData?:(inputValue, optionLabel) => object;
    /** Si définit, sera appelée lorsqu'une nouvelle option est créée, et onChange ne sera pas appelé. 
     * A utiliser afin de définir ce qui doit advenir lors de la création de nouvelle option. 
    */
    onCreateOption?: (inputValue: string) => void;
    /**
     * Définit la position de l'option "Créer  ..." dans la liste.
     */
    createOptionPosition? : 'first' | 'last';
    /** Autorise la définition du class pour le composant */
    className? : string;
    floatingLabel?: string;
}

export type MenuPlacement = "auto" | "bottom" | "top" ;

export type FormatOptionContext = {
    context : "menu" | "value"
    inputValue : string
    selectValue : Object | Array<Object> | null | undefined
}

export interface UpSelectStyledProps {
}