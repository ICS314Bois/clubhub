import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import SearchPage from '../pages/SearchPage';
import ProfilePage from '../pages/ProfilePage';
import FeedBackForum from '../pages/FeedBackForum';
import EditCard from '../pages/EditCard';
import AddClub from '../pages/AddClub';
import ManageClubAdmin from '../pages/ManageClubAdmin';
import ManageSuperAdmin from '../pages/ManageSuperAdmin';
import RequestClub from '../pages/RequestClub';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/searchpage" component={SearchPage}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <ClubAdminRoute path="/manageClubAdmin" component={ManageClubAdmin}/>
              <ClubAdminRoute path="/request" component={RequestClub}/>
              <ClubAdminRoute path="/editcard/:_id" component={EditCard}/>
              <SuperAdminRoute path="/addclub" component={AddClub}/>
              <SuperAdminRoute path="/manageSuperAdmin" component={ManageSuperAdmin}/>
              <ProtectedRoute path="/feedback" component={FeedBackForum}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

const ClubAdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isClubAdmin = Roles.userIsInRole(Meteor.userId(), 'clubAdmin');
          const isSuperAdmin = Roles.userIsInRole(Meteor.userId(), 'superAdmin');
          return ((isLogged && isClubAdmin) || (isLogged && isSuperAdmin)) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

const SuperAdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isSuperAdmin = Roles.userIsInRole(Meteor.userId(), 'superAdmin');
          return (isLogged && isSuperAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

SuperAdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

ClubAdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
