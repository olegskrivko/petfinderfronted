// // // // // components/TestimonialSlider.jsx
// // // // import React from 'react';
// // // // import { Box, Typography, Container } from '@mui/material';
// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // import { Pagination, Autoplay } from 'swiper/modules';
// // // // import 'swiper/css';
// // // // import 'swiper/css/pagination';

// const testimonials = [
//   {
//     quote: "Personally, I am always impressed by the intuitive usability of the tool.",
//     name: "Nadja Möller",
//     role: "Business Process Consultant, LEONI"
//   },
//   {
//     quote: "PawClick helped me find my dog in just 48 hours. Amazing!",
//     name: "Anna L.",
//     role: "Pet Owner"
//   },
//   {
//     quote: "I recommend this service to every shelter I work with.",
//     name: "Tom S.",
//     role: "Volunteer Coordinator"
//   }
// ];

// // // // export default function TestimonialSlider() {
// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         position: 'relative',
// // // //         height: { xs: 300, md: 400 },
// // // //         backgroundImage: `url('/your-background.jpg')`, // Replace with your image
// // // //         backgroundSize: 'cover',
// // // //         backgroundPosition: 'center'
// // // //       }}
// // // //     >
// // // //       <Box
// // // //         sx={{
// // // //           position: 'absolute',
// // // //           inset: 0,
// // // //           background: 'linear-gradient(to right, rgba(0,150,136,0.8), rgba(63,81,181,0.8))',
// // // //           zIndex: 1
// // // //         }}
// // // //       />
// // // //       <Container
// // // //         maxWidth="md"
// // // //         sx={{
// // // //           height: '100%',
// // // //           position: 'relative',
// // // //           zIndex: 2,
// // // //           display: 'flex',
// // // //           alignItems: 'center',
// // // //           justifyContent: 'center',
// // // //           textAlign: 'center',
// // // //           color: '#fff',
// // // //         }}
// // // //       >
// // // //         <Swiper
// // // //           modules={[Pagination, Autoplay]}
// // // //           pagination={{ clickable: true }}
// // // //           autoplay={{ delay: 5000 }}
// // // //           loop
// // // //           style={{ width: '100%' }}
// // // //         >
// // // //           {testimonials.map((t, i) => (
// // // //             <SwiperSlide key={i}>
// // // //               <Box>
// // // //                 <Typography variant="h5" fontStyle="italic" gutterBottom>
// // // //                   “{t.quote}”
// // // //                 </Typography>
// // // //                 <Typography variant="subtitle1" fontWeight="bold">
// // // //                   {t.name}
// // // //                 </Typography>
// // // //                 <Typography variant="subtitle2">{t.role}</Typography>
// // // //               </Box>
// // // //             </SwiperSlide>
// // // //           ))}
// // // //         </Swiper>
// // // //       </Container>
// // // //     </Box>
// // // //   );
// // // // }
// // // // components/TestimonialSlider.jsx
// // // import React from 'react';
// // // import { Box, Typography, Container } from '@mui/material';
// // // import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import { Pagination, Autoplay } from 'swiper/modules';
// // // import 'swiper/css';
// // // import 'swiper/css/pagination';

// // // const testimonials = [
// // //   {
// // //     quote: "Personally, I am always impressed by the intuitive usability of the tool.",
// // //     name: "Nadja Möller",
// // //     role: "Business Process Consultant, LEONI"
// // //   },
// // //   {
// // //     quote: "PawClick helped me find my dog in just 48 hours. Amazing!",
// // //     name: "Anna L.",
// // //     role: "Pet Owner"
// // //   },
// // //   {
// // //     quote: "I recommend this service to every shelter I work with.",
// // //     name: "Tom S.",
// // //     role: "Volunteer Coordinator"
// // //   }
// // // ];

// // // export default function TestimonialSlider({ dotsPosition = 'center' }) {
// // //   const paginationPosition = {
// // //     center: {
// // //       display: 'flex',
// // //       justifyContent: 'center',
// // //       position: 'absolute',
// // //       bottom: '16px',
// // //       left: 0,
// // //       right: 0,
// // //       zIndex: 2
// // //     },
// // //     left: {
// // //       display: 'flex',
// // //       justifyContent: 'flex-start',
// // //       position: 'absolute',
// // //       bottom: '16px',
// // //       left: '24px',
// // //       zIndex: 2
// // //     }
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         position: 'relative',
// // //         height: { xs: 300, md: 400 },
// // //         backgroundImage: `url('/your-background.jpg')`, // Replace with your image path
// // //         backgroundSize: 'cover',
// // //         backgroundPosition: 'center',
// // //       }}
// // //     >
// // //       {/* Gradient Overlay */}
// // //       <Box
// // //         sx={{
// // //           position: 'absolute',
// // //           inset: 0,
// // //           background: 'linear-gradient(to right, rgba(0,150,136,0.8), rgba(63,81,181,0.8))',
// // //           zIndex: 1,
// // //         }}
// // //       />

