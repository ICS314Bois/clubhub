import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import SearchComponent from '../components/SearchComponent';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div>
        <SearchComponent/>
          <Grid container columns='four' className='footer'>
            <Grid.Column>
              <Header as='h3' >
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
              <Header as='h3'>
                <Icon name='pencil alternate' size='small'/>
                <Header.Content>Feedback</Header.Content>
                <hr/>
              </Header>
                <p>
                  As being on the early development side, feedback is much appreciated as there is always room
                  for improvement. Click this link to be directed to the feedback page.
                </p>
            </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default Landing;
