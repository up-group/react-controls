// Imports
import * as React from 'react';
import UpRichText from '../UpRichText';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpRichText, () => {
  it('should render without throwing an error', async function() {
    render(<UpRichText />) ;  
  });
});