// // //       {/* Content Layer */}
// // //       <Container
// // //         maxWidth="md"
// // //         sx={{
// // //           height: '100%',
// // //           position: 'relative',
// // //           zIndex: 2,
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           justifyContent: 'center',
// // //           textAlign: 'center',
// // //           color: '#fff',
// // //         }}
// // //       >
// // //         <Swiper
// // //           modules={[Pagination, Autoplay]}
// // //           pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
// // //           autoplay={{ delay: 5000 }}
// // //           loop
// // //           style={{ width: '100%' }}
// // //         >
// // //           {testimonials.map((t, i) => (
// // //             <SwiperSlide key={i}>
// // //               <Box>
// // //                 {/* <FormatQuoteIcon sx={{ fontSize: 40, mb: 1, color: 'white' }} /> */}
// // //                 <Typography variant="h5" fontStyle="italic" gutterBottom>
// // //                   <FormatQuoteIcon sx={{ fontSize: 40, mb: 1, color: 'white' }} />“{t.quote}”
// // //                 </Typography>
// // //                 <Typography variant="subtitle1" fontWeight="bold">
// // //                   {t.name}
// // //                 </Typography>
// // //                 <Typography variant="subtitle2">{t.role}</Typography>
// // //               </Box>
// // //             </SwiperSlide>
// // //           ))}
// // //         </Swiper>
// // //       </Container>

// // //       {/* Custom Positioned Pagination Dots */}
// // //       <Box className="custom-swiper-pagination" sx={paginationPosition[dotsPosition]} />
// // //     </Box>
// // //   );
// // // }
// // import React from 'react';
// // import { Box, Typography, Container } from '@mui/material';
// // import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Pagination, Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/pagination';

// // const testimonials = [
// //   {
// //     quote: "Personally, I am always impressed by the intuitive usability of the tool.",
// //     name: "Nadja Möller",
// //     role: "Business Process Consultant, LEONI"
// //   },
// //   {
// //     quote: "PawClick helped me find my dog in just 48 hours. Amazing!",
// //     name: "Anna L.",
// //     role: "Pet Owner"
// //   }
// // ];

// // export default function TestimonialSlider({ dotsPosition = 'left' }) {
// //   const paginationPosition = {
// //     center: {
// //       display: 'flex',
// //       justifyContent: 'center',
// //       position: 'absolute',
// //       bottom: '16px',
// //       left: 0,
// //       right: 0,
// //       zIndex: 2
// //     },
// //     left: {
// //       display: 'flex',
// //       justifyContent: 'flex-start',
// //       position: 'absolute',
// //       bottom: '16px',
// //       left: '24px',
// //       zIndex: 2
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         position: 'relative',
// //         height: { xs: 350, md: 400 },
// //         backgroundImage: `url('/your-background.jpg')`, // Replace with your own image
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center'
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           position: 'absolute',
// //           inset: 0,
// //           background: 'linear-gradient(to right, rgba(0,150,136,0.8), rgba(63,81,181,0.8))',
// //           zIndex: 1
// //         }}
// //       />

// //       <Container
// //         maxWidth="lg"
// //         sx={{
// //           height: '100%',
// //           position: 'relative',
// //           zIndex: 2,
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'flex-start',
// //           color: '#fff'
// //         }}
// //       >
// //         <Swiper
// //           modules={[Pagination, Autoplay]}
// //           pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
// //           autoplay={{ delay: 5000 }}
// //           loop
// //           style={{ width: '100%' }}
// //         >
// //           {testimonials.map((t, i) => (
// //             <SwiperSlide key={i}>
// //               <Box display="flex" alignItems="center" gap={4} px={2}>
// //                 {/* Quote Bubble */}
// //                 <Box
// //                   sx={{
// //                     backgroundColor: '#fff',
// //                     borderRadius: '12px',
// //                     width: 60,
// //                     height: 60,
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     position: 'relative',
// //                     flexShrink: 0
// //                   }}
// //                 >
// //                   <FormatQuoteIcon sx={{ fontSize: 32, color: '#00897B', opacity: 0.8 }} />
// //                   {/* Optional: add CSS triangle for "tail" if you want chat bubble tail */}
// //                 </Box>

// //                 {/* Quote Content */}
// //                 <Box>
// //                   <Typography variant="h5" fontStyle="italic" gutterBottom>
// //                     {t.quote}
// //                   </Typography>
// //                   <Typography variant="subtitle1" fontWeight="bold">
// //                     {t.name}
// //                   </Typography>
// //                   <Typography variant="subtitle2">{t.role}</Typography>
// //                 </Box>
// //               </Box>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         <Box className="custom-swiper-pagination" sx={paginationPosition[dotsPosition]} />
// //       </Container>
// //     </Box>
// //   );
// // }
// import React from 'react';
// import { Box, Typography, Container } from '@mui/material';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const testimonials = [
//   {
//     quote: "Personally, I am always impressed by the intuitive usability of the tool.",
//     name: "Nadja Möller",
//     role: "Business Process Consultant, LEONI"
//   },
//   {
//     quote: "PawClick helped me find my dog in just 48 hours. Amazing!",
//     name: "Anna L.",
//     role: "Pet Owner"
//   }
// ];

