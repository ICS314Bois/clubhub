import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Clubs } from '../../api/club/Clubs';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';
import { Requests} from '../../api/request/Requests';
import { OwnedClubs } from '../../api/ownedclub/OwnedClubs';

/** Stuff Examples **/
/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Stuff', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.find();
  }
  return this.ready();
});

/** Used to display all clubs */
Meteor.publish('Clubs', function publish() {
  return Clubs.find();
});

/** User Followed Clubs **/
Meteor.publish('FollowedClubs', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return FollowedClubs.find({ owner: username });
  }
  return this.ready();
});

/** Club requests for club admins **/
Meteor.publish('RequestsClubAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'clubAdmin')) {
    const username = Meteor.users.findOne(this.userId).username;
    return Requests.find({ owner: username });
  }
  return this.ready();
});

/** Club Requests for super admin **/
Meteor.publish('RequestsSuperAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'superAdmin')) {
    return Requests.find();
  }
  return this.ready();
});

/** Owned clubs by club admin**/
Meteor.publish('OwnedClubs', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'clubAdmin')) {
    const username = Meteor.users.findOne(this.userId).username;
    return OwnedClubs.find({ owner: username });
  }
  return this.ready();
});