// Imports
import * as React from 'react';
import UpMenu, { MenuItemData, UpMenuProps, UpMenuState } from '../UpMenu';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';
import UpButton from '../../../Inputs/Button';

chai.use(chaiEnzyme());

describe(UpMenu, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpMenu menuItems={[
      {
        title: "Stack", icon: "stack", isSelected: false, isVisible: true, uri: "/stack", childMenuItems: [
          { title: "Option 1", icon: "weather-rain", isSelected: false, isVisible: true, uri: "/stack/option1", childMenuItems: [] },
          { title: "Option 2", icon: "weather-snow", isSelected: false, isVisible: true, uri: "/stack/option2", childMenuItems: [] },
          { title: "Option 3", icon: "weather-sunset", isSelected: false, isVisible: true, uri: "/stack/option3", childMenuItems: [] }
        ]
      },
      { title: "Smart", icon: "smartphone", isSelected: false, isVisible: true, uri: "/smart", childMenuItems: [] },
      { isSeparator: true },
      { title: "Settings", icon: "settings", isSelected: false, isVisible: true, uri: "/settings", childMenuItems: [] },
      { isSeparator: true },
      {
        render: (item: MenuItemData, props: UpMenuProps, state: UpMenuState) => {
          return <UpButton intent={'primary'} onClick={(e) => { }} width={state.minified ? 'icon' : 'full'} height={'large'} actionType={'briefcase'}>{'Commander'}</UpButton>
        }
      },
    ]}  />) ;
    expect(_render.hasClass('up-menu')).toBeTruthy();
  });
});