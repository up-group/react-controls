import addonAPI from '@storybook/addons';

// Register the addon with a unique name.
addonAPI.register('up-group/info', storybookAPI => {});

// import { makeDecorator } from '@storybook/addons';

// export makeDecorator({
//   name: 'withSomething',
//   parameterName: 'something',
//   wrapper: (storyFn, context, { parameters }) => {
//     // Do something with `parameters`, which are set via { something: ... }

//     // Note you may alter the story output if you like, although generally that's
//     // not advised
//     return storyFn(context);
//   }
// })