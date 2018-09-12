/**
 *
 * IndecisionAppPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import IndicesionApp from 'components/IndecisionApp';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectIndecisionAppPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
/* eslint-disable indent */
// prettier-ignore
/* eslint-disable react/prefer-stateless-function */
export class IndecisionAppPage extends React.Component {
  render() {
    return (
      < IndicesionApp />
    );
  }
}

IndecisionAppPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  indecisionapppage: makeSelectIndecisionAppPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'indecisionAppPage', reducer });
const withSaga = injectSaga({ key: 'indecisionAppPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(IndecisionAppPage);

// <title>IndecisionAppPage</title>
// <meta name="description" content="Description of IndecisionAppPage" />
