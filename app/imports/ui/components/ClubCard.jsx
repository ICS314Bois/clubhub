import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';
import { Clubs } from '../../api/club/Clubs';

class ClubCard extends React.Component {

  isFollowed() {
    if (FollowedClubs.findOne({ clubid: this.props.club._id })) {
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
    const clubid = this.props.club._id;
    const owner = Meteor.user().username;
    FollowedClubs.insert({ clubName, type, contactName, email, website, rioemail, clubid, owner, },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Now following ' + clubName + '!', 'success');
            this.forceUpdate();
          }
        });
  }

  unfollow() {
    const clubName = this.props.club.ClubName;
    swal({
      text: 'You will no longer be following ' + clubName + '.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            FollowedClubs.remove(FollowedClubs.findOne({ clubid: this.props.club._id })._id);
            this.forceUpdate();
            swal('You are no longer following ' + clubName + '.', {
              icon: 'success',
            });
          } else {
            swal('You are still following ' + clubName + '.');
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
          <Card.Content>{this.props.club.ContactName}</Card.Content>
          <Card.Content>{this.props.club.Email}</Card.Content>
          <Card.Content><a href={this.props.club.Website}>{this.props.club.Website}</a></Card.Content>
          {Meteor.user() && !this.isFollowed() ? (
              <Button color='green' icon onClick={() => this.follow()}>
                Follow
              </Button>
          ) : ''}
          {Meteor.user() && this.isFollowed() ? (
              <Button color='red' icon onClick={() => this.unfollow()}>
                Unfollow
              </Button>
          ) : ''}
        </Card>
    );
  }
}

ClubCard.propTypes = {
  followedClubs: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  followedClubs: FollowedClubs.find({}).fetch();
  const subscription = Meteor.subscribe('FollowedClubs');
  return {
    ready: subscription.ready(),
  };
})(ClubCard);