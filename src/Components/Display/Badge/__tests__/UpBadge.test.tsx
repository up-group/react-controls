// Imports
import * as React from 'react';
import UpBadge from '../UpBadge';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpBadge, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpBadge text={'My badge'} />) ;
    expect(_render.html()).toBe("My badge");
  });
});