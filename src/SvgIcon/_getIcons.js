let fileList = require.context('../../src/theming/icons', true, /[\s\S]*$/);

let dictionary = {};
fileList.keys().forEach(x => {
  x = x.replace('./', '');
  dictionary[x.replace('.svg', '')] = require(`../../src/theming/icons/${x}`);
});

export default dictionary
