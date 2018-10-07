import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
// import { Link } from 'react-router-dom';

// import ListItemText from '@material-ui/core/ListItemText';

/* eslint-disable indent */
// prettier-ignore
const styles = {
    list: {
        width: 250,
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 15,

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
};
/* eslint-disable indent */
// prettier-ignore
/* eslint-disable react/prefer-stateless-function */

class LeftDrawer extends React.Component {

    render() {
        const { classes } = this.props;
        // const HomeLink = props => <Link to="/" {...props} />
        // const IndecisionLink = props => <Link to="/indecision" {...props} />

        const sideList = (

            <List component="nav" className={classes.list}>
                <ListItem
                    button
                    // component={HomeLink}
                    component='a'
                    href="/"
                >
                    Home
                </ListItem>
                <Divider />
                <ListItem
                    button
                    // component={IndecisionLink}
                    component='a'
                    href="/indecision"
                >
                    Indecision
                </ListItem>
                <Divider />
                <ListItem
                    button
                    component='a'
                    href="https://my-own-react-app-expensify.herokuapp.com/"
                >
                    Expensify
                </ListItem>
                <Divider />
                <ListItem
                    button
                    component='a'
                    href="https://web-alto.herokuapp.com/"
                >
                    Alto - Responsive
                </ListItem>
                <Divider />
                <ListItem button>
                    About
                </ListItem>
            </List>
            // </div>
        );
        return (
            <Drawer
                open={this.props.open}
            // onClose={this.toggleDrawer('left', false)}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.props.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                {sideList}
            </Drawer>
        );
    }
}

/* eslint-disable indent */
// prettier-ignore
LeftDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerClose: PropTypes.func,
    open: PropTypes.any,
};
export default withStyles(styles)(LeftDrawer);
