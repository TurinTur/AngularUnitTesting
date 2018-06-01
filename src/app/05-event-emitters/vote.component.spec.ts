import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes= null;
    component.voteChanged.subscribe(tv => totalVotes = tv);

    component.upVote();

    //expect(totalVotes).not.toBeNull();    // not. da acceso a lo opuesto de las aserciones normales
    expect(totalVotes).not.toBe(1);
  });
});
