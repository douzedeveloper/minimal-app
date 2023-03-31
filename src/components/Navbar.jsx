import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CartModal from './CartModal';

const StyledAppBar = styled(AppBar)({ backgroundColor: '#6a3b9914' });

export default function Navbar({ cart,
  deleteFromCart,
  clearCart,
  calculateTotalPriceOfCart,
  totalPriceShoppingCart,
}) {

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          <CartModal
            cart={cart}
            deleteFromCart={deleteFromCart}
            clearCart={clearCart}
            calculateTotalPriceOfCart={calculateTotalPriceOfCart}
            totalPriceShoppingCart={totalPriceShoppingCart}
          />
        </Toolbar>
      </StyledAppBar>
    </>
  );
}