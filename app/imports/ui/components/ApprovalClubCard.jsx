import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Dropdown } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Clubs }   from '../../api/club/Clubs';
import { OwnedClubs } from '../../api/ownedclub/OwnedClubs';
import { Requests } from '../../api/request/Requests';
import { Roles } from 'meteor/alanning:roles';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';
class ApprovalClubCard extends React.Component {

  approve() {
    const clubName = this.props.request.clubName;
    const type = this.props.request.type;
    const contactName = this.props.request.contactName;
    const email = this.props.request.email;
    const website = this.props.request.website;
    const rioemail = this.props.request.rioemail;
    const owner = this.props.request.owner;
    swal({
      title: 'Are you sure?',
      text: 'The club will become officially recognized.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willAdd) => {
          if (willAdd) {
            Requests.remove(this.props.request._id);
            OwnedClubs.insert({clubName, type, contactName, email, website, rioemail, owner});
            Clubs.insert({clubName, type, contactName, email, website, rioemail});
            swal('The club is now official!', {
              icon: 'success',
            });
          } else {
            swal('You cancelled your approval.');
          }
        });
  }

  decline() {
    const clubName = this.props.request.clubName;
    swal({
      text: clubName + ' will be deleted from requests.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            Requests.remove(this.props.request._id);
            swal(clubName + ' has been declined.', {
              icon: 'success',
            });
          } else {
            swal(clubName + ' is still pending.');
          }
        });
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.request.clubName}</Card.Header>
            <Card.Meta>{this.props.request.type}</Card.Meta>
          </Card.Content>
          <Card.Content>{this.props.request.contactName}</Card.Content>
          <Card.Content>{this.props.request.email}</Card.Content>

            {Roles.userIsInRole(Meteor.userId(), 'clubAdmin') ? (
                <Button color={'grey'} >
                  Pending
                </Button>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'superAdmin') ? (
                <Button color='green'onClick={() => this.approve()}>
                  Accept
                </Button>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'superAdmin') ? (
                <Button color='red' onClick={() => this.decline()}>
                  Decline
                </Button>
            ) : ''}
        </Card>
    );
  }
}

ApprovalClubCard.propTypes = {
  request: PropTypes.object.isRequired,
};

export default withTracker(() => {
  const subscription2 = Meteor.subscribe('OwnedClubsClubAdmin');
  const subscription3 = Meteor.subscribe('OwnedClubsSuperAdmin');
  const subscription4 = Meteor.subscribe('RequestsSuperAdmin');
  return {
    ready: subscription2.ready() && subscription3.ready() && subscription4.ready(),
  };
})(ApprovalClubCard);
