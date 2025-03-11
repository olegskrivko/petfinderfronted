// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Typography, CardMedia, CircularProgress, Container, Grid, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
// import { Helmet } from "react-helmet-async";
// import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import { format, parseISO } from 'date-fns';
// import { lv } from 'date-fns/locale';


// const ArticleDetails = () => {
//   const { slug } = useParams();  
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const paragraphRefs = useRef({});

//   useEffect(() => {
//     const fetchArticle = async () => {
//       const accessToken = localStorage.getItem('access_token');  
//       if (!accessToken) {
//         setError('You must be logged in to view shelters.');
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await axios.get(`http://localhost:8000/api/articles/articles/${slug}/`, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setArticle(response.data); 
//       } catch (err) {
//         setError('Error fetching article');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [slug]);

//   if (loading) {
//     return (
//       <Container sx={{ textAlign: 'center', mt: 3 }}>
//         <CircularProgress />
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container sx={{ textAlign: 'center', mt: 3 }}>
//         <Typography variant="h6" color="error">
//           {error}
//         </Typography>
//       </Container>
//     );
//   }

//   if (!article) return null;

//   const formattedDate = article?.published_at
//   ? format(parseISO(article.published_at), "d. MMMM, yyyy HH:mm", { locale: lv })
//   : 'Nezināms datums';




//   const scrollToParagraph = (index) => {
//     if (paragraphRefs.current[index]) {
//       paragraphRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <Container>
//       <Helmet>
//         <title>{article.title} | My Blog</title>
//         <meta name="description" content={article.summary} />
//       </Helmet>

//       <Typography variant="h1" textAlign="center" sx={{ mb: 3 }} gutterBottom>
//         {article.title}
//       </Typography>

//       <Typography variant="body1" color="textSecondary" paragraph>
//         {article.summary}
//       </Typography>
//      {/* Published Date */}
//      <Typography variant="body2" color="textSecondary" textAlign="left" sx={{ mb: 1 }}>
//       Publicēts: {formattedDate}
// </Typography>
// <Typography variant="body2" color="textSecondary" textAlign="left" sx={{ mb: 3 }}>
//   Autors: {article.username}
// </Typography>



//       <List>
//         {article.paragraphs.map((paragraph, index) => (
//           <ListItem key={paragraph.slug} disablePadding>
//             <ListItemButton onClick={() => scrollToParagraph(index)}>
//               <ListItemIcon>
//                 <TipsAndUpdatesIcon color="primary" />
//               </ListItemIcon>
//               <Typography variant="body1" sx={{ color: 'blue', marginLeft: "-1rem" }}>
//                 {paragraph.title}
//               </Typography>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <Box sx={{ mt: 4 }}>
//         {article.paragraphs.map((paragraph, index) => (
//           <Grid 
//             container 
//             spacing={3} 
//             key={paragraph.slug} 
//             mb={2} 
//             ref={(el) => (paragraphRefs.current[index] = el)}
//           >
//             <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
//               <CardMedia sx={{ height: 400 }} image={paragraph.image} title={paragraph.title} />
//               <Typography variant="caption" color="textSecondary">
//                 Ilustrācija izveidota ar Mākslīgā Intelekta palīdzību
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
//               <Typography 
//                 variant="h3" 
//                 sx={{ mb: 2 }}
//               >
//                 {paragraph.title}
//               </Typography>
//               <Typography variant="body1" color="textSecondary">
//                 {paragraph.text}
//               </Typography>
//             </Grid>
//           </Grid>
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default ArticleDetails;
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, CardMedia, CircularProgress, Container, Grid, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Helmet } from "react-helmet-async";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import useFontSizes from './utils/getFontSize';
import { format, parseISO } from 'date-fns';
import { lv } from 'date-fns/locale';

const ArticleDetails = () => {
  const { getTypography } = useFontSizes();
  const { slug } = useParams();  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const paragraphRefs = useRef({});

  useEffect(() => {
    const fetchArticle = async () => {
      const accessToken = localStorage.getItem('access_token');  
      if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`http://localhost:8000/api/articles/articles/${slug}/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setArticle(response.data); 
      } catch (err) {
        setError('Error fetching article');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 3 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!article) return null;

  const formattedDate = article?.published_at
    ? format(parseISO(article.published_at), "d. MMMM, yyyy HH:mm", { locale: lv })
    : 'Nezināms datums';

  const scrollToParagraph = (index) => {
    if (paragraphRefs.current[index]) {
      paragraphRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Container>
      <Helmet>
        <title>{article.title} | My Blog</title>
        <meta name="description" content={article.summary} />
      </Helmet>

      <Typography variant="h1" textAlign="center" sx={{ mb: 3 }} gutterBottom>
        {article.title}
      </Typography>

      {/* <Typography variant="body1" color="textSecondary" paragraph sx={{textAlign: "justify"}}>
        {article.summary}
      </Typography> */}
      <Typography
  variant="body1"
  color="textSecondary"
  paragraph
  sx={{
    textAlign: "justify"
   
  }}
>
  {article.summary}
</Typography>


      {/* Published Date */}
      <Typography variant="body2" color="textSecondary" textAlign="left" sx={{ mb: 1, fontStyle: "italic" }}>
        Publicēts: {formattedDate}
      </Typography>
      <Typography variant="body2" color="textSecondary" textAlign="left" sx={{ mb: 3, fontStyle: "italic" }}>
  Autors: {article?.author?.username || 'Nezināms autors'}
</Typography>


      {/* Table of Contents */}
      <List>
        {article.paragraphs?.map((paragraph, index) => (
          <ListItem key={paragraph.slug || index} disablePadding>
            <ListItemButton onClick={() => scrollToParagraph(index)}>
              <ListItemIcon>
                <TipsAndUpdatesIcon color="primary" />
              </ListItemIcon>
              <Typography variant="body1" sx={{ color: 'blue', marginLeft: "-1rem" }}>
                {paragraph.title}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Article Content */}
      <Box sx={{ mt: 4 }}>
        {article.paragraphs?.map((paragraph, index) => (
          <Grid 
            container 
            spacing={3} 
            key={paragraph.slug || index} 
            mb={2} 
            ref={(el) => (paragraphRefs.current[index] = el)}
          >
            <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
              <CardMedia sx={{ height: 400 }} image={paragraph.image} title={paragraph.title} />
              <Typography variant="caption" color="textSecondary">
                Ilustrācija izveidota ar Mākslīgā Intelekta palīdzību
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {paragraph.title}
              </Typography>
              <Typography variant="body1" color="textSecondary"   sx={{
    textAlign: "justify"
   
  }}>
                {paragraph.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Container>
  );
};

export default ArticleDetails;
