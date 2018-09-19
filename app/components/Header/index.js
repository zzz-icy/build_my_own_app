import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MusicNote from '@material-ui/icons/MusicNote';
import login from './images/btn_google_signin_light_normal_web.png';
import LeftDrawer from './LeftDrawer';

const styles = {
  root: {
    // flexGrow: 1,
    background: '#20222b',
    overflow: 'hidden',
    height: 64,
    position: 'fixed',
  },
  foot: {
    // flexGrow: 1,
    background: '#20222b',
    width: 400,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 16,
    ':hover': {
      textDecoration: 'none',
      color: 'red',
    },
  },
  label: {
    color: 'white',
  },
  icon: {
    color: '#8357c5',
  },
};
/* eslint-disable indent */
// prettier-ignore
/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  state = {
    open: false,
    value: 0,
  };
  handleChange = (event, value) => { // need event here, why?
    this.setState({ value });
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  renderContent() {
    switch (this.props.auth) {
      case false:
        return <Button
          // href="http://localhost:3000/auth/google"
          // relative route, the browser will aumatically prepend on the domain, eg. localhost:3000 for dev mode
          href="/auth/google"
          color="inherit"
        >
          <img src={login} alt='login with google button' />
        </Button>;
      case null:
        return <img src={login} alt='deciding' width={150} />;
      default:
        return <Button
          href="/api/logout"
          color="inherit"
        >
          Logout
    </Button>;
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    // console.log('inside Header:', this.props);
    // console.log(auth);
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>

            <LeftDrawer
              handleDrawerClose={this.handleDrawerClose}
              open={this.state.open}
            />
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <Tooltip title='Back to HomePage'>
                <a
                  // to={this.props.auth ? '/dashboard' : '/'}
                  href='/'
                  className={classes.link}
                >
                  Hi, I am Hannah!
              </a>
              </Tooltip>
            </Typography>

            <BottomNavigation
              value={value}
              onChange={this.handleChange}
              className={classes.foot}
            >
              <BottomNavigationAction
                label="Hi"
                classes={{
                  label: classes.label,
                }}
                icon={<MusicNote className={classes.icon} />}
              />
              <BottomNavigationAction
                label="I"
                classes={{
                  label: classes.label,
                }}
                icon={<MusicNote className={classes.icon} />}
              />
              <BottomNavigationAction
                label="am"
                classes={{
                  label: classes.label,
                }}
                icon={<MusicNote className={classes.icon} />}
              />
              <BottomNavigationAction
                label="Hannah"
                classes={{
                  label: classes.label,
                }}
                icon={<MusicNote className={classes.icon} />}
              />
            </BottomNavigation>


            <Button
              // href="http://localhost:3000/auth/google"
              // relative route, the browser will aumatically prepend on the domain, eg. localhost:3000 for dev mode
              href="/auth/google"
              color="inherit"
            >
              {this.renderContent()}
            </Button>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.any,
};

export default withStyles(styles)(Header);
