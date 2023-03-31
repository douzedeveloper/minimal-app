import { IconButton, List, ListItem } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default function CartProduct({ data, deleteFromCart }) {
  return (
    <List>
      <ListItem divider>
        <div style={listItemStyle}>
          <div>
            {data.title} --//-- <b>{data.price}$</b>
          </div>
          <IconButton size="small" color="error" onClick={() => deleteFromCart(data.id)}>
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </ListItem>
    </List>
  );
}


