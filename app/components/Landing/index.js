/**
 *
 * Landing
 *
 */

import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

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
        Take a look at the Indecision Application using the Nav menu&nbsp; <MenuIcon />
      </div>
    </div>
  );
}

Landing.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Landing;
