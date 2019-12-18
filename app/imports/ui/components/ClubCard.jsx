import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';
import { Clubs } from '../../api/club/Clubs';

class ClubCard extends React.Component {

  removeClub(docID) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, information can not be recovered!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            Clubs.remove(docID);
            swal('Club deleted!', {
              icon: 'success',
            });
          } else {
            swal('Canceled');
          }
        });
  }

  isFollowed() {
    if (FollowedClubs.findOne({ clubid: this.props.club._id })) {
      return true;
    }
    return false;
  }

  follow() {
    const clubName = this.props.club.clubName;
    const type = this.props.club.type;
    const contactName = this.props.club.contactName;
    const email = this.props.club.email;
    const website = this.props.club.website;
    const rioemail = this.props.club.rioemail;
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
            {Roles.userIsInRole(Meteor.userId(), 'superAdmin') ? (
                <Button
                    icon='delete'
                    floated='right'
                    onClick={() => this.removeClub(this.props.club._id)}
                />
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'superAdmin') ? (
                <Link floated='right' to={`/editcard/${this.props.club._id}`}>
                  Edit
                </Link>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'clubAdmin') && (Meteor.user().username === this.props.club.email) ? (
                <Link floated='right' to={`/editcard/${this.props.club._id}`}>
                  Edit
                </Link>
            ) : ''}
            <Card.Header>{this.props.club.clubName}</Card.Header>
            <Image
                size='small'
                src={this.props.club.image}
            />
            <Card.Meta>{this.props.club.type}</Card.Meta>
          </Card.Content>
          <Card.Content>{this.props.club.contactName}</Card.Content>
          <Card.Content>{this.props.club.email}</Card.Content>
          <Card.Content>{this.props.club.website}</Card.Content>
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
  club: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  followedClubs: FollowedClubs.find({}).fetch();
  const subscription = Meteor.subscribe('FollowedClubs');
  return {
    ready: subscription.ready(),
  };
})(ClubCard);