// let fileList = require.context('../../../Common/theming/icons', true, /[\s\S]*$/);

// let dictionary = {};
// fileList.keys().forEach(x => {
//     x = x.replace('./', '');
//     dictionary[x.replace('.svg', '')] = require(`../../../Common/theming/icons/${x}`);
// });
let dictionary = {};
dictionary['add'] = require(`../../../Common/theming/icons/add.svg`);
dictionary['asterisk'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['calendar'] = require(`../../../Common/theming/icons/calendar.svg`);
dictionary['delete'] = require(`../../../Common/theming/icons/delete.svg`);
dictionary['edit'] = require(`../../../Common/theming/icons/edit.svg`);
dictionary['email'] = require(`../../../Common/theming/icons/email.svg`);
dictionary['error-sign'] = require(`../../../Common/theming/icons/error-sign.svg`);
dictionary['filter-list'] = require(`../../../Common/theming/icons/filter-list.svg`);
dictionary['filter'] = require(`../../../Common/theming/icons/filter.svg`);
dictionary['help'] = require(`../../../Common/theming/icons/help.svg`);
dictionary['info-sign'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['link'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['mobile-phone'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['ok-sign'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['phone'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['search'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['tick'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['user'] = require(`../../../Common/theming/icons/asterisk.svg`);
dictionary['warning-sign'] = require(`../../../Common/theming/icons/asterisk.svg`);
export default dictionary
