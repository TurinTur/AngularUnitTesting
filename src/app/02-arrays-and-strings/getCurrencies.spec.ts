import {getCurrencies } from './getCurrencies';

describe('currenciesGroup', function(){
  it('should include an array',() => {
      expect(getCurrencies()).toContain('USD');
      expect(getCurrencies()).toContain('AUD');
      expect(getCurrencies()).toContain('EUR');
  })
})
