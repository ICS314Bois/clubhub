import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '../../api/club/Club';

class ClubCard extends React.Component {
  removeItem(docID) {
    swal({
      title: 'Warning!',
      text: 'Once deleted, you will not be able to recover this club card!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((deleteThis) => {
          if (deleteThis) {
            Clubs.remove(docID);
            swal('Club Deleted', {
              icon: 'success',
            });
          } else {
            swal('Canceling...');
          }
        });
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            {Roles.userIsInRole(Meteor.userId(), 'superAdmin') ? (
                <Button
                    icon='delete'
                    floated='right'
                    onClick={() => this.removeItem(this.props.club._id)}
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
