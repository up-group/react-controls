import * as React from "react";

const UpGridContext = React.createContext({
    gutter : 0,
    type: "flex"
});

export const UpGridProvider = UpGridContext.Provider;
export const UpGridConsumer = UpGridContext.Consumer;