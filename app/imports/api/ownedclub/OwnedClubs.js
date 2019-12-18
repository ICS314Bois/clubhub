import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const OwnedClubs = new Mongo.Collection('OwnedClubs');

/** Define a schema to specify the structure of each document in the collection. */
const OwnedClubsSchema = new SimpleSchema({
  clubName: String,
  type: {
    type: String,
    allowedValues: ['Academic', 'Professional', 'Religious', 'Spiritual', 'Political', 'Sports', 'Leisure',
      'Fraternity', 'Sorority', 'Ethnic', 'Culture', 'Service', 'Recreational'],
    defaultValue: 'Academic',
  },
  contactName: String,
  email: String,
  website: String,
  rioemail: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
OwnedClubs.attachSchema(OwnedClubsSchema);

/** Make the collection and schema available to other code. */
export { OwnedClubs, OwnedClubsSchema };