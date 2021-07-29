import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        ['@media (max-width:950px)']: {
            display: "flex",
            flexDirection: 'column-reverse'
        },
    },
    image: {
        width: '90%',
        height: '90%',
        marginTop: '3rem',
        ['@media (max-width:950px)']: {
            width: '75%',
            height: '30%',
        },
    },
    title: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
            textAlign: "center",
        },
    },
    subtitle: {
        fontSize:'1.8rem',
        textAlign:'center',
        padding:'2rem',
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            maxWidth: "80%",
            margin: "1em auto",
            fontSize: "1.2rem",
          },
          [theme.breakpoints.down("xs")]: {
            maxWidth: "90%",
          },
    },

}))

const Intro = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box display='flex' flexDirection='column' alignItems='center' style={{ marginTop: '4rem' }}>
                <Typography variant="h3" paragraph className={classes.title}>A Simple Task Maneger</Typography>
                <Typography variant="subtitle1" paragraph className={classes.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos debitis iure nostrum? Consequuntur numquam facere ullam sint dolorem amet obcaecati, assumenda quidem error saepe ducimus incidunt labore alias nobis.</Typography>
                <Box >
                    <Button color='primary' variant='contained' style={{ marginInline: '2rem' }}>Download</Button>
                    <Button color='primary' variant='outlined' style={{ marginInline: '1rem',border:'2px solid hsl(231, 69%, 60%)',color:'hsl(231, 69%, 60%)' }}>What's new</Button>
                </Box>
            </Box>
            <img src='/laptop.svg' className={classes.image}>
            </img>
        </Box>
    )
}

export default Intro
