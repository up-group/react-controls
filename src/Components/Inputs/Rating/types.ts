export interface RatingProps {
    name: string;
    numberOfStars: number,
    max: number,
    value?: number,
    className?: string,
    disabled?: boolean;
    dataFor?: string; // Move to specific props
    onChange?: (event: React.ChangeEvent<any>, value: number) => void;
};

export interface RatingState {
    editedValue?: number;
    value: number;
};

export type STAR_FILL_TYPE = 'full' | 'empty' | 'half';