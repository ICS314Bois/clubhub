import React from 'react';
import { Card, Header, Container, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ApprovalClubCard from '../components/ApprovalClubCard';
import { Clubs } from '../../api/club/Club';

class Approval extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Loading</Loader>;
  }

  renderPage() {
    const padding = { paddingTop: '10px' };
    return (
          <div className={'purple-background'}>
          <Container style={padding}>
            <Header as='h1' inverted>Requests</Header>
            <hr/>
            <Card.Group>
              {this.props.clubs.map((club, index) => <ApprovalClubCard key={index} club={club}/>)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Approval.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Clubs');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Approval);
