import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '../../api/club/Club';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';
import { Requests} from '../../api/request/Requests';

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

/** Requested Clubs **/
Meteor.publish('RequestsClubAdmin', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Requests.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish('RequestsSuperAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'superAdmin')) {
    return Requests.find();
  }
  return this.ready();
});
