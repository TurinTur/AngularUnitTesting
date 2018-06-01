
// describe() una suite, un grupo de tests
// it() un spec/test

import { compute } from './compute';

describe('computeGroup', function(){
  it('should return 0 if input is negative',() => {
     const result = compute(-1)
     expect(result).toBe(0);  //Expect es una función de jasmine
  })

  it('should increment the input if it is positive',() => {
    const result = compute(1)
    expect(result).toBe(2);  //Expect es una función de jasmine
 })
})
