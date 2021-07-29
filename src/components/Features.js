import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FeatureTabs from './FeatureTabs'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    featuresTitile: {
        marginTop: "0em",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.25rem",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "6em",
        },
    },
    featuresSubtitle: {
        maxWidth: "50%",
        margin: "0 auto",
        fontSize: '1.3rem',
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            maxWidth: "80%",
            margin: "1em auto",
            fontSize: "1.5rem",
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "90%",
        },
    },
}))

const Features = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" style={{ marginTop: '100px' }}>
            {/* ---Features Header & subtitle--- */}
            <Grid item>
                <Typography
                    variant="h4"
                    align="center"
                    paragraph
                    className={classes.featuresTitile}
                >
                    Features
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    paragraph
                    className={classes.featuresSubtitle}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempora, quas modi labore dignissimos blanditiis magni omnis pariatur quaerat reiciendis delectus nobis eum voluptas placeat ducimus earum perspiciatis. Debitis, rerum!
                </Typography>
            </Grid>
            <Grid item>
                <FeatureTabs />
            </Grid>
        </Grid>
    )
}

export default Features
