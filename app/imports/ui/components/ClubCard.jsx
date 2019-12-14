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
    if (FollowedClubs.findOne({ MenuId: this.props.club._id })) {
      return true;
    }
    return false;
  }

  follow() {
    const clubName = this.props.clubs.ClubName;
    const type = this.props.clubs.Type;
    const contactName = this.props.clubs.ContactName;
    const email = this.props.clubs.Email;
    const website = this.props.clubs.Website;
    const rioemail = this.props.clubs.RIOEmail;
    FollowedClubs.insert({
          clubName,
          type,
          contactName,
          email,
          website,
          rioemail,
          user,
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

  unfollow() {
    swal({
      title: 'Are you sure?',
      text: 'It will disappear from your Favorites page, but you can re-favorite at any time in the Food Options page!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            FollowedClubs.remove(FollowedClubs.findOne({ MenuId: this.props.followedClubs._id })._id);
            this.forceUpdate();
            swal('Poof! You unfavorited this item!', {
              icon: 'success',
            });
          } else {
            swal('You canceled unfavoriting!');
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
  clubs: PropTypes.object.isRequired,
  followedClubs: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withTracker(() => {
  clubs: Clubs.find({}).fetch();
  followedClubs: FollowedClubs.find({}).fetch();
  const subscription = Meteor.subscribe('FollowedClubs');
  return {
    ready: subscription.ready(),
  };
})(ClubCard);