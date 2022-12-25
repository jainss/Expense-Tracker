import "./App.css";
import { Typography, Box, styled } from "@mui/material";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import Transactions from "./components/Transactions";
import NewTransaction from "./components/NewTransaction";
import { useState } from "react";

const Header = styled(Typography)`
  margin: 10px 0;
  color: blue;
  font-size: 36px;
  text-transform: uppercase;
`;


const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`;

function App() {

  const [Details,UpdateDetails]= useState([
    {id: 1, text: 'Momos', amount: -250},
    {id: 2, text: 'Salary', amount: 25000},
    {id: 3, text: 'Mall', amount: -1250},
    {id: 4, text: 'Bonus', amount: 258},
  ]);

  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance Details={Details}/>
          <Expense Details={Details}/>
          <NewTransaction UpdateDetails={UpdateDetails}/>
        </Box>
        <Box>
        <Transactions  Details={Details} UpdateDetails={UpdateDetails} />
        </Box>
      </Component>
    </div>
  );
}

export default App;
