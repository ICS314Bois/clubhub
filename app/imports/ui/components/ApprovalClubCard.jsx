import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card  } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class ApprovalClubCard extends React.Component {
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
          <div className='ui three buttons'>
            <Button>
              Approve
            </Button>
            <Button>
              Decline
            </Button>
            {Meteor.user('superAdmin') ? (
                <Button color='grey' icon onClick={() => this.follow()}>
                  Delete
                </Button>
              ) : ''
            }
          </div>
        </Card>
    );
  }
}

ApprovalClubCard.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(ApprovalClubCard);
