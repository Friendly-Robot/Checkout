/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SavingsTooltip from '../SavingsTooltip';


describe('<SavingsTooltip />', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      handlePromoSubmit: () => {},
    };

    wrapper = shallow(<SavingsTooltip {...props} />);
  })

  it('should be defined', () => {
    expect(SavingsTooltip).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<SavingsTooltip {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
