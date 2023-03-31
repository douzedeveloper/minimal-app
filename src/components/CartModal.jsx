import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import CartProduct from './CartProduct';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -5,
        top: 1,
        backgroundColor: '#6a3b99'
    },
}));

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: '0.4rem',
    borderRadius: '1rem',
};

const modalContainerStyle = {
    maxHeight: 'calc(90vh - 200px)',
    overflowY: 'auto',
};

const h2Style = {
    fontSize: '1.2rem',
};

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
};


const flexBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const closeButtonStyle = {
    alignSelf: 'flex-end',
};

const productsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1rem',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem'
};

export default function CartModal({ cart,
    deleteFromCart,
    clearCart,
    calculateTotalPriceOfCart,
    totalPriceShoppingCart,
}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (cart.length > 0) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton aria-label="cart" onClick={handleOpen}>
                <StyledBadge badgeContent={cart.length} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>

            <Modal open={open} onClose={handleClose}>
                <Box sx={{ ...modalStyle, ...flexBoxStyle }}>
                    <IconButton onClick={handleClose} sx={closeButtonStyle}>
                        <CloseIcon />
                    </IconButton>

                    <h2 style={{ ...h2Style, ...titleStyle }}>
                        Tu Orden <ShoppingCartCheckoutIcon color="secondary" />
                    </h2>

                    <div style={modalContainerStyle}>
                        {cart.map((product) => (
                            <CartProduct key={product.id} data={product} deleteFromCart={deleteFromCart} />
                        ))}
                    </div>

                    <div>
                        {totalPriceShoppingCart > 0 && <p className='total-price'>Total a pagar: <strong>{totalPriceShoppingCart.toFixed(2) + '$'}</strong></p>}
                        <div style={buttonContainerStyle}>
                            <Button variant="outlined" color="success" onClick={() => calculateTotalPriceOfCart()}>
                                Total
                            </Button>
                            <Button variant="outlined" color="error" onClick={() => { clearCart(); handleClose(); }}>Limpiar</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}