import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

class Bottom extends React.Component {
  render() {
    const paddingStyle = { paddingTop: '20px' };
    return (
      <Grid container style={paddingStyle} columns='four' className='footer'>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <Header as='h3'>
            <Icon name='users' size='small'/>
            <Header.Content>About Us</Header.Content>
            <hr/>
          </Header>
            <p>
              As a team of 3, we were challenged to create a hub for UH Manoa clubs. We hope to make the searching
              process a bit more easier and user-friendly.
            </p>
        </Grid.Column>
        <Grid.Column>
          <Header as='h3'textAlign='right'>
            <Icon name='pencil alternate' size='small'/>
            <Header.Content>Feedback</Header.Content>
            <hr/>
          </Header>
            <p>
              As being on the early development side, feedback is much appreciated as there is always room
              for improvement. Click this link to be directed to the feedback page.
            </p>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    );
  }
}

export default Bottom;
