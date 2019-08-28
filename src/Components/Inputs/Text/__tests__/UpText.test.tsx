// Imports
import * as React from 'react';
import UpText from '../UpText';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpText, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpText />) ;
    const _component = _render.find(".up-text");
    expect(_component.length).toBe(1);
  });
});