import React from 'react';
import { Button, Container, Grid, Header, Icon } from 'semantic-ui-react';
import Link from 'react-router-dom/Link';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className={'sunset-background'}>
        <Container className='search-bar'>
          <Grid>
            <Grid.Row centered>
              <Header as={'h1'} size={'extra large'} inverted>
                <div className={'tomorrow-font'}>
                  Clubs Of Manoa
                </div>
              </Header>
            </Grid.Row>
            <Grid.Row centered>
              <Header size={'medium'} inverted>
                <div className={'tomorrow-font'}>
                  More than 200 current Registered Independent Organizations (RIOs) at the University
                of Hawaiʻi at Mānoa serve the campus and greater community by providing leadership development for
                students and by promoting community spirit, activism, public service, and social, recreational, and
                  cultural interaction among UHM students, faculty, and staff.
                </div>
              </Header>

              <Header size={'medium'} inverted>
                <div className={'tomorrow-font'}>Student Life & Development values programs and services that complement all
                students' educational development and support the development and growth of Registered Independent
                Organizations. RIOs provide a laboratory of citizenship for training students in leadership and social
                responsibility. RIOs afford students the opportunity to practice decision-making skills, develop
                interpersonal communication skills, learn to reduce conflict and solve problems, develop group
                management skills, and express opinions and thoughts clearly.
                </div>
              </Header>
            </Grid.Row>
            <Grid.Row centered>

            </Grid.Row>
            <Grid.Row centered>
              <Button animated='vertical'>
                <Button.Content hidden>
                  <Icon className={'rightarrow'} />
                </Button.Content>
                <Button.Content visible><a><Link className='tomorrow-font' exact to='/searchpage'>
                  Find a club now!
                </Link></a></Button.Content>
              </Button>
            </Grid.Row>
          </Grid>
        </Container>
        </div>
    );
  }
}

export default Landing;
