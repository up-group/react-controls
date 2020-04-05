// Imports
import * as React from 'react';
import UpInformation from '../UpInformation';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpInformation, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpInformation />) ;
    expect(_render.hasClass("up-information")).toBeTruthy();
  });
});