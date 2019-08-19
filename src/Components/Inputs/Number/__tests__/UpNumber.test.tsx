// Imports
import * as React from 'react';
import UpNumber from '../UpNumber';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpNumber, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpNumber />) ;
    const _component = _render.find("up-number");
    expect(_component.length).toBe(1);
  });
});