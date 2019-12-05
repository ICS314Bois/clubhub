import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Clubs } from '../../api/club/Club.js';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/**General Club data**/
function addClub(data) {
  console.log(`  Adding: ${data.ClubName} (${data.owner})`);
  Clubs.insert(data);
}


if (Clubs.find().count() === 0) {
  if (Meteor.settings.clubData) {
    console.log('Creating Club data.');
    Meteor.settings.clubData.map(data => addClub(data));
  }
}
