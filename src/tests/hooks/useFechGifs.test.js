import { useFechGifs } from '../../hooks/useFechGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('test in useFechGifs hook', () => {
  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFechGifs('One punch')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test('should return an array of images and the loading variable set to false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFechGifs('One punch')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
