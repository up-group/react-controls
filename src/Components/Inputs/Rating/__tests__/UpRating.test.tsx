// Imports
import * as React from 'react';
import UpRating from '../UpRating';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpRating, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpRating name={'rating'} numberOfStars={5} max={100} />) ;
    expect(_render.hasClass("up-rating")).toBeTruthy();
  });
});