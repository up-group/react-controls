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