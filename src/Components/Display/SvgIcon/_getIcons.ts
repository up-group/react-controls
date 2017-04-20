
let fileList = require.context('../../../Common/theming/icons', true, /[\s\S]*$/);

let dictionary = {};
fileList.keys().forEach(x => {
    x = x.replace('./', '');
    dictionary[x.replace('.svg', '')] = require(`../../../Common/theming/icons/${x}`);
});

export default dictionary
