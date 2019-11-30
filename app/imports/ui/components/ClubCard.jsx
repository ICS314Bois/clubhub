import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
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
            {this.props.club.ContactEmail}
          </Card.Content>
        </Card>
    );
  }
}

ClubCard.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(ClubCard);
