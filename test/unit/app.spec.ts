import {App} from '../../src/app';

describe('the app', () => {
  let target: App;
  beforeEach(() => {
    this.target = new App();
 });
  it('users length', (done) => {
    expect(this.target.users.length).toBe(0);
    this.target.userRequest.then(() => {
      expect(this.target.users.length).toBe(10);
      done();
    });
  });
});
