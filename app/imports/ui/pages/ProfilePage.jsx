import React from 'react';
import { _ } from 'meteor/underscore';
import { Card, Feed, Grid, Header, Image, List, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import ClubCard from '../components/ClubCard';
import FollowedClubCard from '../components/FollowedClubCard';
import ClubEvent from '../components/ClubEvent';
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
                {this.randomClubs().map((club, index) =>
                    <ClubCard key={index} club={club}/>)}
              </Card.Group>
            </Grid.Column>

            <Grid.Column width={9}>
              {/*Clubs list
              - Displays the clubs that your are subscribed to
            */}
              <Header as={'h2'} inverted>Clubs</Header>
              <hr/>
              <Card.Group>
                {this.props.followedclubs.map((followedclub, index) =>
                    <FollowedClubCard key={index} followedclub={followedclub}/>)}
              </Card.Group>
            </Grid.Column>

            <Grid.Column width={4}>
              {/*Club Notifications
              - Displays messages created by club owners
            */}
              <Header as={'h2'} inverted>Club Notifications</Header>
              <hr/>
              <Card>
                <Card.Content>
                  <Feed>
                    {this.props.followedclubs.map((followedclub, index) =>
                        <ClubEvent key={index} followedclub={followedclub}/>)}
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
  const subscription2 = Meteor.subscribe('FollowedClubs');
  return {
    clubs: Clubs.find({}).fetch(),
    followedclubs: FollowedClubs.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ProfilePage);