/**
 *
 * Landing
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import H1 from 'components/H1';
import H2 from 'components/H2';
import { withStyles } from '@material-ui/core/styles';

// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
/* eslint-disable indent */
// prettier-ignore

const styles = {
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#e6e6e6',
    marginTop: 30,
    marginBottom: 30,
  },
};

function Landing(props) {
  return (
    <div className={props.classes.list}>
      <H1>Welcome</H1>
      <H2>
        Log in with your Google account to use the Indecision Application.
      </H2>
    </div>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
