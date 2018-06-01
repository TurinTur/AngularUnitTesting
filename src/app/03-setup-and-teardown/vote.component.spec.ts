import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent   // arrange. Puesto aqui para no tener quer ponerlo en cada test
  beforeEach( () => {
    component =  new VoteComponent();         // reinicializo en cada test.
  } )
  //afterEach
  //afterAll,beforeAll   executed once before or after all tests

  it('should increment totalVotes when upvoted', () => {
    //let component = new VoteComponent();    // arrange
    component.upVote();                     // act
    expect(component.totalVotes).toBe(1);   // assert
  });

  it('should decrement totalVotes when downvotes', () => {
    //let component = new VoteComponent();    // arrange
    component.downVote();                     // act
    expect(component.totalVotes).toBe(-1);   // assert
  });

});
