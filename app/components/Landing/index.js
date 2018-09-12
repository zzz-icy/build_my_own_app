/**
 *
 * Landing
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import H1 from 'components/H1';
// import H2 from 'components/H2';
// import { withStyles } from '@material-ui/core/styles';
// import './styles/landing.scss';

// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
/* eslint-disable indent */
// prettier-ignore

function Landing() {
  return (
    <div className="landing">
      <div className="landing__title">Welcome</div>
      <div className="landing__body">
        Log in with your Google account to use the Indecision Application.
      </div>
    </div>
  );
}

Landing.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Landing;
