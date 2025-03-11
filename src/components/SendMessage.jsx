// SendMessage.jsx
import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Grid2,
  Typography,
  Box,
  TextField,
  Tooltip,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EventIcon from '@mui/icons-material/Event';
import { useAuth } from '../contexts/AuthContext'; // Import Auth context

const SendMessage = ({
  message, // message value
  selectedDate, // date value
  selectedTime, // time value
  onUploadImage,
  filePreview,
  

  locationAdded,
  // addLocationTrigger,
  isLocationAdded,
  onAddLocation,
  onRemoveLocation,

  onMessageChange, // event handler on message change
  onSelectDate, // event handler on date change
  onSelectTime, // event handler on time change
  onSendMessage, // event handler on SEND msg

}) => {
  const { user } = useAuth(); // Get user from AuthContext
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUploadImage(file);
    }
  };

  return (
    <Card>
      <CardContent style={{ paddingBottom: "1rem" }} >
          <Box display="flex" alignItems="center" marginBottom="1rem">
            <Avatar sx={{backgroundColor: "#f1c40f"}} >{user?.username ? user.username.charAt(0).toUpperCase() : '?'}</Avatar>
            <Box ml={2}>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>{user?.username ? user.username.toUpperCase() : 'Nezināms'}</Typography>
            </Box>
          </Box>

          <Box mb={2}>
            <TextField
              id="message-input"
              label="Ierakstiet savu komentāru šeit..."
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={message}
              onChange={(e) => onMessageChange(e.target.value)}
            />
          </Box>
          {/* {addLocationTrigger && ( */}
          {isLocationAdded && (
          
          <Grid container spacing={2} marginBottom="1rem">
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField id="date" name="date" label="Datums" type="date" fullWidth InputLabelProps={{ shrink: true }} variant="outlined" value={selectedDate} onChange={(e) => onSelectDate(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField id="time" name="time" label="Laiks" type="time" fullWidth InputLabelProps={{ shrink: true }} variant="outlined" value={selectedTime} onChange={(e) => onSelectTime(e.target.value)} />
            </Grid>
          </Grid>)}

  

          {filePreview && (
            <Box mb={2} style={{ width: '100%' }}>
              <img src={filePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
            </Box>
          )}

          <Box display="flex" justifyContent="space-between">
              
              <Box>
              {/* {!addLocationTrigger ? ( */}
  {!isLocationAdded ? (

                <Tooltip title="Pievienot atrašanās vietu">
                  <IconButton onClick={onAddLocation} style={{ backgroundColor: '#555', color: '#fff' }}>
                    <AddLocationAltIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Noņemt atrašanās vietu">
                  <IconButton onClick={onRemoveLocation} style={{ backgroundColor: '#555', color: '#fff' }}>
                    <WrongLocationIcon />
                  </IconButton>
                </Tooltip>
              )}

        
              <Tooltip title="Pievienot foto">
  <label htmlFor="photo-upload-input">
    <IconButton
      component="span"
      sx={{ backgroundColor: '#555', marginLeft: "1rem", color: '#fff', '&:hover': { backgroundColor: '#777' } }}
    >
      <AddPhotoAlternateIcon />
    </IconButton>
  </label>
</Tooltip>
<input
  accept="image/*"
  id="photo-upload-input"
  type="file"
  onChange={handleFileInputChange}
  style={{ display: 'none' }}
/>

              </Box>

            <Box>
              <Tooltip title="Aizsūtīt">
                <IconButton onClick={onSendMessage} style={{ backgroundColor: '#555', color: '#fff' }}>
                  <SendIcon />
                </IconButton>
              </Tooltip>
            </Box>

          </Box>
      </CardContent>
    </Card>
  );
};

export default SendMessage;