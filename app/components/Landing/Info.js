import React from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Web from '@material-ui/icons/Web';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { FaGithub } from 'react-icons/fa';
import { Divider } from '@material-ui/core';
/* eslint-disable indent */
// prettier-ignore
const Info = () => (
    <Grid container direction='column' spacing={16}>
        {/* alignItems default value: stretch, this will make card fill the whole grid */}
        <Grid item sm={12}>
            <Paper style={{ background: '#20222b', padding: 20 }}>
                <p>
                    Currently, I have obtained my Master Degree in Computer Science from Southern Methodist University this May.
        </p>
                <p>
                    Now I am actively looking for a<span style={{ color: 'white' }}> Fulltime UI / Front-End / Full Stack Developer position</span>.
        </p>
                <p>
                    Visa Status: F1 student
        </p>
                <p>
                    I will be working on OPT EAD starting on July 19th, 2018
        </p>
            </Paper>
        </Grid>
        <Divider />
        <Grid item sm={12} >
            <Paper style={{ background: '#20222b', padding: 20 }}>
                <div style={{ marginBottom: 10 }}>
                    <CloudDownload style={{ marginRight: 15 }} />
                    <a
                        href="./file/Han_Zhang_Resume.pdf"
                        download
                        style={{ color: 'white' }}
                    >
                        Click to get a PDF copy of my resume.
                    </a>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <FaGithub style={{ marginRight: 15 }} />
                    <span style={{ margin: 0 }}>Github Profile: &nbsp;</span>
                    <a
                        href="https://github.com/zzz-icy"
                        style={{ color: 'white' }}
                    >
                        https://github.com/zzz-icy
                    </a>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Web style={{ marginRight: 15 }} />

                    <a
                        href="https://mighty-brushlands-59948.herokuapp.com/"
                        style={{ color: 'white' }}
                    >
                        View my Node.js project - Jotting down your ideas
                    </a>
                </div>
            </Paper>
        </Grid>
        <Grid item sm={12} >
            <Paper style={{ background: '#20222b', padding: 20 }}>
                <p>aaaaaaaaaaaaa</p>
                <p>aaaaaaaaaaaaa</p>
                <p>aaaaaaaaaaaaa</p>
            </Paper>
        </Grid>
    </Grid>
);
export default Info;
