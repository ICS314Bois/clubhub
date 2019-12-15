import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Requests = new Mongo.Collection('Requests');

/** Define a schema to specify the structure of each document in the collection. */
const RequestsSchema = new SimpleSchema({
  ClubName: String,
  Type: {
    type: String,
    allowedValues: ['Academic', 'Professional', 'Religious', 'Spiritual', 'Political', 'Sports', 'Leisure',
      'Fraternity', 'Sorority', 'Ethnic', 'Culture', 'Service', 'Recreational'],
    defaultValue: 'Academic'
  },
  ContactName: String,
  Email: String,
  Website: String,
  RIOemail: String
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Requests.attachSchema(RequestsSchema);

/** Make the collection and schema available to other code. */
export { Requests, RequestsSchema };