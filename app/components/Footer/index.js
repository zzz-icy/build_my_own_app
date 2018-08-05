import React from 'react';
// import { FormattedMessage } from 'react-intl';

// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
// import Wrapper from './Wrapper';
// import messages from './messages';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 'flex',
    background: '#3f51b5',
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
          label="La"
          classes={{
            label: classes.label,
          }}
          icon={<RestoreIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          label="LaLa"
          classes={{
            label: classes.label,
          }}
          icon={<FavoriteIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          label="LaLaLa"
          classes={{
            label: classes.label,
          }}
          icon={<LocationOnIcon className={classes.icon} />}
        />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
