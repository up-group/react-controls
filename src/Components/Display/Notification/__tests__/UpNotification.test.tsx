// Imports
import * as React from 'react';
import UpNotification from '../UpNotification';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpNotification, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpNotification />) ;
    expect(_render.hasClass("up-notification")).toBeTruthy();
  });
});
