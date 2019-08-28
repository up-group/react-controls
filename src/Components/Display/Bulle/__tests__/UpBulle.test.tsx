// Imports
import * as React from 'react';
import UpBulle from '../UpBulle';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpBulle, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpBulle
      backgroundImage={"linear-gradient(102deg, #cd0649, #ff54a0)"}
      message={"messages non-lus"}
      icon={"chat"}
      value={1}>
    </UpBulle>) ;
    expect(_render.hasClass('up-bulle')).toBeTruthy();
  });
});