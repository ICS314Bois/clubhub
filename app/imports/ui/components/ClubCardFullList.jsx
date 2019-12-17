import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class ClubCardFullList extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.club.clubName}</Card.Header>
            <Card.Meta>{this.props.club.type}</Card.Meta>
            <Card.Meta>{this.props.club.contactName}</Card.Meta>
            <Card.Meta>{this.props.club.email}</Card.Meta>
          </Card.Content>
        </Card>
    );
  }
}

ClubCardFullList.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(ClubCardFullList);
