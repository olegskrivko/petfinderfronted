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
import { BASE_URL } from './config/config';
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
      const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
      if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
      }
      try {
        
        const response = await axios.get(`${API_BASE_URL}/articles/articles/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
          },
        });
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
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
    <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
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
                  <CardMedia
                    component="img"
                    image={article.paragraphs[0].image} // First paragraph's image
                    alt={article.title}
                  />
                )}
                <CardContent>
                  {/* <Typography variant="h5">{article.title}</Typography> */}
                  <Typography variant="body2" >{article.title}</Typography>
                  {/* <Typography variant="body2">{article.summary}</Typography> */}
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
