// Imports
import * as React from 'react';
import UpToggle from '../UpToggle';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpToggle, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpToggle value={true} />) ;
    const _component = _render.find(".up-toggle");
    expect(_component.length).toBe(1);
  });
});