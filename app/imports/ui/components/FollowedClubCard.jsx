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
            <Card.Header>{this.props.FollowedClubs.ClubName}</Card.Header>
            <Card.Meta>{this.props.FollowedClubs.Type}</Card.Meta>
          </Card.Content>
          <Card.Content>
            {this.props.FollowedClubs.ContactName}
          </Card.Content>
          <Card.Content>
            {this.props.FollowedClubs.Email}
          </Card.Content>
          <Button color={'red'} icon onClick={() => this.removeItem(this.props.FollowedClubs._id)}>
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
