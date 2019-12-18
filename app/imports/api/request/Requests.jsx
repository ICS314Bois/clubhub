import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Requests = new Mongo.Collection('Requests');

/** Define a schema to specify the structure of each document in the collection. */
const RequestsSchema = new SimpleSchema({
  clubName: String,
  type: [{ type: String, optional: true }],
  contactName: String,
  email: String,
  website: String,
  rioemail: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Requests.attachSchema(RequestsSchema);

/** Make the collection and schema available to other code. */
export { Requests, RequestsSchema };