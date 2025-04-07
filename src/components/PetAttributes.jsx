import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // to extract the pet ID from the URL
import { CircularProgress, Alert,Grid, Typography, Card,CardMedia,Box,Tooltip,  IconButton   } from '@mui/material';
import Chip from '@mui/material/Chip';
import TagIcon from '@mui/icons-material/Tag';
import HeightIcon from '@mui/icons-material/Height';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import MoodIcon from '@mui/icons-material/Mood';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import CakeIcon from '@mui/icons-material/Cake';
import EventIcon from '@mui/icons-material/Event';
import TextureIcon from '@mui/icons-material/Texture';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PetsIcon from '@mui/icons-material/Pets';
import moment from 'moment';
import { format } from "date-fns";
import { lv } from 'date-fns/locale';
import 'moment/locale/lv'; // Import Latvian locale

// const EventDate = ({ date }) => {
//   moment.locale('lv'); // Set the Latvian locale globally
//   return (
//     <span style={{ textTransform: 'capitalize' }}>
//       {/* {date ? moment(date).fromNow() : 'Date not available'} */}
//       {moment(date).format('YYYY-MM-DD HH:mm')}
//     </span>
//   );
// };


  
const PetAttributes = ({ pet }) => {


 
  const AGE_LABELS_BY_SPECIES = {
    1: { 1: "Kucēns", 2: "Pieaugušais", 3: "Seniors" },  // Dogs
    2: { 1: "Kaķēns", 2: "Pieaugušais", 3: "Seniors" },  // Cats
    3: { 1: "Mazulis", 2: "Pieaugušais", 3: "Seniors" }, // Unknown/Other
  };
console.log("pet", pet)

    // Find the correct age label based on species
  const ageLabel = AGE_LABELS_BY_SPECIES[pet.species]?.[pet.age] || "-";
  const breedLabel = pet.breed ? pet.breed : "-";
//   const eventDate = pet.event_occurred_at ? new Date(pet.event_occurred_at.replace(" ", "T")) : null;

// const formattedDate = eventDate ? format(eventDate, "MMMM d, yyyy") : "N/A";
// const formattedTime = eventDate ? format(eventDate, "h:mm a") : "N/A";

  // const latestStatus = pet.sightings_history.length > 0 ? pet.sightings_history[pet.sightings_history.length - 1] : null;
  // const eventDate = latestStatus?.event_occurred_at || null;

  const eventDate = pet.event_occurred_at
  ? new Date(pet.event_occurred_at.replace(" ", "T"))
  : null;

const formattedDate = eventDate
  ? format(eventDate, "d. MMMM yyyy", { locale: lv })
  : "Nav pieejams";

const formattedTime = eventDate
  ? format(eventDate, "HH:mm", { locale: lv })
  : "Nav pieejams";

  return (
    <Box>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <TagIcon />
          </IconButton>
          <b>ID:</b> {pet.identifier ? pet.identifier : 'N/A'}
          <Typography variant="body1" gutterBottom ></Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <HeightIcon />
          </IconButton>
          <b>Augums:</b> {pet.size_display}
          <Typography variant="body1" gutterBottom></Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          {' '}
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <MaleIcon />{' '}
          </IconButton>
          <b>Dzimums:</b> {pet.gender_display}
          <Typography variant="body1" gutterBottom></Typography>
        </Box>
      </Grid>
      {/* <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.4rem',
          }}
        >
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <MoodIcon />{' '}
          </IconButton>{' '}
          <b>Uzvedība:</b> {pet.behavior_display}
          <Typography variant="body1" gutterBottom></Typography>
        </Box>
      </Grid> */}
      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <CakeIcon />
          </IconButton>{' '}
          <b>Vecums:</b> {ageLabel}
          <Typography variant="body1" gutterBottom></Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          {' '}
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <MergeTypeIcon />{' '}
          </IconButton>
          <b>Šķirne:</b> <span style={{textTransform: "capitalize" }}>{breedLabel}</span>
          <Typography variant="body1" gutterBottom></Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <TextureIcon />{' '}
          </IconButton>{' '}
          <b>Kažoka raksts:</b> {pet.pattern_display}
          <Typography variant="body1" gutterBottom></Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <ColorLensIcon />
          </IconButton>{' '}
          {/* <b>Dominējošā krāsa:</b> */}
          <b>Pamatkrāsa:</b> {pet.primary_color_display}
          <Typography variant="body1" gutterBottom></Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <ColorLensIcon />{' '}
          </IconButton>
          <b>Sekundārā krāsa:</b> {pet.secondary_color_display}

          <Typography variant="body1" gutterBottom></Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingBottom: '0.3rem',
          }}
        >
          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd' }}>
            <EventIcon />{' '}
          </IconButton>{' '}
          <b>Datums un laiks:</b> {formattedDate}, {formattedTime}


        </Box>
      </Grid>


    </Grid>
  </Box>
   
  );
};

export default PetAttributes;