// export default function TestimonialSlider({ dotsPosition = 'center' }) {
//   const paginationPosition = {
//     center: {
//       display: 'flex',
//       justifyContent: 'center',
//       position: 'absolute',
//       bottom: '16px',
//       left: 0,
//       right: 0,
//       zIndex: 2
//     },
//     left: {
//       display: 'flex',
//       justifyContent: 'flex-start',
//       position: 'absolute',
//       bottom: '16px',
//       left: '24px',
//       zIndex: 2
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         height: { xs: 350, md: 400 },
//         backgroundImage: `url('/your-background.jpg')`, // Replace with your own image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >
//       {/* Gradient Overlay */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(to right, rgba(0,150,136,0.8), rgba(63,81,181,0.8))',
//           zIndex: 1
//         }}
//       />

//       <Container
//         maxWidth="lg"
//         sx={{
//           height: '100%',
//           position: 'relative',
//           zIndex: 2,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'flex-start',
//           color: '#fff'
//         }}
//       >
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
//           autoplay={{ delay: 5000 }}
//           loop
//           style={{ width: '100%' }}
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <Box display="flex" alignItems="center" gap={4} px={2}>
//                 {/* Quote Bubble with Tail */}
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     backgroundColor: '#fff',
//                     borderRadius: '16px',
//                     width: 80,
//                     height: 80,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     // flexShrink: 0,
//                     // '&::after': {
//                     //   content: '""',
//                     //   position: 'absolute',
//                     //   bottom: -10,
//                     //   left: 20,
//                     //   width: 0,
//                     //   height: 0,
//                     //   borderLeft: '10px solid transparent',
//                     //   borderRight: '10px solid transparent',
//                     //   borderTop: '10px solid #fff'
//                     // }
//                   }}
//                 >
//                   <FormatQuoteIcon sx={{ fontSize: 40, color: '#00897B', opacity: 0.8 }} />
//                 </Box>

//                 {/* Text Block */}
//                 <Box>
//                   <Typography variant="h5" fontStyle="italic" gutterBottom>
//                     {t.quote}
//                   </Typography>
//                   <Typography variant="subtitle1" fontWeight="bold">
//                     {t.name}
//                   </Typography>
//                   <Typography variant="subtitle2">{t.role}</Typography>
//                 </Box>
//               </Box>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Pagination Dots */}
//         <Box className="custom-swiper-pagination" sx={paginationPosition[dotsPosition]} />
//       </Container>
//     </Box>
//   );
// }
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import dogimg from "../pages/images/banner_dog.jpg"
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: "Personally, I am always impressed by the intuitive usability of the tool.",
    name: "Nadja Möller",
    role: "Business Process Consultant, LEONI"
  },
  {
    quote: "PawClick helped me find my dog in just 48 hours. Amazing!",
    name: "Anna L.",
    role: "Pet Owner"
  },
  {
    quote: "I recommend this service to every shelter I work with.",
    name: "Tom S.",
    role: "Volunteer Coordinator"
  }
];

export default function TestimonialSlider({ dotsPosition = 'center' }) {
  const paginationPosition = {
    center: {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      bottom: '16px',
      left: 0,
      right: 0,
      zIndex: 2
    },
    left: {
      display: 'flex',
      justifyContent: 'flex-start',
      position: 'absolute',
      bottom: '16px',
      left: '24px',
      zIndex: 2
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 350, md: 400 },
        backgroundImage: `url(${dogimg})`, // Replace with your own image
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
        //   background: 'linear-gradient(to right, rgba(0,150,136,0.8), rgba(63,81,181,0.8))',
        background: 'linear-gradient(to right, rgba(0,150,136,0.7), rgba(63,81,181,0.7))',
          zIndex: 1
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: '#fff'
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
          autoplay={{ delay: 5000 }}
          loop
          style={{ width: '100%' }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <Box display="flex" alignItems="center" gap={4} px={2}>
                {/* Quote Bubble with Tail */}
                <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FormatQuoteIcon sx={{ fontSize: 40, color: '#00897B', opacity: 0.8 }} />
                </Box>

                {/* Text Block */}
                <Box>
                  <Typography variant="h5" fontStyle="italic" gutterBottom>
                    {t.quote}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {t.name}
                  </Typography>
                  <Typography variant="subtitle2">{t.role}</Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <Box mb={1}
  className="custom-swiper-pagination"
  sx={{
    ...paginationPosition[dotsPosition],
    '& .swiper-pagination-bullet': {
      width: 14,
      height: 14,
      backgroundColor: '#fff',
      opacity: 0.7,
      marginRight: '8px', // Add horizontal space between dots
    },
    // Remove right margin from the last bullet so it doesn't add extra space on the right
    '& .swiper-pagination-bullet:last-child': {
      marginRight: 0,
    },
    '& .swiper-pagination-bullet-active': {
      opacity: 1,
      backgroundColor: '#fff',
    }
  }}
/>

      </Container>
    </Box>
  );
}
