import { getData } from './api.js';

describe('api', () => {
  it('should work', () => {
    expect(getData('test')).toEqual('api');
  });
});
