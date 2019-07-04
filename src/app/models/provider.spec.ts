import { Provider } from './provider';

describe('Provider', () => {
  it('should create an instance', () => {
    expect(new Provider(String, String, String, Number)).toBeTruthy();
  });
});
