import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card  } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class ClubCard extends React.Component {

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
          <Button color={'green'}>
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
