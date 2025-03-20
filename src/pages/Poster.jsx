
import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'; 

import {
  Box,
  Typography,
  Grid,
  Button,
  CircularProgress,
  TextField,
  Input,
  IconButton
} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import QRCode from 'react-qr-code';
import html2PDF from 'html2pdf.js';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import HeightIcon from '@mui/icons-material/Height';
import PetsIcon from '@mui/icons-material/Pets';  // Optional: to represent species or other info
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FemaleIcon from '@mui/icons-material/Female';
import TagIcon from '@mui/icons-material/Tag';
import MoodIcon from '@mui/icons-material/Mood';
import MaleIcon from '@mui/icons-material/Male';
import DescriptionIcon from '@mui/icons-material/Description';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import { CheckBox } from '@mui/icons-material';

const Poster = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [displayText, setDisplayText] = useState('Ja esat redzējuši, lūgums zvaniet!');

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2 digits (e.g., 01, 02)
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
  
    // Return the date in 'YYYY-MM-DD' format
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchPetDetails = async () => {
      const accessToken = localStorage.getItem('access_token');

      if (!accessToken) {
        setError('You must be logged in to view pets.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://petfinderbackend-production.up.railway.app/api/pets/${id}/?format=json`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch pet details');
        }
        const data = await response.json();
        setPet(data);
      } catch (err) {
        setError('Failed to fetch pet details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setDisplayText(`Ja esat redzējuši, lūgums zvaniet! ${value ? ' ' + value : ''}`);
  };

  const handleAcceptChange = () => {
    setIsEmpty(!isEmpty)
  }

  const generatePDF = async () => {
    try {
      const page = document.getElementById('page');
      const options = {
        jsPDF: { format: 'a4' },
        html2canvas: { useCORS: true, scale: 2 },
      };
      await html2PDF().from(page).set(options).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!pet) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="textSecondary">
          Pet details are unavailable.
        </Typography>
      </Box>
    );
  }

  return (
        <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
      // minHeight: '100vh',
      // padding: 2,
    }}
  >
      <Box
        id="page"
        sx={{
          background: '#fff',
          maxWidth: "794px",  /* A4 width in pixels */
          //height: "1123px", /* A4 height in pixels */
          maxHeight: "1122px", 
          padding: 1,
       
          boxSizing: "border-box", 
          border: '1px solid #ccc',
          borderRadius: 1,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box style={{ background: 'darkred', padding: '0.5rem 0', marginBottom: '0.5rem' }}>
          <Typography
            variant="h1"
            textAlign="center"
            style={{ textTransform: 'uppercase', fontWeight: 700, color: '#fff', fontSize: '2.4rem' }}
          >
            UZMANĪBU!
          </Typography>
          <Typography
            variant="h4"
            textAlign="center"
            style={{
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 500
              // fontSize: '1rem',
            }}
          >
            Pazudis {pet.species_display}
          </Typography>
        </Box>
        <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
  {pet.image && (
    <Box display="flex" justifyContent="center" alignItems="center">
      <img
        src={pet.image}
        alt={pet.name}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: 1 }}
      />
    </Box>
  )}
</Grid>

        </Grid>
        <Grid container spacing={3}>


          <Grid item xs={4} md={4}  >
          <Box display="flex" alignItems="center" my={1} gap={1}>
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
          <MergeTypeIcon />
            </IconButton>
           
              <Typography><strong>Šķirne:</strong> {pet.breed || '-'}</Typography>
          </Box>
          <Box display="flex" alignItems="center" my={1} gap={1}>
            <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <MaleIcon />
            </IconButton>
              

              <Typography><strong>Dzimums:</strong> {pet.gender_display || '-'}</Typography>
          </Box>
      
          </Grid>
          <Grid item xs={4} md={4}>

                        <Box display="flex" alignItems="center" my={1} gap={1}>
            <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <CakeIcon />
            </IconButton>
             
              <Typography><strong>Vecums:</strong> {pet.age_display || '-'}</Typography>
            </Box>
              <Box display="flex" alignItems="center" my={1} gap={1}>
              <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
              <HeightIcon /> 
            </IconButton>
            <Typography><strong>Augums:</strong> {pet.size_display || '-'}</Typography>
            </Box>         
          </Grid>
          <Grid item xs={4} md={4} >
         
            <Box display="flex" alignItems="center" my={1} gap={1}>
            <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <MoodIcon />
            </IconButton>
            <Typography><strong>Uzvedība:</strong> {pet.behavior_display || '-'}</Typography>
            </Box>
            <Box display="flex" alignItems="center" my={1} gap={1}>
            <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <AccessTimeIcon />
            </IconButton>
             <Typography><strong>Datums:</strong> {formatDate(pet.created_at)}</Typography>
            </Box>
          </Grid>

        </Grid>
        <Grid container spacing={3} >
          <Grid item xs={12} md={12} >
          
          <Box display="flex" style={{alignItems: "flex-start"}} mb={1} mt={0} gap={1}>
<IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
<DescriptionIcon />
</IconButton>

<Typography><strong>Īss apraksts:</strong> {pet.notes || '-'}</Typography>
</Box>

</Grid>
</Grid>

<Grid container spacing={3}>
  <Grid item xs={12} md={12}>
    <Box
      style={{
        background: 'darkred',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: "76px",
  
      }}
    >
      <Typography
        variant="h6"
        textAlign="center"
        style={{
          textTransform: 'uppercase',
          fontWeight: '700',
          color: '#fff',
        }}
      >
        Ja esat redzējuši, lūgums sazināties!
      </Typography>
      
      {/* Conditionally render input only if phone is not empty */}
      {phone && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <input
            type="text"
            placeholder=""
            value={phone}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              textAlign: 'center',
              fontSize: '1.4rem',
              fontWeight: '500',
              marginTop: '0.2rem',
              padding: '0.2rem',
            }}
          />
        </Box>
      )}
    </Box>
  </Grid>
</Grid>

                 <Grid container spacing={3} py={1}>
          <Grid item xs={4} md={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Box  >
          <QRCode value={`https://pawclix.com/pets/${pet.id}`}  style={{maxHeight: 140}} />
        </Box>
        </Grid>
        <Grid item xs={8} md={6}>

        <Box  
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                // marginLeft: '1rem',
              }}
            >
              <Typography variant="body2" textAlign="start" sx={{  fontWeight: 'bold' }}>
               1. Noskenējiet QR kodu
              </Typography>
              <Typography variant="body2" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
               2. Klikšķiniet uz saites, kas parādās
              </Typography>
              <Typography variant="body2" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
              3. Rakstiet komentārus, ja ir kāda informācija
              </Typography>
              <Typography variant="body2" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
              4. Sekojiet līdzi mājdzīvnieka statusam
              </Typography>
              <Typography variant="body2" textAlign="start" sx={{ mt: 1, fontWeight: 'bold' }}>
              5. Dalieties ar saiti, lai palīdzētu mājdzīvniekam
              </Typography>

            </Box>
            </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent="center" alignItems="center" >
            <Grid item xs={12} md={12} style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0",  padding: "0"}}>
              <Typography variant='body2' style={{fontSize: "0.7rem"}}>Made by PawClix</Typography>
              </Grid>
              </Grid>
      </Box>

      <Grid container spacing={3} my={1} style={{display: "flex", justifyContent: "center"}}>
            <Grid item xs={12} md={12}>
              <Box style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <TextField
          label="Jūsu tālruņa numurs"
          variant="outlined"
          value={phone}
          onChange={handlePhoneChange}
          style={{  width: "100%" }}
        />
        {/* <FormControlLabel control={<Checkbox   onChange={handleAcceptChange} />} label="Es nevēlos norādīt savu telefona numuru" /> */}
        </Box>
              </Grid>
              
              </Grid>
   

              <Grid container spacing={3} py={1}>
              <Grid item xs={12} md={12}>
      <Box textAlign="center" style={{display: "flex", justifyContent: "space-between"}} mt={4}>
      <Button
  variant="outlined"
  color="primary"
  startIcon={<ArrowBackIcon />}
  component={Link}
  to={`/pets/${pet.id}`}
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  Atpakaļ
</Button>

        <Button
          variant="contained"
          color="primary"
          // disabled={!(phone.trim() === '' || isEmpty)}
          onClick={generatePDF}
          startIcon={<ArrowDownwardIcon />}
        >
          Lejupielādēt PDF
        </Button>
      </Box>
      </Grid>
      </Grid>
      </Box>
  );
};

export default Poster;
