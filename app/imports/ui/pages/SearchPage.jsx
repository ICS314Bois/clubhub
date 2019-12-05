import React from 'react';
import _ from 'lodash';
import { Form, Grid, Dropdown, Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../api/club/Club';
import FilteredList from '../components/FilteredList';

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

  handleClubSearch = (event) => {
    console.log(event);
  };

  filterClubType = (club) => {
    let ret = false;
    _.forIn(this.state.selected, (value, key) => {
      if (club.Type.includes(key)) {
        ret = ret || value;
      }
    });
    return ret;
  };

  render() {
    const clubFilter = _.filter(this.props.clubs, c => this.filterClubType(c));
    const padding = { paddingTop: '30px', paddingLeft: '15px' };
    return (
        <div className='searchField'>
          <Grid style={padding}>
            <Search
              onChange={this.handleClubSearch}
            />
            <Dropdown
                text='Club Filter'
                icon='filter'
                floating
                labeled
                button
                className='icon'
            >
              <Dropdown.Menu>
                <Dropdown.Header icon='tags' content='ClubTypes'/>
                <Dropdown.Menu scrolling>
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
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
          <FilteredList clubFilter={clubFilter}/>
        </div>
    );
  }
}

SearchPage.propTypes = {
  clubs: PropTypes.array.isRequired,
};

export default withTracker(() => ({
  clubs: Clubs.find({}).fetch(),
}))(SearchPage);
