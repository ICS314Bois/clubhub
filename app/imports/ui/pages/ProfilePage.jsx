import React from 'react';
import { Card, Feed, Grid, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import ClubCard from '../components/ClubCard';
import FollowedClubCard from '../components/FollowedClubCard';
import { Clubs } from '../../api/club/Clubs';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

/** A simple static component to render some text for the landing page. */
class ProfilePage extends React.Component {
  randomClubs() {
    const sampleclubs = _.sample(this.props.clubs, 5);
    console.log(sampleclubs);
    return sampleclubs;
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Loading</Loader>;
  }

  renderPage() {
    return (
        <div className={'general-background'}>
          <Grid padded={'horizontally'} relaxed={'very'} columns={3}>
            <Grid.Column width={3}>
              {/*Recommendations
                - Picks out random clubs to display onto the user's page
              */}
              <Header as={'h2'} inverted>Recommendations</Header>
              <hr/>
              <Card.Group>
                {this.randomClubs().map((club, index) => <ClubCard key={index} club={club}/>)}
              </Card.Group>
            </Grid.Column>

            <Grid.Column width={9}>
              {/*Clubs list
              - Displays the clubs that your are subscribed to
            */}
              <Header as={'h2'} inverted>Clubs</Header>
              <hr/>
              <Card.Group>
                {this.props.followedclubs.map((club, index) => <FollowedClubCard key={index} club={club}/>)}
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
                      <Feed.Label image='/images/meteor-logo.png'/>
                      <Feed.Content>
                        <Feed.Date content='1 day ago'/>
                        <Feed.Summary>

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
  followedclubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Clubs');
  return {
    clubs: Clubs.find({}).fetch(),
    followedclubs: FollowedClubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ProfilePage);