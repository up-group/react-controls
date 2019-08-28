// Imports
import * as React from 'react';
import UpDropFile from '../UpDropFile';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpDropFile, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpDropFile name={'file'} />) ;
    expect(_render.hasClass("up-dropfile")).toBeTruthy();
  });
});