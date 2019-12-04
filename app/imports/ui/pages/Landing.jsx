import React from 'react';
import { Button, Container, Grid, Header, Icon, Search } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className={'sunset-background'}>
        <Container className='search-bar'>
          <Grid>
            <Grid.Row centered>
              <Header as='h1' inverted>Clubs Of Manoa</Header>
            </Grid.Row>
            <Grid.Row centered>
              <Header size={'medium'} inverted>More than 200 current Registered Independent Organizations (RIOs) at the University
                of Hawaiʻi at Mānoa serve the campus and greater community by providing leadership development for
                students and by promoting community spirit, activism, public service, and social, recreational, and
                cultural interaction among UHM students, faculty, and staff.</Header>

              <Header size={'medium'} inverted>Student Life & Development values programs and services that complement all
                students' educational development and support the development and growth of Registered Independent
                Organizations. RIOs provide a laboratory of citizenship for training students in leadership and social
                responsibility. RIOs afford students the opportunity to practice decision-making skills, develop
                interpersonal communication skills, learn to reduce conflict and solve problems, develop group
                management skills, and express opinions and thoughts clearly.</Header>
            </Grid.Row>
            <Grid.Row centered>
              <Search
                  placeholder='Start your club search...'
                  icon='search icon'
              />
            </Grid.Row>
            <Grid.Row centered>
              <Button animated='vertical'>
                <Button.Content hidden>
                  <Icon className={'user'} />
                </Button.Content>
                <Button.Content visible>Sign In</Button.Content>
              </Button>
            </Grid.Row>
          </Grid>
        </Container>
        </div>
    );
  }
}

export default Landing;
