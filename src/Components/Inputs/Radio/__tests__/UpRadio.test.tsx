// Imports
import * as React from 'react';
import UpRadio from '../UpRadio';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { render,   } from 'enzyme';

chai.use(chaiEnzyme());

describe(UpRadio, () => {
  it('should render without throwing an error', function() {
    const _render = render(<UpRadio name={'option'} options={[
      {
        text: 'Option 1',
        value: 1
      }, {
        text: 'Option 2',
        value: 2
      }
    ]} />) ;

    const _component = _render.find(".up-radio");
    expect(_component.length).toBe(2);
  });
});