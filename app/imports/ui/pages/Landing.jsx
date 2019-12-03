import React from 'react';
import SearchComponent from '../components/Search';
import BottomLanding from '../components/BottomLanding';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className={'uh-background'}>
        <SearchComponent/>
        <BottomLanding/>
      </div>
    );
  }
}

export default Landing;
