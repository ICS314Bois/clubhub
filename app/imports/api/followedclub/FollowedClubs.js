import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const FollowedClubs = new Mongo.Collection('FollowedClubs');

/** Define a schema to specify the structure of each document in the collection. */
const FollowedClubsSchema = new SimpleSchema({
  ClubName: String,
  Type: String,
  ContactName: String,
  Email: String,
  Website: { type: String, optional: true },
  RIOEmail: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
FollowedClubs.attachSchema(FollowedClubsSchema);

/** Make the collection and schema available to other code. */
export { FollowedClubs, FollowedClubsSchema };
