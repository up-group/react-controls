import { Action, ActionDetails } from './UpDataGrid';

export const isDetailAction = (action): boolean => action.type === 'image-details' && !!action.details;

export const hasDetailAction = (actions: Action[]): boolean => actions?.some(isDetailAction);

export const findDetailAction = (actions: Action[]): ActionDetails | null => {
  const action = actions?.find(isDetailAction);
  if (action) {
    return action.details;
  }
  return null;
};
