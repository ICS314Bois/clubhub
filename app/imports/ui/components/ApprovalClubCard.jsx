import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Dropdown } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Clubs }   from '../../api/club/Clubs';
import { OwnedClubs } from '../../api/ownedclub/OwnedClubs';
import { Requests } from '../../api/request/Requests';

class ApprovalClubCard extends React.Component {

  approve() {
    const clubName = this.props.request.clubName;
    const type = this.props.request.type;
    const contactName = this.props.request.contactName;
    const email = this.props.request.email;
    const website = this.props.request.website;
    const rioemail = this.props.request.rioemail;
    const clubid = this.props.request._id;
    const owner = this.props.request.owner;
    OwnedClubs.insert({ clubName, type, contactName, email, website, rioemail, clubid, owner, },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', clubName + ' has been approved!', 'success');
            this.forceUpdate();
          }
        });
    Clubs.insert({clubName, type, contactName, email, website, rioemail, clubid});
    Requests.remove(Requests.findOne({clubName: this.props.request.clubName}));
  }

  decline() {

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
  const subscription = Meteor.subscribe('Clubs');
  const subscription2 = Meteor.subscribe('OwnedClubsClubAdmin');
  const subscription3 = Meteor.subscribe('OwnedClubsSuperAdmin');
  const subscription4 = Meteor.subscribe('RequestsSuperAdmin');
  return {
    ready: subscription.ready() && subscription2.ready() && subscription3.ready() && subscription4.ready(),
  };
})(ApprovalClubCard);
