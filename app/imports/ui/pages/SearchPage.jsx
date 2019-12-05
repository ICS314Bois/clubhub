import React from 'react';
import _ from 'lodash';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import BottomLanding from '../components/BottomLanding';
import { Clubs } from '../../api/club/Club';
import ListClubs from './ListClubs';

/** A simple static component to render some text for the landing page. */
class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Academic: false,
        Professional: false,
        Athletic: false,
        Religious: false,
        Spiritual: false,
        Political: false,
        Sports: false,
        Leisure: false,
        Service: false,
        Fraternity: false,
        Sorority: false,
        Recreational: false,
      },
    };
  }

  handleClubType = (event) => {
    const key = event.target.value;
    const newSelected = this.state.selected;
    newSelected[key] = !newSelected[key];
    this.setState({ selected: newSelected });
  };

  filterClubType = (club) => {
    let ret = false;
    _.forIn(this.state.selected, (value, key) => { if (club.Type.includes(key)) { ret = ret || value; } });
    return ret;
  }

  render() {
    const clubFilter = _.filter(this.props.clubs, c => this.filterClubType(c));
    const padding = { paddingLeft: '30px' };
    return (
    <div className='searchField'>
      <Form>
        <Form.Group style={padding} grouped>
          <Form.Field
              label='Academic'
              value='Academic'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Professional'
              value='Professional'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Athletic'
              value='Athletic'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Religious'
              value='Religious'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Spiritual'
              value='Spiritual'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field label='Political'
                      value='Political'
                      type='checkbox'
                      control='input'
                      onChange={this.handleClubType}
          />
          <Form.Field
              label='Sports'
              value='Sports'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Leisure'
              value='Leisure'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Service'
              value='Service'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Fraternity'
              value='Fraternity'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Sorority'
              value='Sorority'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
          <Form.Field
              label='Recreational'
              value='Recreational'
              type='checkbox'
              control='input'
              onChange={this.handleClubType}
          />
        </Form.Group>
      </Form>
      <ListClubs clubFilter={clubFilter}/>
      <BottomLanding/>
    </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
SearchPage.propTypes = {
  clubs: PropTypes.array.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => ({
    clubs: Clubs.find({}).fetch(),
  }))(SearchPage);
