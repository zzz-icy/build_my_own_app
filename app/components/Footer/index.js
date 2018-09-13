import React from 'react';
// import { FormattedMessage } from 'react-intl';

// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
// import messages from './messages';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import MusicNote from '@material-ui/icons/MusicNote';

const styles = {
  root: {
    width: '100%',
    background: '#20222b',
    // boxShadow: '2px 2px 1px grey',
    // flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  label: {
    color: 'white',
  },
  selected: {
    color: 'white',
  },
  icon: {
    color: 'white',
  },
};

class Footer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Do"
          classes={{
            label: classes.label,
          }}
          icon={<MusicNote className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Re"
          classes={{
            label: classes.label,
          }}
          icon={<MusicNote className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Mi"
          classes={{
            label: classes.label,
          }}
          icon={<MusicNote className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Fa"
          classes={{
            label: classes.label,
          }}
          icon={<MusicNote className={classes.icon} />}
        />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
