import * as React from "react";
import { Action } from "./UpDataGrid"  

const UpDataGridContext = React.createContext<{
    displayRowActionsWithinCell: boolean;
    rowActions: Array<Action>,
    labelToDisplayRowActionsInCell: string
}>({
    displayRowActionsWithinCell : false,
    rowActions: [],
    labelToDisplayRowActionsInCell : undefined 
});

export const UpDataGridProvider = UpDataGridContext.Provider;
export const UpDataGridConsumer = UpDataGridContext.Consumer;