import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { Modal, Box, Typography, Button, Rating, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon

const ProductModal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const { image, title, price, rating } = props; // Destructure the passed props

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true), // Open the modal
        // close: () => setOpen(false), // Close the modal
    }));
    return (
        <Modal
            ref={ref}
            open={open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: 'black',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <div className='section'>
                    <div className='first-half'>
                        <img className='image' src={image} alt='product' />
                    </div>
                    <div className='second-half'>
                        <div className='product-name'>{title}</div>
                        <div className='price'>${price}</div>
                        <Rating name="half-rating" defaultValue={rating} precision={0.5}/>

                        <Button variant='outlined'>Add to Cart</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
});

export default ProductModal;
