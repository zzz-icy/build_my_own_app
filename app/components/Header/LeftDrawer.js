import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import TouchApp from '@material-ui/icons/TouchApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';

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
    img: {
        height: 12,
        width: 12,
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
        const sideList = (
            <div className={classes.list}>
                <List className={classes.listItem}>Indecision</List>
                <Divider />
                <List className={classes.listItem}>Expensify</List>
                <Divider />
                <List className={classes.listItem}>About</List>
            </div>
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
