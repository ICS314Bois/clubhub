import React from 'react';
import SearchComponent from '../components/Search';
import BottomLanding from '../components/BottomLanding';
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
