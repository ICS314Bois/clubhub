import React from 'react';
import { Meteor } from 'meteor/meteor';
import Link from 'react-router-dom/Link';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import ClubCardFullList from '../components/ClubCardFullList';
import { Clubs } from '../../api/club/Club';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubs extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Loading</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const padding = { paddingTop: '10px' };
    return (
        <div className={'white-background'}>
          <Container style={padding}>
            <Header as="h2" textAlign="center" >Club List</Header>
            <Link className='tomorrow-font' exact to='/searchpage'>Search</Link>
            <Card.Group itemsPerRow={4}>
              {this.props.clubs.map((club, index) => <ClubCardFullList key={index} club={club}/>)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListClubs.propTypes = {
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
})(ListClubs);
