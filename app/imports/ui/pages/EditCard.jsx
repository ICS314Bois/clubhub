import React from 'react';
import { Grid, Segment, Header, Loader, Form } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Clubs } from '../../api/club/Clubs';

const cardSchema = new SimpleSchema({
  ClubName: String,
  ContactName: String,
  Type: [{
    type: String,
    label: 'Type: ',
  }],
  Email: String,
  Website: { type: String, optional: true },
  Image: { type: String, optional: true },
  Description: { type: String, optional: true },
  RIOEmail: { type: String, optional: true },
});

class EditCard extends React.Component {
  submit(data) {
    const {
      ClubName, ContactName, Type, Email, Website, Image, Description, RIOEmail, _id,
    } = data;
    console.log(data);
    Clubs.update(_id, {
          $set: {
            ClubName,
            Type,
            ContactName,
            Email,
            Website,
            Image,
            Description,
            RIOEmail,
          },
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item updated successfully', 'success');
          }
        });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className='tomorrow-font'>
          <Grid container centered>
            <Grid.Column>
              <Header as='h3' textAlign='center'>Edit Card</Header>
              <br/>
              <AutoForm schema={cardSchema} onSubmit={data => this.submit(data)} model={this.props.doc}>
                <Segment>
                  <Form.Group widths='equal'>
                    <TextField name='ClubName'/>
                    <TextField name='ContactName'/>
                    <TextField name='Email'/>
                    <TextField name='Website'/>
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <TextField name='Image'/>
                    <TextField name='Description'/>
                    <TextField name='RIOEmail'/>
                  </Form.Group>
                  <SelectField
                      name='Type'
                      options={[
                        { label: 'Academic', value: 'Academic' },
                        { label: 'Professional', value: 'Professional' },
                        { label: 'Athletic', value: 'Athletic' },
                        { label: 'Religious', value: 'Religious' },
                        { label: 'Spiritual', value: 'Spiritual' },
                        { label: 'Political', value: 'Political' },
                        { label: 'Sports', value: 'Sports' },
                        { label: 'Leisure', value: 'Leisure' },
                        { label: 'Service', value: 'Service' },
                        { label: 'Fraternity', value: 'Fraternity' },
                        { label: 'Sorority', value: 'Soroity' },
                        { label: 'Recreational', value: 'Recreational' },
                        { label: 'Student Affairs', value: 'Student Affairs' },
                        { label: 'Ethnic', value: 'Ethnic' },
                        { label: 'Cultural', value: 'Cultural' },
                        { label: 'Honorary Society', value: 'Honorary Society' },
                      ]}
                  />
                  <SubmitField value='submit'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

EditCard.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clubs');
  return {
    doc: Clubs.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditCard);
