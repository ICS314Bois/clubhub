import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class ProfilePage extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container column={3}>

          <Grid.Column width={4}>
            <Image src="/images/meteor-logo.png"/>
            <Header as={'h1'}>Rusty Jacinto</Header>
            <Header as={'h3'}>This is a bio!</Header>
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>Interests</h1>
            <hr/>
            <h1>Clubs</h1>
            <hr/>
          </Grid.Column>

          <Grid.Column width={4}>
            <h1>Notifications</h1>
            <hr/>
          </Grid.Column>

        </Grid>
    );
  }
}

export default ProfilePage;