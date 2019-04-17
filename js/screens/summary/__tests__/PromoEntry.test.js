/**
 * @format
 */

import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import AppButton from "../../../common/AppButton";
import PromoEntry from "../PromoEntry";


describe("<PromoEntry />", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      handlePromoSubmit: () => {},
    };

    wrapper = shallow(<PromoEntry {...props} />);
  })

  it("should be defined", () => {
    expect(PromoEntry).toBeDefined();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<PromoEntry {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle press action for ", () => {
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue('Apply button pressed');

    wrapper = shallow(<PromoEntry handlePromoSubmit={onPressEvent} />)
    const button = wrapper.find(AppButton);
    button.props().onPress();
    expect(onPressEvent.mock.calls.length).toBe(1);
  });
});
