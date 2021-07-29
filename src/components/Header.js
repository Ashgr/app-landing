import React, { useState } from 'react'
import { Box, Hidden, Button, Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'
const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        boxShadow: '0px 0px 8px grey',
        display: 'flex',
        minWidth: '360px'

    },
    logo: {
        marginRight: "auto",
        padding: '1rem',
        width: theme.spacing(24),
        height: theme.spacing(4)
    },
    flexLinks: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    link: {
        color: 'rgba(0, 0, 0, 0.87)',
        marginRight: '2.5rem',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        fontFamily: 'Helvetica',
        fontWeight: '700',
        padding: '0.75rem 0.4rem',
        lineHeight: '1.3',
        textTransform: 'uppercase',
        textAlign: 'left',
        transition: "background-color 10s ease",
        transition: "color 0.5s ease",
        "&:hover": {
            backgroundColor: '#ebebeb',
            color: 'hsl(0, 94%, 66%)',

        },
    },
    button: {
        marginRight: '2rem',
        color: "white",
        backgroundColor: 'hsl(0, 94%, 66%)',
        padding: '0.6rem 1.2rem',
        textTransform: 'uppercase',
        borderRadius: '5px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: "background-color 0.5s ease",
        // transition:"color 0.5s ease",
        border: '1px solid hsl(0, 94%, 66%)',
        "&:hover": {
            backgroundColor: '#fff',
            color: 'hsl(0, 94%, 66%)',
        },
    },
    phoneLink: {
        color: 'rgba(0, 0, 0, 0.87)',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '0.9rem',
        fontFamily: 'Helvetica',
        fontWeight: '700',
        padding: '0.75rem 0.4rem',
        lineHeight: '1.3',
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'left',
        transition: "background-color 0.7s linear",
        transition: "color 0.5s ease",
        "&:hover": {
            backgroundColor: '#ebebeb',
            color: 'hsl(0, 94%, 66%)',

        },
        marginBottom:'1rem'
    },
    phoneButton: {
        color: "white",
        backgroundColor: 'hsl(0, 94%, 66%)',
        padding: '0.6rem 1.2rem',
        textTransform: 'uppercase',
        borderRadius: '5px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: "background-color 0.5s ease",
        // transition:"color 0.5s ease",
        border: '1px solid hsl(0, 94%, 66%)',
        "&:hover": {
            backgroundColor: '#fff',
            color: 'hsl(0, 94%, 66%)',
        },
    },
    logo2: {
        display:'flex',
        justifyContent:'center',
        padding: '1rem',
        width: theme.spacing(24),
        height: theme.spacing(4)
    },
    social:{
        marginInline:'3rem',
        padding:'0.5rem',
        cursor:'pointer',
        transition: "background-color 0.3s linear",
        "&:hover": {
            backgroundColor: '#ebebeb',
            borderRadius: '5px',
        },
    }
}))
const Header = () => {
    const classes = useStyles();
    const [opened, setOpened] = useState(false);
    const toggleDrawer = (toggle) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpened(toggle);
    };
    return (
        <Box className={classes.root}>
            <img
                alt="BookMark-Logo"
                className={classes.logo}
                src='/logo.svg'
            />
            <Hidden only={['sm', 'xs']}>
                <Box className={classes.flexLinks}>
                    <a href='#' className={classes.link}>Features</a>
                    <a href='#' className={classes.link}>Pricing</a>
                    <a href='#' className={classes.link}>Contact</a>
                    <Box href='#' className={classes.button}>Login</Box>
                </Box>
            </Hidden>
            <Hidden only={['md', 'lg']}>
                <Button onClick={toggleDrawer(true)}>
                    <GiHamburgerMenu size='2em' color='black' />
                </Button>
                <Drawer anchor={'top'} open={opened} onClose={toggleDrawer(false)} style={{ marginTop: '50px' }}>
                    <Box display='flex' justifyContent='flex-end' style={{ backgroundColor: '#fff' }}>
                        <Button onClick={toggleDrawer(false)}>
                            <AiOutlineClose size='2em' color='black' />
                        </Button>
                    </Box>
                    <Box style={{ backgroundColor: '#fff', height: '1920px',minHeight:'350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            alt="BookMark-Logo"
                            className={classes.logo2}
                            src='/logo.svg'
                        />
                        <a href='#' className={classes.phoneLink}>Features</a>
                        <a href='#' className={classes.phoneLink}>Pricing</a>
                        <a href='#' className={classes.phoneLink}>Contact</a>
                        <Box href='#' className={classes.phoneButton}>Login</Box>
                    </Box>
                    <Box display='flex' justifyContent = 'center' style ={{marginBottom:'3rem'}}>
                        <a href = 'https://www.facebook.com/abdurahman.ashgr/' target = '_blank'>
                            <TiSocialFacebook size = '2em' color ='rgb(33 33 33)' className ={classes.social}/>
                        </a>
                        <a href = 'https://www.linkedin.com/in/aashgr/' target = '_blank'><TiSocialLinkedin size = '2em' color ='rgb(33 33 33)' className ={classes.social}/></a>
                        <a href = 'https://github.com/Ashgr/' target = '_blank'><TiSocialGithub size = '2em' color ='rgb(33 33 33)' className ={classes.social}/></a>
                    </Box>
                </Drawer>

            </Hidden>
        </Box>
    )
}

export default Header
