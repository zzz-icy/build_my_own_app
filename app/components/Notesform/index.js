/**
 *
 * Notesform
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#eceef8',
    marginTop: 30,
    marginBottom: 30,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    height: '80%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: '#eceef8',
    marginTop: 30,
    marginBottom: 30,
  },
  bootstrapRoot: {
    padding: 0,
    // 'label + &': {
    //   marginTop: theme.spacing.unit * 3,
    // },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    marginTop: 5,
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  formLabel: {
    fontSize: 18,
    color: '#3f51b5',
  },
};
/* eslint-disable react/prefer-stateless-function */
class Notesform extends React.Component {
  state = {
    name: '',
    content: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.list}>
          <TextField
            id="name"
            label="Name"
            // className={classes.textField}
            value={this.state.name}
            placeholder="note name"
            onChange={this.handleChange('name')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.formLabel,
            }}
          />
          <TextField
            value={this.state.content}
            placeholder="Type in your note content"
            onChange={this.handleChange('content')}
            label="Content"
            id="bootstrap-input"
            multiLine
            rows={2}
            fullWidth
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.formLabel,
            }}
          />
        </div>
      </div>
    );
  }
}

Notesform.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notesform);
