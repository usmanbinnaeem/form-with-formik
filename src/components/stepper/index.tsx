import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SignupForm from "../signUp/index";
import ReviewPage from "../reviewPage/index";
import Payment from "../payment/index"
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
     
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
   return ['Personal Detail', 'Payment Detail', 'Review']
}

const getStepContent =(stepIndex: number, setStep: React.Dispatch<React.SetStateAction<number>>, setFormValues: React.Dispatch<React.SetStateAction<{}>>, formValues: {}) => {
  switch (stepIndex) {
    case 0:
      return <SignupForm submit = {setStep} prevValues = {formValues} setFormValues = {setFormValues} />;
    case 1:
      return <Payment submit = {setStep}  prevValues = {formValues} setFormValues = {setFormValues}  />;
    case 2:
      return <ReviewPage  submit = {setStep}  values = {formValues} />;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [formValues, setFormvalues] = useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
 
  return (
    
    <div className={classes.root}>
       <Grid container
       direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
    <Grid item xs={12} lg = {6}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </Grid>
      </Grid>

      {
          getStepContent(activeStep, setActiveStep, setFormvalues, formValues)
      }
      
    </div>
    
  );
}
