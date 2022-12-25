import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { useState } from "react";


const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
`;



const NewTransaction = ({UpdateDetails}) => {
   const [text,Newtext]=useState('');
   const [price,NewPrice]=useState();

   const addNewTransaction=(e)=>{
    const transaction={
      id:Math.floor(Math.random()*100000),
      text:text,
      amount:+price
    }
    UpdateDetails(preState=>[transaction,...preState]);
   }

  return (
    <Container>
      <Typography variant="h5"> Enter New Transactions</Typography>
      <TextField onChange={(e)=>Newtext(e.target.value)}/>
      <TextField onChange={(e)=>NewPrice(e.target.value)}/>
      <StyledButton variant="contained" onClick={addNewTransaction}>Add Transaction</StyledButton>
    </Container>
  );
};

export default NewTransaction;
