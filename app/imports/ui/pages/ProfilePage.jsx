import React from 'react';
import { _ } from 'meteor/underscore';
import { Card, Feed, Grid, Header, Image, List, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import ClubCard from '../components/ClubCard';
import { Clubs } from '../../api/club/Club';
import ProfileClubCard from '../components/ProfileClubCard';

/** A simple static component to render some text for the landing page. */
class ProfilePage extends React.Component {
  render(){
    return (this.props.ready) ? this.renderPage() : <Loader active>Loading</Loader>;
  }

  renderPage() {
    return (
        <div className={'sunset-background'}>
        <Grid padded={'horizontally'} relaxed={'very'} columns={3}>
            <Grid.Column width={3}>
              {/*Interests List
                - Used for determining what club recommendations will appear
              */}
            <Header inverted as={'h2'} >Interests</Header>
            <hr/>
            <List bulleted size={'large'}>
              <List.Item>Music</List.Item>
              <List.Item>Media</List.Item>
              <List.Item>Art</List.Item>
            </List>
              {/*Recommendations
                - Picks out random clubs to display onto the user's page
              */}
            <Header inverted as={'h2'}>Recommendations</Header>
            <hr/>
            <Card.Group>
              {this.props.clubs.map((club, index) => <ClubCard key={index} club={club}/>)}
            </Card.Group>
          </Grid.Column>

          <Grid.Column width={9}>
            {/*Clubs list
              - Displays the clubs that your are subscribed to
            */}
            <Header inverted as={'h2'}>Clubs</Header>
            <hr/>
            <Card.Group>
              {this.props.clubs.map((club, index) => <ProfileClubCard key={index} club={club}/>)}
            </Card.Group>
          </Grid.Column>

          <Grid.Column width={4}>
            {/*Club Notifications
              - Displays messages created by club owners
            */}
            <Card>
              <Card.Content>
                <Card.Header>Club Notifications</Card.Header>
              </Card.Content>
              <Card.Content>
                <Feed>
                  <Feed.Event>
                    <Feed.Label image='/images/meteor-logo.png' />
                    <Feed.Content>
                      <Feed.Date content='1 day ago' />
                      <Feed.Summary>
                        <a>Anime Club</a> meeting to be held on September 27 in Kyukendall Hall 305.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ProfilePage.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Clubs');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ProfilePage);