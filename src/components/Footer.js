import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        backgroundColor: 'hsl(229, 31%, 21%)',
        padding: '2rem'
    },
    phoneLink: {
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1.4rem',
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
            color: 'hsl(0, 94%, 66%)',

        },
        marginBottom: '1rem'
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
            color: 'hsl(0, 94%, 66%)',
        },
    },
    logo2: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        width: theme.spacing(24),
        height: theme.spacing(4)
    },
    social:{
        marginInline:'3rem',
        padding:'1rem',
        cursor:'pointer',
        transition: "background-color 0.3s linear",
        "&:hover": {
            backgroundColor: 'hsl(0, 94%, 66%)',
            borderRadius: '5px',
        },
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box style={{ minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    alt="BookMark-Logo"
                    className={classes.logo2}
                    src='/logo-footer.svg'
                />
                <a href='#' className={classes.phoneLink}>Features</a>
                <a href='#' className={classes.phoneLink}>Pricing</a>
                <a href='#' className={classes.phoneLink}>Contact</a>
                <Box display='flex' justifyContent = 'center' >
                        <a href = 'https://www.facebook.com/abdurahman.ashgr/' target = '_blank'>
                            <TiSocialFacebook size = '2em' color ='#fff' className ={classes.social}/>
                        </a>
                        <a href = 'https://www.linkedin.com/in/aashgr/' target = '_blank'><TiSocialLinkedin size = '2em' color ='#fff' className ={classes.social}/></a>
                        <a href = 'https://github.com/Ashgr/' target = '_blank'><TiSocialGithub size = '2em' color ='#fff' className ={classes.social}/></a>
                    </Box>
            </Box>
        </Box>
    )
}

export default Footer
