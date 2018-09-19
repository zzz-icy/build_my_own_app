/**
 *
 * Landing
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import { withStyles } from '@material-ui/core/styles';
import MyPhoto from './WechatIMG615.jpg';
import Info from './Info';

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
      <Grid container className="landing__body" spacing={16} direction='row' >
        <Grid item container xs={12} sm={3} direction='column' alignItems='center'>
          <Paper
            style={{ background: '#333745' }}
            elevation={0}
          >
            <img
              alt="myphoto"
              src={MyPhoto}
              style={{
                // margin: '15px 15px 15px 15px',
                // margin: 'auto',
                width: 300,
              }}
            />
          </Paper>
          {/* Take a look at the Indecision Application using the Nav menu&nbsp; <MenuIcon /> */}
        </Grid>

        <Grid item xs={12} sm={9}>
          <Info />
        </Grid>
      </Grid>
    </div>
  );
}

Landing.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Landing;
