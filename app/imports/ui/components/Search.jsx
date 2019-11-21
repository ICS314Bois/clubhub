import React from 'react';
import { Container, Grid, Search, Button, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class SearchComponent extends React.Component {
  render() {
    const fontStyle = { fontFamily: 'Open Sans' };

    return (
        <div style={fontStyle} className='landing-background'>
          <Container className='search-bar'>
            <Grid>
              <Grid.Row centered>
                <Header as='h1'>Clubs Of Manoa</Header>
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
                  <Icon name='user' />
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

export default SearchComponent;
