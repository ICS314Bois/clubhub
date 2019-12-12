import { Clubs } from '../../api/club/Club.js';


const clubData = JSON.parse(Assets.getText('club.json'));

function addClub(data) {
  console.log(`  Adding: ${data.ClubName} (${data.owner})`);
  Clubs.insert(data);
}

if (Clubs.find().count() === 0) {
  if (clubData) {
    console.log('Creating Club data.');
    clubData.map(data => addClub(data));
  }
}
