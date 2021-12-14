import React from 'react';
import { LayoutMode } from './types';

const UpGridContext = React.createContext<{ gutter: number, rowSpacing?: number, type: LayoutMode, fullRowLayout: boolean }>({
    gutter: 0,
    rowSpacing: 0,
    type: 'flex',
    fullRowLayout : false
});

export const UpGridProvider = UpGridContext.Provider;
export const UpGridConsumer = UpGridContext.Consumer;
