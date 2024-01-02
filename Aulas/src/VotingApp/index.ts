type VotingOption = {
   numberOfVotes: number;
   option: string;
};

export class Voting {
   private _votingOptions: VotingOption[] = [];
   constructor(public details: string) {}

   addVotingOption(votingOption: VotingOption): void {
      this._votingOptions.push(votingOption);
   }

   vote(votingIndex: number): void {
      if (!this._votingOptions[votingIndex]) return;
      this._votingOptions[votingIndex].numberOfVotes++;
   }

   get votingOptions(): VotingOption[] {
      return this._votingOptions;
   }
}

class VotingApp {
   private votes: Voting[] = [];

   addVoting(voting: Voting): void {
      this.votes.push(voting);
   }

   showVoting(): void {
      for (const voting of this.votes) {
         console.log(voting.details);
         for (const voteOption of voting.votingOptions) {
            console.log(
               `${voting.votingOptions.indexOf(voteOption)}-${voteOption.option}: ${voteOption.numberOfVotes}`,
            );
         }
         console.log('');
      }
   }
}

const VoteLanguage = new Voting('Qual a sua linguagem de programação favorita?');
VoteLanguage.addVotingOption({ option: 'Python', numberOfVotes: 0 });
VoteLanguage.addVotingOption({ option: 'TypeScript', numberOfVotes: 0 });
VoteLanguage.addVotingOption({ option: 'C++', numberOfVotes: 0 });

VoteLanguage.vote(0);
VoteLanguage.vote(0);
VoteLanguage.vote(0);
VoteLanguage.vote(1);
VoteLanguage.vote(1);
VoteLanguage.vote(2);

const VoteColor = new Voting('Qual a sua cor favorita?');
VoteColor.addVotingOption({ option: 'Cyan', numberOfVotes: 0 });
VoteColor.addVotingOption({ option: 'Red', numberOfVotes: 0 });
VoteColor.addVotingOption({ option: 'Green', numberOfVotes: 0 });
VoteColor.addVotingOption({ option: 'Gray', numberOfVotes: 0 });
VoteColor.addVotingOption({ option: 'Purple', numberOfVotes: 0 });

VoteColor.vote(1);
VoteColor.vote(2);
VoteColor.vote(0);
VoteColor.vote(0);
VoteColor.vote(0);
VoteColor.vote(0);
VoteColor.vote(0);
VoteColor.vote(1);
VoteColor.vote(1);
VoteColor.vote(2);
VoteColor.vote(4);

const votingApp = new VotingApp();
votingApp.addVoting(VoteLanguage);
votingApp.addVoting(VoteColor);

votingApp.showVoting();
