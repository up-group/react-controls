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

  it('should display an help message', function() {
    const message= "Vous devez renseigner un email valide";
    var _render = mount(<UpInput helpMessage= {message} />) ;
    expect(_render.find('.up-wrapper-help-message-inline').length).toBe(1);
    expect(_render.containsMatchingElement(<div>{message}</div>)).toEqual(true);
  });

  it('should display a custom help message', function() {
    const message= "Vous devez renseigner un email valide";
    var _render = mount(<UpInput  helpMessage={children => (
      <div>
        {children}
        <div className={"up-wrapper-help-message-inline-custom"}>
         {message}
        </div>
      </div>
    )} />) ;
    expect(_render.find('.up-wrapper-help-message-inline-custom').length).toBe(1);
    expect(_render.containsMatchingElement(<div>{message}</div>)).toEqual(true);
  });

  it('should display an inline error', function() {
    const errorMessage= "Ce champs est obligatoire";
    var _render = mount(<UpInput hasError={true} showError={true} error={errorMessage} errorDisplayMode={"inline"}/> ) ;
    expect(_render.find('.up-wrapper-error-inline').length).toBe(1);
    expect(_render.containsMatchingElement(<div>{errorMessage}</div>)).toEqual(true);
  });

  it('should not display an inline error', function() {
    const errorMessage= "Ce champs est obligatoire";
    var _render = mount(<UpInput hasError={true} showError={false} error={errorMessage} errorDisplayMode={"inline"}/> ) ;
    expect(_render.find('.up-wrapper-error-inline').length).toBe(0);
    expect(_render.containsMatchingElement(<div>{errorMessage}</div>)).toEqual(false);
  });

  it('should not display a tooltip error', function() {
    const errorMessage= "Ce champs est obligatoire";
    var _render = render(<UpInput hasError={true} showError={true} error={errorMessage} errorDisplayMode={"tooltip"}/> ) ;
    expect(_render.find('.up-wrapper-error-tooltip').length).toBe(1);
  });

});