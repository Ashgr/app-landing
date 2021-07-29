import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MdExpandMore } from 'react-icons/md';
import Question from './Question';

const useStyles = makeStyles((theme) => ({
    questionsTitile: {
        marginTop: "2em",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.25rem",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "5em",
        },
    },
    questionsSubtitle: {
        maxWidth: "50%",
        margin: "0 auto",
        marginBottom:'1rem',
        fontSize:'1.2rem',
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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}))

const FAQ = () => {
    const classes = useStyles();
    const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut beatae aliquid adipisci consequuntur deserunt ad, officiis ipsum et totam voluptatem. Aperiam laudantium delectus natus sapiente tempora unde laborum corrupti.'
    return (
        <Box>
            <Typography
                variant="h4"
                align="center"
                paragraph
                className={classes.questionsTitile}
            >Frequently Asked Questions</Typography>
            <Typography
                variant="subtitle1"
                align="center"
                paragraph
                className={classes.questionsSubtitle}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis consequatur dolor quidem obcaecati distinctio fugiat accusantium
            </Typography>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent = 'space-between'>
                <Question title ={'Can we use it without internet ?'} content = {content}/>
                <Question title ={'Is this app a non profit app ?'} content = {content}/>
                <Question title ={"What if the app doesnt work ? "} content = {content}/>
                <Question title ={"How can i use it in huawei phone ?"} content = {content}/>
            </Box>
        </Box>
    )
}

export default FAQ
