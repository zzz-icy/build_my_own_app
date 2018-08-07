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
import {
  makeSelectNotesPage,
  makeSelectNotes,
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import { loadNotes } from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

// componentDidMount() {
//   if (!this.props.notes) { this.props.onLoadingNotes(); }
// }
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
    console.log(notesProps);
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
  // notes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  notespage: makeSelectNotesPage(),
  notes: makeSelectNotes(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadingNotes: () => dispatch(loadNotes()),
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
