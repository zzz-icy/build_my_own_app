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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import login from './images/btn_google_signin_light_normal_web.png';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
/* eslint-disable indent */
// prettier-ignore
/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
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
          className="big-button"
        >
          Logout
    </Button>;
    }
  }

  render() {
    const { classes } = this.props;
    // console.log('inside Header:', this.props);
    // console.log(auth);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {this.props.auth ? (<IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>) : null}
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <Link
                to={this.props.auth ? '/dashboard' : '/'}
                style={{ color: 'white' }}
              >
                Could Be Anything
              </Link>
            </Typography>
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
      </div >
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.any,
};

export default withStyles(styles)(Header);
