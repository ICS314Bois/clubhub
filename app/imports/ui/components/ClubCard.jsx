import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';

class ClubCard extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            {Roles.userIsInRole(Meteor.userId(), 'superAdmin') ? (
                <Button
                    icon='delete'
                    floated='right'
                />
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'superAdmin') ? (
                <Link floated='right' to={`/editcard/${this.props.club._id}`}>
                  Edit
                </Link>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'clubAdmin') && (Meteor.user().username === this.props.club.Email) ? (
                <Link floated='right' to={`/editcard/${this.props.club._id}`}>
                  Edit
                </Link>
            ) : ''}
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
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(ClubCard);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
