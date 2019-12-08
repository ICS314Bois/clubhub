import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '../../api/club/Club';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

/** Used to display all clubs */
Meteor.publish('Clubs', function publish() {
    return Clubs.find();
});

/** General logged-in user */
Meteor.publish('FollowedClubs', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return FollowedClubs.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'clubAdmin')) {
    return Clubs.find();
  }
  return this.ready();
});

Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'superAdmin')) {
    return Clubs.find();
  }
  return this.ready();
});
