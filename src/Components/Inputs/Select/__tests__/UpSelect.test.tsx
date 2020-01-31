// Imports
import * as React from 'react';
import UpSelect from '../UpSelect';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';

chai.use(chaiEnzyme());

describe('UpSelect', () => {
  it('should render without throwing an error', function() {
    var _render = mount(<UpSelect default={null} 
        onChange={() => {}} data={[
      {
        id:1,
        text:'option 1'
      },{
        id:2,
        text:'option 2'
      },
    ]} />) ;
    
    expect(_render.find('.up-select-wrapper').length).toBe(1);
  });

  it('should render an empty option', function () {
    var _render = mount(<UpSelect default={null}
      onChange={() => { }} data={[
        {
          id: 1,
          text: 'option 1'
        }, {
          id: 2,
          text: 'option 2'
        },
      ]} value={{
        id: 1,
        text: 'option 1'
      }} />);

    expect(_render.containsMatchingElement(<div>-- Sélectionner</div>)).toEqual(false);
    
    // Reset the value
    _render.setProps({value : null}) ;

    expect(_render.containsMatchingElement(<div>-- Sélectionner</div>)).toEqual(true);
  });

  it('should render the selected option', function () {
    var _render = mount(<UpSelect default={null}
      onChange={() => { }} data={[
        {
          id: 1,
          text: 'option 1'
        }, {
          id: 2,
          text: 'option 2'
        },
      ]} />);

    expect(_render.containsMatchingElement(<div>-- Sélectionner</div>)).toEqual(true);

    // Set the value
    _render.setProps({
      value: {
        id: 1,
        text: 'option 1'
      } });

    expect(_render.containsMatchingElement(<div>option 1</div>)).toEqual(true);
  });

  it('should return the selected id', function () {
    let event ;
    let value ;
    const onChange = (e, v) => {
      event = e;
      value = v;
    }
    let _render = mount(<UpSelect name={"MySelect"} 
      valueKey={"id"}
      returnType={"id"} 
      isRequired={true}
      default={null}
      onChange={onChange}
      data={[
        {
          id: 1,
          text: 'option 1'
        }, {
          id: 2,
          text: 'option 2'
        },
      ]} />);

    // Set the value
    _render.setProps({
      value: {
        id: 1,
        text: 'option 1'
      }
    });

    const instance : any = _render.instance() ;
    instance.onChange("MySelect", {
      id: 1,
      text: 'option 1'
    }) ;

    expect(_render.containsMatchingElement(<div>option 1</div>)).toEqual(true);
    expect(event.target.value == 1).toEqual(true);
    expect(value == 1).toEqual(true);
  });
});