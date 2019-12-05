import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card  } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

class FollowedClubCard extends React.Component {
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
          <Button color={'red'} icon onClick={() => this.removeItem(this.props.club._id)}>
            Unfollow
          </Button>
        </Card>
    );
  }
}

FollowedClubCard.propTypes = {
  FollowedClubs: PropTypes.object.isRequired,
};

export default withRouter(FollowedClubCard);