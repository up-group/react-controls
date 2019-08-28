// Imports
import * as React from 'react';
import UpTimePicker from '../UpTimePicker';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpTimePicker, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpTimePicker />) ;
    expect(_render.hasClass("up-timepicker")).toBeTruthy();
  });
});