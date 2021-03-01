import { UpInputProps } from '../Input/types';

interface Item {
    text: string;
    regex: RegExp;
};

export interface UpPasswordProps extends UpInputProps {
    showPasswordOnClick?: boolean;
    rules?: Array<Item>
};

export interface UpPasswordState {
    isVisible: boolean;
    touched?: boolean;
};
