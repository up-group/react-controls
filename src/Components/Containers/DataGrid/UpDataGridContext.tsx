import * as React from "react";

const UpDataGridContext = React.createContext({
    displayRowActionsWithinCell : false,
    rowActions: [],
    labelToDisplayRowActionsInCell : undefined 
});

export const UpDataGridProvider = UpDataGridContext.Provider;
export const UpDataGridConsumer = UpDataGridContext.Consumer;