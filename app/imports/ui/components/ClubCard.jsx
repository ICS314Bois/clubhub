import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

class ClubCard extends React.Component {

  isFollowed() {
    if (FollowedClubs.findOne({ MenuId: this.props.club._id })) {
      return true;
    }
    return false;
  }

  follow() {
    const clubName = this.props.club.ClubName;
    const type = this.props.club.Type;
    const contactName = this.props.club.ContactName;
    const email = this.props.club.Email;
    const website = this.props.club.Website;
    const rioemail = this.props.club.RIOEmail;
    FollowedClubs.insert({
          clubName,
          type,
          contactName,
          email,
          website,
          rioemail,
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Now following ' + clubName + '!', 'success');
            this.forceUpdate();
          }
        });
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.club.ClubName}</Card.Header>
            <Card.Meta>{this.props.club.Type}</Card.Meta>
          </Card.Content>
          <Card.Content>
            {this.props.club.ContactName}
          </Card.Content>
          <Card.Content>
            {this.props.club.Email}
          </Card.Content>
          {Meteor.user() && !this.isFollowed() ? (
              <Button color='green' icon onClick={() => this.follow()}>
                Follow
              </Button>
          ) : ''}
          {Meteor.user() && this.isFollowed() ? (
              <Button color='red' icon onClick={() => this.follow()}>
                Unfollow
              </Button>
          ) : ''}

        </Card>
    );
  }
}

ClubCard.propTypes = {
  club: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withTracker(() => {
  const subscription = Meteor.subscribe('FollowedClubs');
  return {
    ready: subscription.ready(),
  };
})(ClubCard);