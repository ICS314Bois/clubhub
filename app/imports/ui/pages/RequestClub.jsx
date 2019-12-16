import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Requests } from '../../api/request/Requests';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  clubName: String,
  type: {
    type: String,
    allowedValues: ['Academic', 'Professional', 'Religious', 'Spiritual', 'Political', 'Sports', 'Leisure',
      'Fraternity', 'Sorority', 'Ethnic', 'Culture', 'Service', 'Recreational'],
    defaultValue: 'Academic'
  },
  contactName: String,
  email: String,
  website: String,
  rioemail: String
});

/** Renders the Page for adding a document. */
class RequestClub extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { clubName, type, contactName, email, website, rioemail } = data;
    const owner = Meteor.user().username;
    Requests.insert({ clubName, type, contactName, email, website, rioemail, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Club request sent!', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <div className={'general-background'}>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Request a Club</Header>
              <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
                <Segment>
                  <TextField name='clubName'/>
                  <SelectField name='type'/>
                  <TextField name='contactName'/>
                  <TextField name='email'/>
                  <TextField name='website'/>
                  <TextField name='rioemail'/>
                  <SubmitField value={'submit'} />
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default RequestClub;