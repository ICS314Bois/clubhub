import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

class FollowedClubCard extends React.Component {

  removeItem(docID) {
    const clubName = this.props.followedclub.clubName
    swal({
      text: 'You will no longer be following ' + clubName + '.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            FollowedClubs.remove(docID);
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
            <Card.Header>{this.props.followedclub.clubName}</Card.Header>
            <Card.Meta>{this.props.followedclub.type}</Card.Meta>
          </Card.Content>
          <Card.Content>
            {this.props.followedclub.contactName}
          </Card.Content>
          <Card.Content>
            {this.props.followedclub.email}
          </Card.Content>
          <Button color={'red'} icon onClick={() => this.removeItem(this.props.followedclub._id)}>
            Unfollow
          </Button>
        </Card>
    );
  }
}

FollowedClubCard.propTypes = {
  followedclub: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withTracker(() => {
  const subscription = Meteor.subscribe('FollowedClubs');
  return {
    ready: subscription.ready(),
  };
})(FollowedClubCard);