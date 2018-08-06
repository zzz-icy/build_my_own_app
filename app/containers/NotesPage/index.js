/**
 *
 * NotesPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Notes from 'components/Notes';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNotesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const notes = {
  notes: [
    {
      id: 1,
      note_title: 'Note 1',
      note_content: 'This is Note 1',
    },
    {
      id: 2,
      note_title: 'Note 2',
      note_content: 'This is Note 2',
    },
    {
      id: 3,
      note_title: 'Note 3',
      note_content: 'This is Note 3',
    },
  ],
};

/* eslint-disable react/prefer-stateless-function */
export class NotesPage extends React.Component {
  render() {
    const notesProps = {
      notes,
    };
    return (
      <div>
        <Helmet>
          <title>NotesPage</title>
          <meta name="description" content="Description of NotesPage" />
        </Helmet>
        <Notes {...notesProps} />
      </div>
    );
  }
}

NotesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  notespage: makeSelectNotesPage(),
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

const withReducer = injectReducer({ key: 'notesPage', reducer });
const withSaga = injectSaga({ key: 'notesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NotesPage);
