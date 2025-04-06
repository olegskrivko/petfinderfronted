// import React from 'react';
// import { Box, Grid, Typography, Card, CardContent } from '@mui/material';


// // const [statistics, setStatistics] = useState({
// //     lostPets: 0,
// //     foundPets: 0,
// //     reunitedPets: 0,
// //   });
  
// //   useEffect(() => {
// //     async function fetchData() {
// //       const response = await axios.get('/api/statistics');
// //       setStatistics(response.data);
// //     }
// //     fetchData();
// //   }, []);
  
// //   const data = [
// //     { label: 'Total Lost Pets', value: statistics.lostPets, color: '#FF7043' },
// //     { label: 'Total Found Pets', value: statistics.foundPets, color: '#81C784' },
// //     { label: 'Pets Reunited', value: statistics.reunitedPets, color: '#64B5F6' },
// //   ];
  

// const Statistics = () => {
//   const data = [
//     { label: 'Total Lost Pets', value: 125, color: '#FF7043' },  // Example count and color
//     { label: 'Total Found Pets', value: 75, color: '#81C784' },  // Example count and color
//     { label: 'Pets Reunited', value: 50, color: '#64B5F6' },     // Example count and color
//   ];

//   return (
//     <Box sx={{ my: 4 }}>
//       <Grid container spacing={3} justifyContent="center">
//         {data.map((item, index) => (
//           <Grid item xs={12} sm={4} key={index}>
//             <Card sx={{ textAlign: 'center', backgroundColor: item.color }}>
//               <CardContent>
//                 <Typography variant="h4" sx={{ color: 'white', fontWeight: 600 }}>
//                   {item.value}
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: 'white' }}>
//                   {item.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Statistics;
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const Statistics = () => {
  const [startCount, setStartCount] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger once when the component comes into view
    onChange: (inView) => {
      if (inView) {
        setStartCount(true); // Start counting when the component is in view
      }
    },
  });

  const data = [
    // { label: 'Total Lost Pets', value: 125, color: '#FF7043' },  
    // { label: 'Total Found Pets', value: 75, color: '#81C784' },  
    // { label: 'Pets Reunited', value: 50, color: '#64B5F6' },     
    { label: 'Kopējais pazudušo mājdzīvnieku skaits', value: 125, color: '#FF7043' },  
    { label: 'Kopējais atrasto mājdzīvnieku skaits', value: 75, color: '#81C784' },  
    { label: 'Atgrieztie mājdzīvnieki', value: 50, color: '#64B5F6' },     
  ];

  return (
    <Box sx={{ my: 4 }} ref={ref}>
          {/* Title above the counter */}
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>
        Pazudušo un atrasto mājdzīvnieku statistika
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ textAlign: 'center', backgroundColor: item.color }}>
              <CardContent>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 600 }}>
                  {startCount ? (
                    <CountUp end={item.value} duration={2} />
                  ) : (
                    0
                  )}
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Statistics;

// import React, { useState } from 'react';
// import CountUp from 'react-countup';
// import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
// import { useInView } from 'react-intersection-observer';

// const Statistics = () => {
//   const [startCount, setStartCount] = useState(false);

//   const { ref, inView } = useInView({
//     triggerOnce: true,  // Trigger once when the component comes into view
//     onChange: (inView) => {
//       if (inView) {
//         setStartCount(true); // Start counting when the component is in view
//       }
//     },
//   });

//   const data = [
//     { label: 'Total Lost Pets', value: 125, color: '#FF7043' },  
//     { label: 'Total Found Pets', value: 75, color: '#81C784' },  
//     { label: 'Pets Reunited', value: 50, color: '#64B5F6' },     
//   ];

//   return (
//     <Box sx={{ my: 4 }} ref={ref}>
//       <Grid container spacing={3} justifyContent="center">
//         {data.map((item, index) => (
//           <Grid item xs={12} sm={4} key={index}>
//             <Card 
//               sx={{ 
//                 textAlign: 'center', 
//                 backgroundColor: item.color,
//                 borderRadius: '50%', // Make the card circular
//                 height: 150,  // Fixed height for round shape
//                 width: 150,   // Fixed width to make it a perfect circle
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center', 
//                 boxShadow: 3 // Optional: add a shadow for more emphasis
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h4" sx={{ color: 'white', fontWeight: 600 }}>
//                   {startCount ? (
//                     <CountUp end={item.value} duration={2} />
//                   ) : (
//                     0
//                   )}
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: 'white', fontSize: '0.8rem' }}>
//                   {item.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Statistics;
