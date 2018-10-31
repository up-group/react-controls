// Imports
import * as React from 'react';
import UpButton from '../UpButton';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as renderer from 'react-test-renderer'

chai.use(chaiEnzyme());

describe('UpButton', () => {
  it('should render without throwing an error', function() {
    var _render = render(<UpButton onClick={() => {}} />) ;
    var _input = _render.find("button");
    expect(_input.length).toBe(1);
  });
});