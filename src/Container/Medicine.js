import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Medicine() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handSubmit = () => {
      let data = {
        name,
        price,
        quantity,
        expiry
      }

      // console.log(data);

      localStorage.setItem('Medicine', JSON.stringify(data))
      

      setOpen(false);
    }

    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Add Medicine
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Medicine</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name='name'
              label="Medicine name"
              fullWidth
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              name='price'
              label="Medicine price"
              fullWidth
              variant="standard"
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              name='quantity'
              label="Medicine quantity"
              fullWidth
              variant="standard"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="expiry"
              name='expiry'
              label="Medicine expiry"
              fullWidth
              variant="standard"
              onChange={(e) => setExpiry(e.target.value)}
            />     
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}