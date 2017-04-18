# React-Controls

## Background Info

We know that there are a ton of react UI library projects to choose from. Our hope with this one is to provide an 
Aim to provide the nest generation of react components that you can use to bootstrap your next project, or as a reference for building a UIKit.
Read on to get started!

## Main Features
- React
- Isolation
- Statically Typed
- TypeScript
- Styled Components
- React
- Validation

## Getting Started
1. Clone the Repo
`git clone https://github.com/Up-Group/react-controls`

2. Install Dependencies
From the root of the project directory, run `yarn` if you have yarn installed globally.
--- or ---
`npm install`.

## Styled Components
This project embraces [styled-components](https://github.com/styled-components/styled-components) as it's a fantastic way to style your React components.  

Check the components directory for examples.

## File Tree Structure
```
src/
│   ├── Input
│   │   ├── __tests__
│   │   │   ├── __mocks__
│   │   │   │   └── boxMocks.mock.ts
│   │   │   ├── __snapshots__
│   │   │   │   └── index.test.tsx.snap
│   │   │   └── index.test.tsx
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
|   |   └── ...
├── index.ts
```

## Generators
Next to come

## Testing
Included is a test framework for all of your React testing needs.  We are using Jest to run the test suite and generate snapshots, plus Enzyme for component introspection.

Tests should be collocated within the component they represent. Test files should be named `index.test.tsx` and mocks must be named `myMock.mock.ts`.

## Deployment

## Scripts
- `npm run setup:yarn`
  - Install the package dependencies via yarn
- `npm install`
  - Install dependencies (the ol' fashioned way)
- `npm run test`
  - Run the test suite
- `npm run test:watch`
  - Run the test suite in watch mode
- `npm run test:update`
  - Update the failing snapshot tests

## Resources
- [JavaScript Code Quality with Free Tools](https://dev-blog.apollodata.com/javascript-code-quality-with-free-tools-9a6d80e29f2d#.1unvvh8vw)
- [Working with React & TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)

## Contributing
See here for our [contribution guide](https://github.com/Up-Group/react-controls/blob/master/CONTRIBUTING.md).  We are on slack, please go [here for an invite]
We'd love to hear from you!

## License
See here for the [license](https://github.com/Up-Group/react-controls/blob/master/LICENSE).

## Roadmap
