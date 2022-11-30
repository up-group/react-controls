import React, { useState }  from 'react';
import classnames from "classnames";
import { useTheme } from '../../../Common/theming/ThemeContext';
import { getTagStyle } from "./UpTag.style";

export interface SelectedTagData {
    id: string;
    text: string;
    selected: boolean;
}

export interface Props {
    id: string;
    text: string;
    onChange?: (e: React.MouseEvent, data: SelectedTagData) => void;
}

export const UpTag: React.VFC<Props> = ({
    id,
    text,
    onChange,
}) => {
    const [isSelected, setIsSelected] = useState(false);
    const theme = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        setIsSelected(!isSelected);
        onChange?.(e, {id, text, selected: !isSelected});
    }

    const styles = getTagStyle(theme, isSelected);
    const className = classnames(styles, `tag-${id}`);

    return (
        <span className={className} onClick={handleClick} data-testid={`tag-${id}`}>
            {text}
        </span>
    );
}
