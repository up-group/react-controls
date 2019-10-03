// Imports
import * as React from 'react';
import UpCodeViewer from '../UpCodeViewer';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpCodeViewer, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpCodeViewer code={"<UpCodeViewer code='<UpCodeViewer />' />"} />) ;
    chai.expect(_render).to.have.className('up-code-viewer')
  });
});