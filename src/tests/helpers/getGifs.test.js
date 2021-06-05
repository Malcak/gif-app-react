import { getGif } from '../../helpers/getGifs';

describe('tests in helper getGifs', () => {
  test('should return a total of 10 items', async () => {
    const gifs = await getGif('One punch');
    expect(gifs.length).toBe(10);
  });
  test('should return a total of 0 items', async () => {
    const gifs = await getGif('');
    expect(gifs.length).toBe(0);
  });
});
