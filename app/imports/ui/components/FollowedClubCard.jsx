import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

class FollowedClubCard extends React.Component {
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
            FollowedClubs.remove(docID);
            swal('Club deleted!', {
              icon: 'success',
            });
          } else {
            swal('Canceled');
          }
        });
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.club._id.ClubName}</Card.Header>
            <Card.Meta>{this.props.club._id.Type}</Card.Meta>
          </Card.Content>
          <Card.Content>
            {this.props.club._id.ContactName}
          </Card.Content>
          <Card.Content>
            {this.props.club._id.Email}
          </Card.Content>
          <Button color={'red'} icon onClick={() => this.removeClub(this.props.club._id)}>
            Unfollow
          </Button>
        </Card>
    );
  }
}

FollowedClubCard.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(FollowedClubCard);
