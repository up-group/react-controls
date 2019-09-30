// let fileList = require.context('../../../Common/theming/icons', true, /[\s\S]*$/);

// let dictionary = {};
// fileList.keys().forEach(x => {
//     x = x.replace('./', '');
//     dictionary[x.replace('.svg', '')] = require(`../../../Common/theming/icons/${x}`);
// });
export type IconName = 
'menu' | 'previous' | 'list' | 'gift' | 'attachment' | 'add' | 'asterisk' | 'calendar' | 'caret-down' | 'caret-right' | 'caret-up' | 'close' | 'comment' | 'confirm' | 'cross' | 'delete' | 'download' | 'edit' | 'email' | 'error-sign' | 'export' | 'filter' | 'filter-list' | 'help' | 'import' | 'info-sign' | 'link' | 'minus' | 'mobile-phone' | 'none' | 'ok-sign' | 'phone' | 'plus' | 'refresh' | 'save' | 'search' | 'sort-asc' | 'sort-desc' | 'stop' | 'tick' | 'unlock' | 'upload' | 'user' | 'user-with-cross-sign' | 'warning-sign' | 'zoom-in' | 'zoom-out' | "manual" | "read" | "validate" | "zoom-normal" | "image-rotate-right" | "image-rotate-left" | "open" | 'placeholder' | 'go-back' | 'profile' | 'clip' | 'list2' | 'cake' | 'chat' | 'adjustments' | 'aim' | 'airplane' | 'arrow-up' | 'arrow-right' | 'arrow-down' | 'arrow-left' | 'avatar' | 'badge' | 'bell' | 'bookmark' | 'bottle' | 'bottom-aligned-text' | 'briefcase' | 'brush' | 'burger-menu' | 'cart' | 'centered-text' | 'checkmark' | 'clock' | 'cocktail' | 'code' | 'controller' | 'compass' | 'conversation' | 'crop' | 'cup' | 'desktop' | 'direction' | 'document' | 'drop' | 'eject' | 'enlarge' | 'equalizer' | 'fast-forward' | 'fire' | 'flag' | 'floppy' | 'folded' | 'folder' | 'fork' | 'fullscreen' | 'grid' | 'handheld' | 'headphone' | 'heart-filled' | 'heart-outline' 
| 'house' | 'image'| 'knife' | 'layers' | 'list-text'| 'location'|'lock-closed'|'lock-opened'| 'magnify-zoom-out'|'magnify-zoom-in'|'magnify'|'mail'|'map'|'meal'|'microphone-on'|'microphone-off'|'more'|'move-to-bottom'|'move-to-top'|'move-to-left'|'move-to-right'|'multiple-document'|'music'|'moon'|'pause'|'photo-camera' | 'pie-chart' | 'pin' | 'play' | 'presentation' | 'printer' | 'purse' | 'radio' | 'ragged-text' | 'repeat' | 'rewind' | 'sandclock' | 'scale_down' |'scale' | 'scale-up'|'send'| 'settings' | 'share' | 'shrink' | 'shuffle' | 'smartphone' | 'sound' | 'sound-low' | 'sound-medium' | 'sound-high' | 'sound-mute' 
| 'spoon' | 'stack'|'star-filled'|'star-outline'|'step-back'| 'step-forward'
| 'switch-off' | 'switch-on' | 'tag'
| 'thumb' | 'timer'|'top-aligned-text'
| 'trash-can' | 'tv'
| 'video-camera' | 'weather-cloud' | 'weather-lightning' | 'weather-rain' | 'weather-snow' | 'weather-sunrise' | 'weather-sunset' | 'weather-sunshine' | 'weather-wind' | 'weather-wind-force'
| 'window' | 'world' | 'caret-left' | 'fullscreen' | 'justified-text' | 'eye-open' | 'eye-close' | 'cancel' | 'enterprise' | 'card' | 'purchase' | 'notification' | 'stats'
| 'acceptation' | 'check' | 'billing' | 'page' | 'circle-plus' | 'circle-close' | 'circle-info' | 'file' | 'enter' | 'profile2' | 'burger-menu2' | 'mobile-up' | 'delivery' | 'parcel' | 'store' | 'group'
| 'colored-calendar' | 'colored-transaction' | 'colored-equalizer' | 'colored-card' | 'colored-list' | 'pen' | 'magasin' | '3persons'

