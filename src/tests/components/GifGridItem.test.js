import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('tests on the <GifGridItem /> component', () => {
  const item = {
    id: 'VXJWhaO7afRe',
    title: 'One Punch Man GIF',
    url: '"https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=14cc3d561t7fzi4lu9a0uzxjbo3z5g7di6uhuhzc9go1k0b6&rid=giphy.gif&ct=g"',
  };

  const wrapper = shallow(<GifGridItem {...item} />);

  test('should display the <GifGridItem /> component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should render a paragraph with the title received in its properties', () => {
    const paragraph = wrapper.find('p');
    expect(paragraph.text().trim()).toBe(item.title);
  });
});
