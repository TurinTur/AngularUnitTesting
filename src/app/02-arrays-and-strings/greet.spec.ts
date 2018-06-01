import {greet } from './greet';

describe('greetGroup', function(){
  it('should include the name in the message',() => {
      expect(greet('jose')).toContain('jose');
  })
})
