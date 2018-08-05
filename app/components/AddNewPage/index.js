/**
 *
 * AddNewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import H1 from 'components/H1';
import Button from '@material-ui/core/Button';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    display: 'none',
  },
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

function AddNewPage(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.list}>
        <H1>Welcome</H1>
        <div>Bla Bla Bla Bla Bla Bla Bla Bla</div>
        <Button variant="contained" color="primary" className={classes.button}>
          Add New Note
        </Button>
      </div>
    </div>
  );
}

AddNewPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddNewPage);
