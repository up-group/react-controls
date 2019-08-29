// Imports
import * as React from 'react';
import UpLoadingIndicator from '../UpLoadingIndicator';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpLoadingIndicator, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpLoadingIndicator isLoading={true} />) ;
    expect(_render.hasClass('up-loading-indicator')).toBeTruthy();
  });
});