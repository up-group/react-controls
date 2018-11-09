/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module "*.ttf" {
    const content: string;
    export = content;
}

declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

declare type Constructor<T = {}> = new (...args: any[]) => T