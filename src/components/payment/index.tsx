import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import { TextField, Theme , Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles,createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>createStyles({
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
 
const registerschema = Yup.object({
  address: Yup.string()
  .max(45, 'Must be 15 characters or less')
  .required('Adress Required'),
city: Yup.string()
  .max(20, 'Must be 20 characters or less')
  .required('City Name Required'),
zipcode: Yup.string().required('ZipCode Required'),
cardnumber: Yup.string()
  .max(14, "CardNumber is too long.")
  .required("This field is required."),
cardholdername: Yup.string()
  .max(15,"Must be 15 characters or less")
  .required("This field is required")
  
})

 const Payment: React.FC<any>= ({submit, setFormValues, prevValues}) => {
  const classes = useStyles();
   return (
    <div className={classes.root}>
     <Formik
       initialValues={prevValues}
       validationSchema={registerschema}
       onSubmit={(values) => {
        
        submit(2)
        setFormValues({...values, ...prevValues})
          
       }}
     >
       {( formik) => (
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
    <Grid item xs={12} lg = {6}>
       <Field as = {TextField} fullWidth helperText={< ErrorMessage name = "address"/>} variant="outlined" required label="Address" name="address" type="text" />
       </Grid>
       </Grid>
       <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
    <Grid item xs={6} lg = {3}>
       <Field as = {TextField} fullWidth helperText={< ErrorMessage name = "city"/>} variant="outlined" required label="City" name="city" type="text" />
       </Grid>
       <Grid item xs={6} lg = {3}>
       <Field as = {TextField} fullWidth helperText={< ErrorMessage name = "zipcode"/>} variant="outlined" required label="Zip Code" name="zipcode" type="text" />
       </Grid>
       </Grid>
       <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
    <Grid item xs={6} lg = {3}>
       <Field as = {TextField} fullWidth helperText={< ErrorMessage name = "cardnumber"/>} variant="outlined" required label="Card Number" name="cardnumber" type="text" />
       </Grid>
       <Grid item xs={6} lg = {3}>
       <Field as = {TextField} fullWidth helperText={< ErrorMessage name = "cardholdername"/>} variant="outlined" required label="Card Holder Name" name="cardholdername" type="text" />
       </Grid>
       </Grid>
       <Grid container
       direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
       <Grid item xs={6} lg = {3}>
       <Button onClick = {() => {
        submit(0)
       }} fullWidth variant="outlined" color="primary" type="submit">Back</Button>
       </Grid>
      <Grid item xs={6} lg = {3}>
       <Button fullWidth type="submit" variant="outlined" color="primary">Submit</Button>
      
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

 export default Payment;
