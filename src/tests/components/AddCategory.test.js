import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('tests in <AddCategory /> component', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should display the <AddCategory /> component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should change the text input', () => {
    const value = 'Hello World';
    wrapper.find('input').simulate('change', { target: { value: value } });
    expect(wrapper.find('input').prop('value')).toBe(value);
  });
  test('the posting of the information on submit should fail', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test('should call the setCategories function and clear the text input', () => {
    const value = 'Hello World';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
