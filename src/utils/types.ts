export interface StyledComponentProps {
  innerRef?: (comp: any) => void;
}

export function FilterProps<T>(object:any) : T {
    let persistableO1 = {} as T;
    Object.keys(object).forEach(key => {
        if (Object.keys(persistableO1).indexOf(key) >= 0) {
            persistableO1[key] = object[key];
        }
    });
    return persistableO1 ;
} ; 
