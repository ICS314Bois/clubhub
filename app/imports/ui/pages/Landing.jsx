import React from 'react';
import { Grid, Search, Button, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background'>
          <Grid container className='search-bar'>
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
        </div>
    );
  }
}

export default Landing;
