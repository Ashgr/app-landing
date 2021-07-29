import React from 'react'
import { Grid, Typography, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {FcAndroidOs} from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'
const useStyles = makeStyles((theme) => ({
    root: {
        // marginTop: '240px',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    },
    card: {
        marginTop: '1rem',
        marginBottom: '5rem',
        padding: '.4rem 5.8rem',
        borderRadius: '5px',
        boxShadow: '0px 0px 7px grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-between',
        [theme.breakpoints.down("xs")]:{
            paddingInline:'2rem'
        },
        [theme.breakpoints.down("sm")]:{
            paddingInline:'2rem'
        }
    },
    downloadTitile: {
        marginTop: "4em",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.25rem",
        },
    },
    downloadSubtitle: {
        maxWidth: "50%",
        margin: "0 auto",
        fontSize: "1.4rem",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            maxWidth: "80%",
            margin: "1em auto",
            fontSize: ".75rem",
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "90%",
        },
    },
    cardTitle: {
        fontSize: "1.65rem",
        fontWeight:'540',
        color: 'rgba(0, 0, 0, 0.87)',
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.15rem",
            textAlign: "center",
        },
    },
}))
const Download = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box>
                <Typography
                    variant="h4"
                    align="center"
                    paragraph
                    className={classes.downloadTitile}
                >
                    Download the App
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    paragraph
                    className={classes.downloadSubtitle}
                >
                    Lorem ipsum dolor sit amet at mollitia sapiente! Deleniti iste itaque iusto sed vitae quam. Sunt consequatur quisquam magnam quas id.
                </Typography>
            </Box>
            <Box display='flex' justifyContent='space-around' flexWrap = 'wrap'>
                <Box className={classes.card}>
                    <FcAndroidOs size = '10em' style ={{marginTop:'2rem'}}/>
                    <Typography variant="h6" className={classes.cardTitle}>
                        Android App
                    </Typography>
                    <Typography variant="body2" style = {{fontSize :'1rem'}}>Minimum version 16.2</Typography>
                    <Button color = 'primary' variant="contained" style ={{marginTop:'4rem',padding:'1rem 0.5rem',width:'100%',margin:'2rem 1rem'}}>Download</Button>
                </Box>
                <Box className={classes.card}>
                    <FaApple size = '9em' style ={{marginTop:'2rem'}}/>
                    <Typography variant="h6" className={classes.cardTitle}>
                        IOS App
                    </Typography>
                    <Typography variant="body2" style = {{fontSize :'1rem'}}>Minimum version 20.1</Typography>
                    <Button color = 'primary' variant="contained" style ={{marginTop:'4rem',padding:'1rem 0.5rem',width:'100%',margin:'2rem 1rem'}}>Download</Button>
                </Box>
                <Box className={classes.card}>
                    <img src='/windows.png' width='110' height='140' style ={{marginTop:'2rem'}}/>
                    <Typography variant="h6" className={classes.cardTitle}>
                        Windows App
                    </Typography>
                    <Typography variant="body2" style = {{fontSize :'1rem'}}>Minimum version 12</Typography>
                    <Button color = 'primary' variant="contained" style ={{marginTop:'4rem',padding:'1rem 0.5rem',width:'100%',margin:'2rem 1rem'}}>Download</Button>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Download
