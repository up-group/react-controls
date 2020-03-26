import * as React from 'react'

const useSateInLocalStorage : (key: string, defaultValue:string) => Array<any> = (key, defaultValue = "") => {
    const [state, setState] = React.useState(() => {
        return window.localStorage.getItem(key) || defaultValue ;
    })

    React.useEffect(() => {
        window.localStorage.setItem(key, state);
    })

    return [state, setState] ;
}

export default useSateInLocalStorage