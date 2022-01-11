const calendarLabel = 'Calendrier';
const closeDatePicker = 'Fermer';
const focusStartDate = 'Sélectionner la date de début de votre période.';
const clearDate = 'Annuler';
const clearDates = 'Annuler';
const jumpToPrevMonth = 'Mois précédent.';
const jumpToNextMonth = 'Mois suivant.';
const keyboardShortcuts = 'Raccourcis du clavie';
const showKeyboardShortcutsPanel = "Ouvrir le paneau d'information des raccourcis clavier";
const hideKeyboardShortcutsPanel = "Fermer le paneau d'information des raccourcis clavier";
const openThisPanel = 'Ouvrir ce panneau.';
const enterKey = 'Touche Entrée';
const leftArrowRightArrow = 'Touches Flèche Droite et Gauche';
const upArrowDownArrow = 'Touches Flèche Haut et Bas';
const pageUpPageDown = 'Touches Page Haute et Bas';
const homeEnd = 'Touches Home et End';
const escape = 'Touceh Echape';
const questionMark = "Point d'interrogation";
const selectFocusedDate = 'Sélectionnez la date.';
const moveFocusByOneDay = "Se déplacer en arrière (gauche) ou en avant (droite) d'un jour.";
const moveFocusByOneWeek = "Se déplacer en arrière (bas) ou en avant (haut) d'une semaine";
const moveFocusByOneMonth = 'Changer par mois.';
const moveFocustoStartAndEndOfWeek = 'Aller au début ou à la fin de la semaine.';
const returnFocusToInput = 'Retourner au champ de saisie de la date.';
const keyboardNavigationInstructions = `Appuyez sur la touche flèche en bas du clavier pour interragir avec le calendrier
  et sélectionnez une date. Appuyer sur la touche point d'interrogation afin d'obtenir des informations sur les raccourcis clavier.`;

const chooseAvailableStartDate = date => `Choisissez ${date} comme date de début.`;
const chooseAvailableEndDate = date => `Choisissez ${date} comme date de fin`;
const chooseAvailableDate = date => date;
const dateIsUnavailable = date => `Le ${date} est non dicponible`;
const dateIsSelected = date => `Sélectionnée : ${date}`;

export default {
  calendarLabel,
  closeDatePicker,
  clearDate,
  jumpToPrevMonth,
  jumpToNextMonth,
  keyboardShortcuts,
  showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel,
  openThisPanel,
  enterKey,
  leftArrowRightArrow,
  upArrowDownArrow,
  pageUpPageDown,
  homeEnd,
  escape,
  questionMark,
  selectFocusedDate,
  moveFocusByOneDay,
  moveFocusByOneWeek,
  moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek,
  returnFocusToInput,
  keyboardNavigationInstructions,
  dateIsUnavailable,
  dateIsSelected,
};
