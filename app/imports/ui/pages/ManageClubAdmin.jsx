import React from 'react';
import { Card, Header, Container, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ApprovalClubCard from '../components/ApprovalClubCard';
import ClubCardFullList from '../components/ClubCardFullList';
import ClubCard from '../components/ClubCard';
import { Clubs } from '../../api/club/Clubs';
import { Requests } from '../../api/request/Requests';
import { OwnedClubs } from '../../api/ownedclub/OwnedClubs';

class ManageClubAdmin extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Loading</Loader>;
  }

  renderPage() {
    const padding = { paddingTop: '10px' };
    return (
        <div className={'general-background'}>
          <Container style={padding}>
            <Header as='h1' inverted>Requests</Header>
            <hr/>
            <Card.Group>
              {this.props.requests.map((club, index) => <ApprovalClubCard key={index} club={club}/>)}
            </Card.Group>
            <Header as={'h1'} inverted>Your Approved Clubs</Header>
            <Card.Group>
              {this.props.ownedclubs.map((club, index) => <ClubCardFullList key={index} club={club}/>)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}
/** Require an array of Stuff documents in the props. */
ManageClubAdmin.propTypes = {
  requests: PropTypes.array.isRequired,
  ownedclubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription2 = Meteor.subscribe('RequestsClubAdmin');
  const subscription = Meteor.subscribe('OwnedClubs');
  return {
    ownedclubs: OwnedClubs.find({}).fetch(),
    requests: Requests.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ManageClubAdmin);