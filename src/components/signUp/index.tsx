import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import TextField from '@material-ui/core/TextField';
 import * as Yup from 'yup';
 import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: 
      {
        margin: theme.spacing(1),
        flexGrow: 1,
      },
    paper: {
      
        margin: theme.spacing(1),
        width: 200,
        flexGrow: 1,
        
      }
    
    
  }),
);
 
const schema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('First Name Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Last name Required'),
  email: Yup.string().email('Invalid email address').required('Email Required'),
  password: Yup.string()
  .min(6, "Password is too short.")
  .max(20, "Password is too long.")
  .required("This field is required."),
  contactNumber: Yup.string()
  .required("This field is required.")
  
})

 const SignupForm: React.FC<any>= ({submit, setFormValues, prevValues}) => {
  const classes = useStyles();
   return (
    <div className={classes.root}>
     <Formik
       initialValues={prevValues}
       validationSchema={schema}
       onSubmit={(values) => {
        
        submit(1)
        setFormValues({...values})
          
       }}
     >
       {( formik ) => (
         <div className={classes.root}>
            <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}
>
       <Form className={classes.paper}>
         <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
       <Grid item xs={6} lg = {3}>
         <Field as =  {TextField} fullWidth helperText={< ErrorMessage name = "firstName"/>} variant="outlined" required label="First Name"  name="firstName" type="text" />
       </Grid>
       <Grid item xs={6} lg = {3}>
         <Field as = {TextField} fullWidth helperText={< ErrorMessage name = "lastName"/>} variant="outlined" required label="Last Name" name="lastName" type="text" />
       </Grid>
       </Grid>
       <Grid container
       direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
       <Grid item xs={12} lg = {6}>
         <Field as = {TextField} fullWidth helperText={< ErrorMessage name = "email"/>} variant="outlined" required label="Email Address" name="email" type="email" />
       </Grid>
       </Grid>
       <Grid container
       direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
       <Grid item xs={6} lg = {3}>
         <Field as =  {TextField} fullWidth helperText={< ErrorMessage name = "password"/>} variant="outlined" required label="Password" name="password" type="password" />
       </Grid>
       <Grid item xs={6} lg = {3}>
         <Field as =  {TextField} fullWidth helperText={< ErrorMessage name = "contactNumber"/>} variant="outlined" required label="Contact Number" name="contactNumber" type="string" />
       </Grid>
       </Grid>
       <Grid container
       direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
       <Grid item xs={12} lg = {6}>
         <Button fullWidth type = "submit" variant="outlined" color="primary">Submit</Button>
         </Grid>
       </Grid>
        
       </Form>
       </Grid>
       </div>
       )}
     </Formik>
     </div>
   );
 };

 export default SignupForm;