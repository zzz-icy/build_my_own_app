/**
 *
 * Notes
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  panel: {
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    // display: 'flex',
    // justifyContent: 'space-between',
    width: '100%',
    // height: '100%',
    // flexDirection: 'column',
    // alignItems: 'center',
    // background: '#e6e6e6',
    marginTop: 30,
    marginBottom: 30,
  },
});

class Notes extends React.Component {
  render() {
    const { classes, notes } = this.props;
    // const notes = this.props.notes;
    // console.log(notes);
    return (
      <div className={classes.list}>
        {notes.notes.map(item => (
          <div>
            <ExpansionPanel className={classes.panel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  {item.note_title}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{item.note_content}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        ))}
      </div>
    );
  }
}

Notes.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.any,
};

export default withStyles(styles)(Notes);
