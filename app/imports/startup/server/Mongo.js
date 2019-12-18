import { Clubs } from '../../api/club/Clubs.js';

const clubData = JSON.parse(Assets.getText('club.json'));

function addClub(data) {
  const ClubName = data.ClubName;
  const ContactName = data.ContactName;
  const Email = data.Email;
  const Website = data.Website;
  const RIOEmail = data.RIOEmail;
  const cType = data.Type;
  console.log(cType);
  const Type = cType.split('/');
  console.log(ClubName, ContactName, Email, Website, RIOEmail, Type);
  console.log(`  Adding: ${data.ClubName} (${data.owner})`);
  Clubs.insert({ ClubName, ContactName, Type, Email, Website, RIOEmail });
}

if (Clubs.find().count() === 0) {
  if (clubData) {
    console.log('Creating Club data.');
    clubData.map(data => addClub(data));
  }
}
