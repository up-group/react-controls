// Imports
import * as React from 'react';
import UpInput from '../UpInput';

import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';

chai.use(chaiEnzyme());

describe('UpInput', () => {
  it('should render without throwing an error', function() {
    var _render = render(<UpInput />) ;
    var _input = _render.find("input");
    expect(_input.length).toBe(1);
  });

  it('should have a parent .up-input-group', function() {
    var _render = render(<UpInput width="medium" />) ;
    var _input = _render.find("div.up-input-group").parent();
    expect(_input.length).toBe(1);
  });
});