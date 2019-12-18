import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Button, Card, Label, Image } from 'semantic-ui-react';
import { withTracker, Link } from 'meteor/react-meteor-data';
import { FollowedClubs } from '../../api/followedclub/FollowedClubs';

class FollowedClubCard extends React.Component {

  removeItem(docID) {
    const clubName = this.props.club.clubName
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
    const padding = { paddingBottom: '10px', paddingLeft: '10px' };
    return (
        <Card>
          <Card.Description centered>
            <Image
                size='medium'
                src={this.props.club.image}
            />
          </Card.Description>
          <Card.Content>
            <Card.Header>{this.props.club.clubName}</Card.Header>
          </Card.Content>
          <Card.Description style={padding}>
            {this.props.club.type.includes('Academic') ? (
                <Label color='red'>Academic</Label>
            ) : ''}
            {this.props.club.type.includes('Professional') ? (
                <Label color='orange'>Professional</Label>
            ) : ''}
            {this.props.club.type.includes('Athletic') ? (
                <Label color='yellow'>Athletic</Label>
            ) : ''}
            {this.props.club.type.includes('Religious') ? (
                <Label color='olive'>Religious</Label>
            ) : ''}
            {this.props.club.type.includes('Spiritual') ? (
                <Label color='green'>Spiritual</Label>
            ) : ''}
            {this.props.club.type.includes('Political') ? (
                <Label color='teal'>Political</Label>
            ) : ''}
            {this.props.club.type.includes('Sports') ? (
                <Label color='blue'>Sports</Label>
            ) : ''}
            {this.props.club.type.includes('Leisure') ? (
                <Label color='violet'>Leisure</Label>
            ) : ''}
            {this.props.club.type.includes('Service') ? (
                <Label color='purple'>Service</Label>
            ) : ''}
            {this.props.club.type.includes('Fraternity') ? (
                <Label color='pink'>Fraternity</Label>
            ) : ''}
            {this.props.club.type.includes('Sorority') ? (
                <Label color='brown'>Sorority</Label>
            ) : ''}
            {this.props.club.type.includes('Recreational') ? (
                <Label color='grey'>Recreational</Label>
            ) : ''}
            {this.props.club.type.includes('Student Affairs') ? (
                <Label color='black'>Student Affairs</Label>
            ) : ''}
            {this.props.club.type.includes('Ethnic') ? (
                <Label color='violet'>Ethnic</Label>
            ) : ''}
            {this.props.club.type.includes('Cultural') ? (
                <Label color='purple'>Cultural</Label>
            ) : ''}
            {this.props.club.type.includes('Honorary Society') ? (
                <Label color='red'>Honorary Society</Label>
            ) : ''}
          </Card.Description>
          <Card.Description style={padding}><strong>Club President: </strong>{this.props.club.contactName}
          </Card.Description>
          <Card.Description style={padding}><strong>Email: </strong>{this.props.club.email}</Card.Description>
          <Card.Description style={padding}><strong>Website: </strong><Link to={this.props.club.website}>{this.props.club.website}</Link></Card.Description>
          <Card.Description style={padding}><strong>Description:</strong><br/>{this.props.club.description
          }</Card.Description>
          <Button color={'red'} icon onClick={() => this.removeClub(this.props.club._id)}>
            Unfollow
          </Button>
        </Card>
    );
  }
}

FollowedClubCard.propTypes = {
  club: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withTracker(() => {
  const subscription = Meteor.subscribe('FollowedClubs');
  return {
    ready: subscription.ready(),
  };
})(FollowedClubCard);
