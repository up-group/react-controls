// // these sizes are arbitrary and you can set them to whatever you wish
// import styled, {css} from './theming/themedComponents';


// const sizes = {
//   giant: 1170,
//   desktop: 992,
//   tablet: 768,
//   phone: 376
// }

// export interface Media {
//   giant: number;
//   desktop: number;
//   tablet: number;
//   phone: number;
// }

// // Iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((accumulator, label) => {
//   // use em in breakpoints to work properly cross-browser and support users
//   // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
//   const emSize = sizes[label] / 16
//   accumulator[label] = (...args) => css`
//     @media (max-width: ${emSize}em) {
//       /*${css(...args)}*/
//     }
//   `
//   return accumulator
// }, {})


// export const Container = styled.div`
//   color: #333;
//   ${media.desktop`padding: 0 18px;`}
//   ${media.tablet`padding: 0 18px;`}
//   ${media.phablet`padding: 0 10px;`}
//   ${media.phone`padding: 0 3px;`}`
// ;