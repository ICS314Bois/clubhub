import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Clubs = new Mongo.Collection('Clubs');

/** Define a schema to specify the structure of each document in the collection. */
const ClubsSchema = new SimpleSchema({
  clubName: String,
  type: String,
  contactName: String,
  email: String,
  website: { type: String, optional: true },
  image: {
    type: String,
    defaultValue: 'https://react.semantic-ui.com/images/wireframe/image.png',
    optional: true,
  },
  rioemail: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Clubs.attachSchema(ClubsSchema);

/** Make the collection and schema available to other code. */
export { Clubs, ClubsSchema };
