import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class ClubCardFullList extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.club.ClubName}</Card.Header>
            <Card.Meta>{this.props.club.Type}</Card.Meta>
            <Card.Meta>{this.props.club.ContactName}</Card.Meta>
            <Card.Meta>{this.props.club.Email}</Card.Meta>
          </Card.Content>
        </Card>
    );
  }
}

ClubCardFullList.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(ClubCardFullList);
