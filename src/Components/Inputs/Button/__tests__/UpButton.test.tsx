// Imports
import * as React from 'react';
import UpButton from '../UpButton';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe('UpButton', () => {
  it('should render without throwing an error', function() {
    var _render = render(<UpButton onClick={() => {}} />) ;
    var _input = _render.find("button");
    expect(_input.length).toBe(1);
  });

  it('should render an icon with a label', function() {
    var _render = render(<UpButton actionType={'edit'} onClick={() => { }}>Edit</UpButton>);
    var _input = _render.find("span.up-btn-label");
    expect(_input.length).toBe(1);
  })
});