import Transaction from './Transaction';
import { Typography, List, Divider, styled, Box } from '@mui/material';



const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
    }
`;

const Transactions = ({ Details,UpdateDetails }) => {
  return (
    <Component>
      <Typography  variant="h5">Transaction History</Typography>
      <Divider  style={{width: '100%'}}/>
      <List>
        {
          Details.map(transaction => (
             <Transaction transaction={transaction} UpdateDetails={UpdateDetails} Details={Details}/>
          ))
        }
      </List>
    </Component>
  );
};

export default Transactions;
