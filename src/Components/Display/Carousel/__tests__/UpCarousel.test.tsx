// Imports
import * as React from 'react';
import UpCarousel from '../UpCarousel';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpCarousel, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpCarousel items={[]} />) ;
    expect(_render.hasClass("up-carousel")).toBeTruthy();
  });
});