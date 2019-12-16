import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const FollowedClubs = new Mongo.Collection('FollowedClubs');

/** Define a schema to specify the structure of each document in the collection. */
const FollowedClubsSchema = new SimpleSchema({
  clubName: String,
  type: String,
  contactName: String,
  email: String,
  website: { type: String, optional: true },
  rioemail: { type: String, optional: true },
  clubid: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
FollowedClubs.attachSchema(FollowedClubsSchema);

/** Make the collection and schema available to other code. */
export { FollowedClubs, FollowedClubsSchema };