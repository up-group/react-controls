// Imports
import * as React from 'react';
import UpCarousel from '../UpCarousel';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpCarousel, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpCarousel />) ;
    const _component = _render.find(".up-carousel");
    expect(_component.length).toBe(1);
  });
});