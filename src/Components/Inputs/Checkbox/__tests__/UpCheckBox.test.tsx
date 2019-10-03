// Imports
import * as React from 'react';
import UpCheckBox from '../UpCheckBox';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpCheckBox, () => {
  it('should render without throwing an error', function() {
    
    const _render = render(<UpCheckBox options={[{
      text : "Choice 1", 
      value : 1,
      name : 'choice1'
    }]} />) ;

    expect(_render.hasClass("up-checkbox")).toBeTruthy();
  });
});