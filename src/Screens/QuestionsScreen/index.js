import { Button, Grid, LinearProgress, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Question from '../../Components/Question';
import { Alert } from '@material-ui/lab';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { allQuestions } from './Questions';
import MinMaxQuestion from '../../Components/Question/MinMax';
import GetInformationQuestion from '../../Components/Question/GetInformation';


export default function Index() {
    const [questionNumber, setQuestionNumber] = useState(0);

    const handleNextClick = () => {
        if ((questionNumber + 1) !== allQuestions.length) {
            setQuestionNumber(questionNumber + 1);
        }
    }
    const handlePreviousClick = () => {
        if (questionNumber !== 0) {
            setQuestionNumber(questionNumber - 1);
        }
    }

    const handleQuestions = () => {
        if (allQuestions[questionNumber]?.minMax || allQuestions[questionNumber]?.loanPayment || allQuestions[questionNumber]?.downPayment) {
            return <MinMaxQuestion currentQuestion={allQuestions[questionNumber]} />;
        } else if (allQuestions[questionNumber]?.getInformation) {
            return <GetInformationQuestion currentQuestion={allQuestions[questionNumber]} />;
        } else {
            return <Question currentQuestion={allQuestions[questionNumber]} />;
        }
    }

    const handleSubmit = () => {
        return alert("Your form has submitted");
    }
    return (
        <Grid container >
            <Grid item container xs={12} md={10} className="p-5">
                <Grid item xs={12} className="mb-3">
                    <LinearProgress variant="buffer" color="primary" value={(questionNumber * 8.33)} valueBuffer={questionNumber * 10} />
                </Grid>
                <Grid item container xs={12}>
                    <Alert severity="info">
                        <strong>Quiz Rules:</strong> Select natural &amp; instant response only for accurate prediction
                    </Alert>
                </Grid>
                <Grid item container xs={12} className="mb-3 mt-4">
                    <Typography variant="h5" style={{ fontWeight: 700 }}>Question # {allQuestions[questionNumber]?.questionNumber}/<span style={{ fontSize: '16px' }}>12</span></Typography>
                </Grid>
                <Grid item container xs={12}>
                    {handleQuestions()}
                </Grid>
                <Grid item container xs={12} className="mb-3 mt-4" justify="center">
                    <Button variant="contained" className="mr-5" color="primary" onClick={handlePreviousClick} startIcon={<ArrowLeftIcon />}>Previous</Button>
                    {allQuestions[questionNumber]?.lastQuestion ?
                        <Button variant="contained" color="primary" className="" onClick={handleSubmit}>Submit</Button> :
                        <Button variant="contained" color="primary" className="" onClick={handleNextClick} endIcon={<ArrowRightIcon />}>Next</Button>}
                </Grid>
            </Grid>
            <Grid item container xs={2} className="border mb-2 mt-2" justify="center" alignContent="center">
                Ad Here
            </Grid>

            <Grid item container className="border mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>
        </Grid>

    )
}
