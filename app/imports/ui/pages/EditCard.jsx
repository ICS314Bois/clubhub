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
import { Clubs } from '../../api/club/Club';

const cardSchema = new SimpleSchema({
  ClubName: String,
  Type: { type: String, optional: true },
  ContactName: String,
  Email: String,
  Website: { type: String, optional: true },
  Image: { type: String, optional: true },
  RIOEmail: { type: String, optional: true },
});

class EditCard extends React.Component {
  submit(data) {
    const {
      ClubName, ContactName, Type, Email, Website, Image, RIOEmail, _id,
    } = data;
    Clubs.update(_id, {
          $set: {
            ClubName,
            ContactName,
            Type,
            Email,
            Website,
            Image,
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
                    <TextField name='Website'/>
                  </Form.Group>
                  <Form.Group Widths='equal'>
                    <Form.Field
                        label='Academic'
                        value='Academic'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Professional'
                        value='Professional'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Athletic'
                        value='Athletic'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Religious'
                        value='Religious'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Spiritual'
                        value='Spiritual'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field label='Political'
                                value='Political'
                                type='checkbox'
                                control='input'
                    />
                  </Form.Group>
                  <Form.Group width='equal'>
                    <Form.Field
                        label='Sports'
                        value='Sports'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Leisure'
                        value='Leisure'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Service'
                        value='Service'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Fraternity'
                        value='Fraternity'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Sorority'
                        value='Sorority'
                        type='checkbox'
                        control='input'
                    />
                    <Form.Field
                        label='Recreational'
                        value='Recreational'
                        type='checkbox'
                        control='input'
                    />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <TextField name='Image'/>
                    <TextField name='RIOEmail'/>
                  </Form.Group>
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
