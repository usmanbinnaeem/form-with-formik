import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


 const ReviewPage: React.FC<any>= ({submit,values}) => {
   return (
    <>
    <p>Name:{values.firstName} {values.lastName}</p>
   <p>Email: {values.email}</p>
   <p>Adress:{values.address}</p>
   <p>City:{values.city}</p>
   <p>Zipcode:{values.zipcode}</p> 
   <p>CardNubmer:{values.cardnumber}</p>
   <p>CardHolder:{values.cardholdername}</p>


   <Grid container
       direction="row"
  justify="center"
  alignItems="center"
  spacing = {3}>
       <Grid item xs={6} lg = {3}>
   <Button fullWidth variant="outlined" color="primary" onClick = {() => {
     submit(1)
   }}>Back</Button>
   </Grid>
   <Grid item xs={6} lg = {3}>

   <Button fullWidth variant="outlined" color="primary" onClick = {() => {
     submit(0)
   }}>Reset</Button>
   </Grid>
   </Grid>



    </>
   );
 };

 export default ReviewPage;