import React from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Web from '@material-ui/icons/Web';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { Divider } from '@material-ui/core';
/* eslint-disable indent */
// prettier-ignore
const styles = () => ({
    divider: {
        backgroundColor: '#a5afd7',
        opacity: 0.2,
        width: '30%',
    },
})
/* eslint-disable indent */
// prettier-ignore
/* eslint-disable react/prefer-stateless-function */
class Info extends React.Component {

    render() {
        const { classes } = this.props;
        return (

            <Grid container direction='column' spacing={16}>
                {/* wrap is default to wrap */}
                {/* alignItems default value: stretch, this will make card fill the whole grid */}
                <Grid item sm={12}>
                    <Paper style={{ background: '#20222b', padding: 20, margin: '0px 10px 0px 10px' }}>
                        <p>
                            Currently, I have obtained my Master Degree in Computer Science from Southern Methodist University this May.
                </p>
                        <Divider
                            classes={{
                                root: classes.divider,
                            }}
                        />
                        <p>
                            Now I am actively looking for a
                            <span className="landing__link"> Fulltime UI / Front-End / Full-Stack Developer position
                            </span>.
                </p>
                        <Divider
                            classes={{
                                root: classes.divider,
                            }}
                        />
                        <p>
                            Visa Status: F1 student
                </p>
                        <p>
                            I will be working on OPT EAD starting on July 19th, 2018
                </p>
                    </Paper>
                </Grid>
                <Grid item sm={12} >
                    <Paper style={{ background: '#20222b', padding: 20, margin: '0px 10px 0px 10px' }}>
                        <div style={{ marginBottom: 15, marginTop: 15 }}>
                            <CloudDownload style={{ marginRight: 15 }} />
                            <span style={{ margin: 0 }}>Resume: &nbsp;</span>

                            <a
                                href="https://drive.google.com/file/d/1aTTZiIcT9O11IAH5ieVmdiLoxotLL6Bd/view?usp=sharing"
                                download
                                // style={{ color: 'white' }}
                                className="landing__link"
                            >
                                Click to view my resume.
                            </a>
                        </div>

                        <div style={{ marginBottom: 15, marginTop: 15 }}>
                            <FaGithub style={{ marginRight: 15, width: 20, height: 'auto' }} />
                            <span style={{ margin: 0 }}>Github Profile: &nbsp;</span>
                            <a
                                href="https://github.com/zzz-icy"
                                className="landing__link"
                            >
                                https://github.com/zzz-icy
                            </a>
                        </div>

                        <div style={{ marginBottom: 15, marginTop: 15 }}>
                            <Web style={{ marginRight: 15 }} />
                            <span style={{ margin: 0 }}> Node.js Project:  &nbsp;</span>

                            <a
                                href="https://mighty-brushlands-59948.herokuapp.com/"
                                className="landing__link"
                            >
                                Jotting down your ideas
                            </a>
                        </div>

                        <div style={{ marginBottom: 15, marginTop: 15 }}>
                            <Web style={{ marginRight: 15 }} />
                            <span style={{ margin: 0 }}>Codepen Project: &nbsp;</span>

                            <a
                                href="https://codepen.io/Zzz-icy/pen/MpMEMd"
                                className="landing__link"
                            >
                                Backbone Selection for Wireless Sensor Network:
                        </a>
                        </div>
                    </Paper>
                </Grid>
                <Grid container item sm={12} direction='column'>
                    <Paper style={{ background: '#20222b', padding: 20, margin: '0px 10px 0px 10px' }}>
                        <Grid container item sm={12} direction='row' justify='space-between'>
                            <Grid item sm={8} md={8}>
                                <p>Research Assistant(Web, part-time)</p>
                            </Grid>
                            <Grid item sm={4} md={4} lg={2} justify='center'>
                                <p style={{ textAlign: 'center' }}>09/2018 - Present</p>
                            </Grid>
                        </Grid>
                        <Divider
                            classes={{
                                root: classes.divider,
                            }}
                        />
                        <Grid container item sm={12} direction='row' justify='space-between'>
                            <Grid item sm={8} md={8}>
                                <p>Product Development Intern (Front-end/UI)</p>
                            </Grid>
                            <Grid item sm={4} md={4} lg={2} justify='center'>
                                <p style={{ textAlign: 'center' }}>01/2018 - 05/2018</p>
                            </Grid>

                        </Grid>
                        <Divider
                            classes={{
                                root: classes.divider,
                            }}
                        />
                        {/* 
                            xs, extra-small: 0px or larger
                            sm, small: 600px or larger
                            md, medium: 960px or larger
                            lg, large: 1280px or larger
                            xl, extra-large: 1920px or larger 
                        */}
                        {/* window.width 1440 */}
                        <Grid container item sm={12} direction='row' justify='space-between'>

                            <Grid item sm={8} md={8}>
                                <p>Master Degree in Computer Science, Southern Methodist University</p>
                            </Grid>
                            <Grid item sm={4} md={4} lg={2} justify='center'>
                                <p style={{ textAlign: 'center' }}>09/2016 - 05/2018</p>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container item sm={12} direction='column'>
                    <Paper style={{ background: '#20222b', padding: 20, margin: '0px 10px 0px 10px' }}>
                        <Grid container item sm={12} direction='row' justify='space-between'>
                            <Grid item sm={8} md={8}>
                                <p>Master Degree in Computer Science, Southern Methodist University</p>
                                <p>Dallas, TX</p>
                            </Grid>
                            <Grid item sm={4} md={4} lg={2} justify='center'>
                                <p style={{ textAlign: 'center' }}>09/2016 - 05/2018</p>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

}
// prettier-ignore
Info.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Info);
