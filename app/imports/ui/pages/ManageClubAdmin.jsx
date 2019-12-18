import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Header, Container, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ApprovalClubCard from '../components/ApprovalClubCard';
import OwnedClubCard from '../components/OwnedClubCard';
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
              {this.props.requests.map((request, index) => <ApprovalClubCard key={index} request={request}/>)}
            </Card.Group>
            <Header as={'h1'} inverted>Your Approved Clubs</Header>
            <Card.Group>
              {this.props.ownedclubs.map((club, index) => <OwnedClubCard key={index} club={club}/>)}
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
  const subscription = Meteor.subscribe('OwnedClubsClubAdmin');
  return {
    requests: Requests.find({}).fetch(),
    ownedclubs: OwnedClubs.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ManageClubAdmin);