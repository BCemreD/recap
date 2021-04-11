import { HiddenCreditCardNoPipe } from './hidden-credit-card-no.pipe';

describe('HiddenCreditCardNoPipe', () => {
  it('create an instance', () => {
    const pipe = new HiddenCreditCardNoPipe();
    expect(pipe).toBeTruthy();
  });
});
