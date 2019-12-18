import React from 'react';
import _ from 'lodash';
import { Form, Grid, Dropdown, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../api/club/Clubs';
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
        Student_Affairs: false,
        Ethnic: false,
        Cultural: false,
        Honorary_Society: false,
      },
      search: '',
    };
  }

  handleClubType = (event) => {
    const key = event.target.value;
    const newSelected = this.state.selected;
    newSelected[key] = !newSelected[key];
    this.setState({ selected: newSelected });
  };

  handleClubSearch = (event) => {
    let newSearch = this.state.search;
    newSearch = event.target.value;
    this.setState({ search: newSearch });
  };

  filterClubType = (club) => {
    let ret = false;
    _.forIn(this.state.selected, (value, key) => {
      console.log(value, key);
      if (club.Type.includes(key)) {
        ret = ret || value;
      }
      if (key === 'Honorary_Society' && club.Type.includes('Honorary Society')) {
        ret = ret || value;
      }
      if (club.Type.includes('Student Affairs') && key === 'Student_Affairs') {
        ret = ret || value;
      }
    });
    return ret;
  };

  // eslint-disable-next-line consistent-return
  filterClubName = (club) => {
    if (this.state.search === '') {
      return false;
    }

    if (club.ClubName.includes(this.state.search)) {
      return true;
    }
  };

  clubList = (club1, club2) => {
    const listRet = [];
    if (_.isEmpty(club1) && !_.isEmpty(club2)) {
      for (let i = 0; i < club2.length; i++) {
        listRet[listRet.length] = club2[i];
      }
    } else
      if (_.isEmpty(club2) && !_.isEmpty(club1)) {
        for (let i = 0; i < club1.length; i++) {
          listRet[listRet.length] = club1[i];
        }
      } else {
        for (let i = 0; i < club1.length; i++) {
          for (let j = 0; j < club2.length; j++) {
            if (club1[i].ClubName === club2[j].ClubName) {
              listRet[listRet.length] = club1[i];
            }
          }
        }
      }
    return listRet;
  };

  render() {
    const clubTypeFilter = _.filter(this.props.clubs, c => this.filterClubType(c));
    const clubNameFilter = _.filter(this.props.clubs, c => this.filterClubName(c));
    let clubListResult;
    if (_.isEmpty(clubTypeFilter) && _.isEmpty(clubNameFilter)) {
      clubListResult = this.props.clubs;
    } else {
        clubListResult = this.clubList(clubTypeFilter, clubNameFilter);
      }
    const padding = { paddingTop: '30px', paddingLeft: '15px', paddingBottom: '30px' };
    const iconPadding = { paddingRight: '15px' };
    return (
        <div className='general-background'>
          <Grid style={padding}>
            <Input style={iconPadding} placeholder='Search Clubs...' onChange={this.handleClubSearch}/>
            <Dropdown
                icon='filter'
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
                      <Form.Field
                          label='Student Affairs'
                          value='Student_Affairs'
                          type='checkbox'
                          control='input'
                          onChange={this.handleClubType}
                      />
                      <Form.Field
                          label='Cultural'
                          value='Cultural'
                          type='checkbox'
                          control='input'
                          onChange={this.handleClubType}
                      />
                      <Form.Field
                          label='Ethnic'
                          value='Ethnic'
                          type='checkbox'
                          control='input'
                          onChange={this.handleClubType}
                      />
                      <Form.Field
                          label='Honorary Society'
                          value='Honorary_Society'
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
          <FilteredList clubListResult={clubListResult}/>
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
