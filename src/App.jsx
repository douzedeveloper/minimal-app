import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import { styled } from '@mui/material/styles';
import Product from './components/Product';
import { useReducer } from 'react';
import { reducerCart, productsInitialState } from './reducers/shoppingCart_reducer';
import TYPES from './reducers/actionTypes';


const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));

export default function App() {
  const [state, dispatch] = useReducer(reducerCart, productsInitialState);

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id
    })
  }

  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART
    })
  }

  const calculateTotalPriceOfCart = () => {
    dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART })
  }

  const gridContainerStyle = {
    marginBottom: '2rem',
  };


  return (
    <div>
      <Navbar
        cart={state.cart}
        deleteFromCart={deleteFromCart}
        clearCart={clearCart}
        calculateTotalPriceOfCart={calculateTotalPriceOfCart}
        totalPriceShoppingCart={state.totalPriceShoppingCart}
      />

      <StyledContainer>
        <Grid container spacing={2} style={gridContainerStyle}>
          {
            state.products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4}>
                <Product data={product} addToCart={addToCart} />
              </Grid>
            ))
          }
        </Grid>
      </StyledContainer>
    </div >
  );
}