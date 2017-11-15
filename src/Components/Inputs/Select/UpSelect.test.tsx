// Imports
import * as React from 'react';
import UpSelect from './';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as renderer from 'react-test-renderer'

chai.use(chaiEnzyme());

describe('UpButton', () => {
  it('should render without throwing an error', function() {
    var _render = shallow(<UpSelect default={null} 
        onChange={() => {}} data={[
      {
        id:1,
        text:'option 1'
      },{
        id:2,
        text:'option 2'
      },
    ]} />) ;
    _render.find('div').simulate('click') ;
    console.log(toJson(_render)) ;
    var _options = _render.find("option");
    expect(_options.length).toBe(2);
  });
});