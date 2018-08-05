/**
 *
 * AddNewNotePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Notesform from 'components/Notesform';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddNewNotePage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class AddNewNotePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>AddNewNotePage</title>
          <meta name="description" content="Description of AddNewNotePage" />
        </Helmet>
        <Notesform />
      </div>
    );
  }
}

AddNewNotePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addnewnotepage: makeSelectAddNewNotePage(),
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

const withReducer = injectReducer({ key: 'addNewNotePage', reducer });
const withSaga = injectSaga({ key: 'addNewNotePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddNewNotePage);
