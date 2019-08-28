// Imports
import * as React from 'react';
import UpDate from '../UpDate';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpDate, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpDate />) ;
    const _component = _render.find(".up-date");
    expect(_component.length).toBe(1);
  });
});