export const IconNames: IconName[] = ['menu', 'previous', 'list', 'gift', 'attachment', 'add', 'asterisk', 'calendar', 'caret-down', 'caret-right', 'caret-up', 'close', 'comment', 'confirm', 'cross', 'delete', 'download', 'edit', 'email', 'error-sign', 'export', 'filter', 'filter-list', 'help', 'import', 'info-sign', 'link', 'minus', 'mobile-phone', 'none', 'ok-sign', 'phone', 'plus', 'refresh', 'save', 'search', 'sort-asc', 'sort-desc', 'stop', 'tick', 'unlock', 'upload', 'user', 'user-with-cross-sign', 'warning-sign', 'zoom-in', 'zoom-out', "manual", "read", "validate", "zoom-normal", "image-rotate-right", "image-rotate-left", "open" , 'placeholder' , 'go-back' , 'profile' , 'clip' , 'list2' , 'cake' , 'chat', 'adjustments', 'aim', 'airplane', 'arrow-up', 'arrow-right', 'arrow-down', 'arrow-left', 'avatar', 'badge', 'bell', 'bookmark', 'bottle', 'bottom-aligned-text', 'briefcase', 'brush', 'burger-menu', 'cart', 'centered-text', 'checkmark', 'clock', 'cocktail', 'code', 'controller', 'compass', 'conversation', 'crop', 'cup', 'desktop', 'direction', 'document', 'drop', 'eject', 'enlarge',  'equalizer', 'fast-forward',  'fire', 'flag', 'floppy', 'folded', 'folder', 'fork', 'grid', 'handheld', 'headphone', 'heart-filled', 'heart-outline', 'house', 
'image', 'knife', 'layers', 'list-text', 'location','lock-closed','lock-opened','magnify-zoom-out','magnify-zoom-in','magnify', 'mail', 'map', 'meal', 'microphone-on', 'microphone-off', 'more', 'move-to-bottom', 'move-to-top', 'move-to-left', 'move-to-right', 'multiple-document', 'music','moon', 'pause', 'photo-camera', 'pie-chart', 'pin', 'play', 'presentation', 'printer', 'purse', 'radio', 'ragged-text', 'repeat', 'rewind', 'sandclock', 'scale_down', 'scale', 'scale-up','send', 'settings', 'share', 'shrink', 'shuffle', 'smartphone', 'sound', 'sound-low', 'sound-medium', 'sound-high', 'sound-mute',
'spoon', 'stack', 'star-filled','star-outline','step-back', 'step-forward',
'switch-off', 'switch-on', 'tag', 'thumb', 'timer', 'top-aligned-text', 'trash-can', 'tv', 'video-camera',
'weather-cloud', 'weather-lightning', 'weather-rain', 'weather-snow', 'weather-sunrise', 'weather-sunset', 'weather-sunshine', 'weather-wind', 'weather-wind-force', 
'window', 'world', 'caret-left', 'fullscreen', 'justified-text', 'eye-open', 'eye-close', 'cancel', 'enterprise', 'card', 'purchase', 'notification', 'stats',
'acceptation','check','billing','page','circle-plus','circle-close','circle-info','file','enter','profile2','burger-menu2','mobile-up','delivery','parcel','store','group',
'colored-calendar','colored-transaction', 'colored-equalizer', 'colored-card', 'colored-list','pen','magasin','3persons'] ;

let dictionary = {};

for (let i = 0; i < IconNames.length; i++) {
    const iconName = IconNames[i];
    dictionary[iconName] = require("./icons/" + iconName + ".svg")
}

export default dictionary