import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card  } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Button, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '../../api/club/Clubs';
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
            OwnedClubs.insert({ clubName, type, contactName, email, website, rioemail, owner });
            Clubs.insert({ clubName, type, contactName, email, website, rioemail });
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
            <Card.Header>{this.props.club.ClubName}</Card.Header>
            <Card.Meta>{this.props.club.Type}</Card.Meta>
          </Card.Content>
          <Card.Content>
            {this.props.club.ContactName}
          </Card.Content>
          <Card.Content>
            {this.props.club.Email}
          </Card.Content>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </Card>
    );
  }
}

ApprovalClubCard.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(ApprovalClubCard);
