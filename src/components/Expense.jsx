import { Box, Typography, Card, CardContent, styled } from "@mui/material";


const Container = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        padding: 10px;
    }
`;

const Expense = ({Details}) => {
   
    const amount= Details.map(Detail => Detail.amount);
    const totalIncome= amount.filter(item=>item>0).reduce((amount,item)=>(amount+=item),0).toFixed(2);
    const totalExpence= amount.filter(item=>item<0).reduce((amount,item)=>(amount+=item),0).toFixed(2);

  return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{ color: 'green' }}>₹{totalIncome}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography style={{ color: 'red' }}>₹{totalExpence}</Typography>
                </CardContent>
            </Card>
        </Container>
  );
};

export default Expense;
