import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
  Container,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { BASE_URL } from './config/config';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ArticlesList = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const colors = ['2474A3', '21ABCD', '31758D', '006980', '476997', '666699', '88AFD2', '8AB9F1'];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const fontColor = 'white';
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      const accessToken = localStorage.getItem('access_token');
  
      try {
        const response = await axios.get(`${API_BASE_URL}/articles/articles/`, {
          headers: accessToken
            ? { Authorization: `Bearer ${accessToken}` }
            : {}, // no auth header if not logged in
        });
  
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Neizdevās ielādēt rakstus. Lūdzu, mēģiniet vēlāk.');
        setLoading(false);
      }
    };
  
    fetchArticles();
  }, []);
  

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (

  
          <Container component="main" maxWidth="lg" sx={{ paddingLeft: "0rem !important", paddingRight: "0rem !important" }}>
              <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
              Padomi
              </Typography>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={3}>
            <Card>
              <Link
                to={`/articles/${article.slug}`}
                color="inherit"
                underline="none"
                style={{ textDecoration: 'none' }}
              >
                {article.paragraphs && article.paragraphs.length > 0 && (
                  // Combine Cloudinary base URL with the relative image path
                  <CardMedia
                    component="img"
                    image={`https://res.cloudinary.com/dymne7cde/${article.paragraphs[0].image}`} // Updated image URL
                    alt={article.title}
                  />
                )}
                <CardContent sx={{paddingBottom: "1rem !important"}}>
                  <Typography variant="body2">{article.title}</Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Display a note */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Alert severity="info" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <AlertTitle>Piezīme</AlertTitle>
            Ja jums ir kādi ieteikumi vai atsauksmes par šiem rakstiem, droši sazinieties ar mums!
          </Alert>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticlesList;
