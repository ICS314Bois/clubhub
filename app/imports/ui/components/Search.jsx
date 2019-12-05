import React from 'react';
import { Container, Grid, Search, Button, Icon, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class SearchComponent extends React.Component {
  render() {
    const fontStyle = { fontFamily: 'Gill Sans, sans-serif' };

    return (
        <div style={fontStyle}>
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
                <Button animated='vertical' as={NavLink} exact to="/signup">
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

export default SearchComponent;
