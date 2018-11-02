/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
export const DeviceHDDesktops = { minWidth : '1281px' } ;

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/
export const DeviceLaptops =  { minWidth: '1025px', maxWidth: '1280px' } ;

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
export const DeviceTabletsPortrait =  { minWidth: '768px', maxWidth: '1024px' } ;

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
export const DeviceTabletsLandscape =  { minWidth: '768px', maxWidth: '1024px', orientation: 'landscape' as 'landscape' } ;

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/
export const DeviceLRTablets =  { minWidth: '481px', maxWidth: '767px' } ;

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
export const DeviceSmartphones =  { minWidth: '320px', maxWidth: '480px' } ;


/*
  ##Device = Small Smartphones Mobiles (Portrait)
  ##Screen = to 319px
*/
export const DeviceSmallSmartphones =  { maxWidth: '319px'} ;
