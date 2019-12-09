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
  if (this.userId === FollowedClubs.User && FollowedClubs.Following) {
    return Clubs.find();
  }
  return this.ready();
});

Meteor.publish('clubAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'clubAdmin') && Clubs.Email === this.userId) {
    return Clubs.find();
  }
  return this.ready();
});

Meteor.publish('superAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'superAdmin')) {
    return Clubs.find();
  }
  return this.ready();
});
