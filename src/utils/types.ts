export interface StyledComponentProps {
  innerRef?: (comp: any) => void;
}

export function FilterProps<T>(refObject:any, propsObject:any) : T {
    let persistableO1 = {} as T;
    Object.keys(propsObject).forEach(key => {
        if (Object.keys(refObject).indexOf(key) >= 0) {
            persistableO1[key] = refObject[key];
        }
    });
    return persistableO1 ;
} ; 
