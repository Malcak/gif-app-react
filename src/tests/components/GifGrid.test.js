import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFechGifs } from '../../hooks/useFechGifs';
jest.mock('../../hooks/useFechGifs');

describe('tests in <GifGrid /> component', () => {
  const category = 'One punch';
  test('should display the <GifGrid /> component correctly', () => {
    useFechGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should display items when images are loaded', () => {
    const gifs = [
      {
        id: 'a1b2c3',
        title: 'title test',
        url: 'https://localhost/test/test.gif',
      },
      {
        id: '1a2b3c',
        title: 'title test',
        url: 'https://localhost/test/test.gif',
      },
    ];
    useFechGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
