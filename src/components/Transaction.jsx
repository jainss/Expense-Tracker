import { ListItemText, ListItem, styled, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const List = styled(ListItem)`
    display: flex;
    marginTop: 10px;
    border: 1px solid #F6F6F6;
`;


const Transaction= ({transaction,UpdateDetails, Details})=>{

    const color = transaction.amount >=0 ? 'Green' : 'Red';
    
    const deleteTransaction=(id)=>{
        UpdateDetails(Details.filter(item=>item.id!==id));
    }

    return (
        <List style={{background: `${color}`, color: '#fff'}}>
            <ListItemIcon>
            <DeleteIcon onClick={()=>deleteTransaction(transaction.id)}/>
            </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={transaction.amount} />
        </List>
    
    )
}


export default Transaction; 