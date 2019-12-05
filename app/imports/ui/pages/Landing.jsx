import React from 'react';
import PropTypes from 'prop-types';
import SearchComponent from '../components/Search';
import BottomLanding from '../components/BottomLanding';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const padding = { paddingTop: '200px' };
    return (
      <div className={'uh-background'}>
        <SearchComponent/>
        <BottomLanding style={padding}/>
      </div>
    );
  }
}

Landing.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default Landing;
