// Imports
import * as React from 'react';
import UpDrawing from '../UpDrawing';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpDrawing, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpDrawing />) ;
    expect(_render.hasClass("up-drawing")).toBeTruthy();
  });
});