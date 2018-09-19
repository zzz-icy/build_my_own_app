/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotesPage from 'containers/NotesPage/Loadable';
// import AddNewNotePage from 'containers/AddNewNotePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Landing from 'components/Landing';
import Header from 'components/Header';
import IndecisionAppPage from 'containers/IndecisionAppPage/Loadable';
// import Footer from 'components/Footer';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchUser } from './actions';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectUserData,
  makeSelectError,
  makeSelectFetching,
} from './selectors';
const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

// max-width: calc(1024px + 16px * 2);

// prettier-ignore
class App extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // here to fetch user to see if the user is authenticated
    // initial ajax request  componentWillMount
    // if (!this.props.userData) {
    this.props.onFetchUser();
    // console.log(this.props.userData);
    // }
  }
  render() {
    const headerProps = {
      auth: this.props.auth,
    }
    // console.log('Header props:', headerProps);
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header {...headerProps} />
        {/* always visible */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={HomePage} />
          <Route path="/notes" component={NotesPage} />
          <Route path="/indecision" component={IndecisionAppPage} />
          {/* <Route path="/add" component={AddNewNotePage} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }
}
App.propTypes = {
  onFetchUser: PropTypes.func,
  auth: PropTypes.any,
};
const mapStateToProps = createStructuredSelector({
  // app: makeSelectApp(),
  auth: makeSelectUserData(),
  error: makeSelectError(),
  loading: makeSelectFetching(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchUser: () => dispatch(fetchUser()),
  };
}
const withReducer = injectReducer({ key: 'App', reducer });
const withSaga = injectSaga({ key: 'App', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
