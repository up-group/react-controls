// Imports
import * as React from 'react';
import UpPassword from '../UpPassword';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpPassword, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpPassword />) ;
    expect(_render.hasClass("up-password")).toBeTruthy();
  });
});