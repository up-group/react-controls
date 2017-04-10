let fileList = require.context('../theming/icons', true, /[\s\S]*$/);

let dictionary = {};
fileList.keys().forEach(x => {
  x = x.replace('./', '');
  dictionary[x.replace('.svg', '')] = require(`../theming/icons/${x}`);
});

export default dictionary
