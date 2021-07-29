import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MdExpandMore } from 'react-icons/md';
const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: '1.5rem',
        fontWeight: theme.typography.fontWeightRegular,
    },
    content: {
        padding: '0rem 0.7rem',
        fontSize:'1.1rem'
    },
    hover: {
        transition:"color 0.3s ease",
        "&:hover": {
            color: 'hsl(0, 94%, 66%)',
        },
    }
}))

const Question = ({ title, content }) => {
    const classes = useStyles()
    return (
        <Accordion style={{ width: '50%', minWidth:'375px' ,marginBottom: '2rem', marginTop: '0.5rem', boxShadow: 'grey 0px 2px 4px' }}>
            <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{ padding: '0.6rem 0.8rem' }}
                className={classes.hover}
            >
                <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={classes.content} variant="body2">
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Question
