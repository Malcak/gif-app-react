import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifExpertApp } from '../GifExpertApp';

describe('tests in <GifExpertApp /> component', () => {
  test('should display the <GifExpertApp /> component correctly', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should show a list of categories', () => {
    const categories = ['One punch', 'Dragon ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
