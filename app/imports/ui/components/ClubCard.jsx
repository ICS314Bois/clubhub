import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card  } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

class ClubCard extends React.Component {

  follow() {
    const clubName = this.props.club.ClubName;
    const type = this.props.club.Type;
    const contactName = this.props.club.ContactName;
    const contactEmail = this.props.club.ContactEmail;
    const website = this.props.club.Website;
    const rioemail = this.props.club.RIOEmail;
    const owner = Meteor.user().username;
    FollowedClubs.insert(
        {
          clubName,
          type,
          contactName,
          contactEmail,
          website,
          rioemail,
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('You are now following ' + clubName + '!', 'success');
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
          <Button color={'green'} icon onClick={() => this.follow()}>
            Follow
          </Button>
        </Card>
    );
  }
}

ClubCard.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(ClubCard);
