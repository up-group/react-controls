// Imports
import * as React from 'react';
import UpPanel from '../UpPanel';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render  } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpPanel, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpPanel />) ;
    chai.expect(_render).to.have.className('up-panel');
  });
});