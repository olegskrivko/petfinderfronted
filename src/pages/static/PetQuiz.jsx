import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  LinearProgress,
} from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    question: "Cik daudz vietas tev ir mājdzīvniekam?",
    options: [
      { answer: "Mazs dzīvoklis", scores: { cat: 2, dog: -1 } },
      { answer: "Vidēja izmēra māja", scores: { cat: 1, dog: 1 } },
      { answer: "Liela māja ar pagalmu", scores: { dog: 2, cat: 0 } },
    ],
  },
  {
    question: "Cik aktīvs tu esi ikdienā?",
    options: [
      { answer: "Ļoti aktīvs, patīk sports", scores: { dog: 2, cat: -1 } },
      { answer: "Vidēji aktīvs", scores: { dog: 1, cat: 1 } },
      { answer: "Ne pārāk aktīvs, patīk mierīga dzīve", scores: { cat: 2, dog: -1 } },
    ],
  },
  {
    question: "Cik daudz laika vari veltīt mājdzīvnieka aprūpei?",
    options: [
      { answer: "Ļoti daudz brīvā laika", scores: { dog: 2, cat: 1 } },
      { answer: "Dažreiz brīvs laiks", scores: { cat: 2, dog: 0 } },
      { answer: "Ļoti maz laika", scores: { none: 2, dog: -1, cat: -1 } },
    ],
  },
  {
    question: "Vai tev mājās ir bērni?",
    options: [
      { answer: "Jā, mazi bērni", scores: { dog: 2, cat: -1 } },
      { answer: "Jā, vecāki bērni", scores: { dog: 1, cat: 1 } },
      { answer: "Nav bērnu", scores: { cat: 2, dog: 0 } },
    ],
  },
  {
    question: "Cik bieži esi prom no mājām?",
    options: [
      { answer: "Reti, galvenokārt mājās", scores: { dog: 2, cat: 1 } },
      { answer: "Dažreiz", scores: { cat: 2, dog: 0 } },
      { answer: "Bieži prom vai ceļoju", scores: { none: 2, dog: -1, cat: -1 } },
    ],
  },
  {
    question: "Kāda vide tev patīk mājās?",
    options: [
      { answer: "Dzīva, trokšņaina, aktīva", scores: { dog: 2, cat: -1 } },
      { answer: "Līdzsvarota", scores: { dog: 1, cat: 1 } },
      { answer: "Klusums un miers", scores: { cat: 2, dog: 0 } },
    ],
  },
  {
    question: "Vai tev vai kādam mājiniekam ir alerģijas?",
    options: [
      { answer: "Jā, jutība pret spalvām", scores: { none: 2, cat: -1, dog: -1 } },
      { answer: "Nē, nav alerģiju", scores: { dog: 1, cat: 1 } },
    ],
  },
  {
    question: "Cik neatkarīgu mājdzīvnieku tu vēlies?",
    options: [
      { answer: "Ļoti neatkarīgu", scores: { cat: 2, dog: -1 } },
      { answer: "Līdzsvarotu", scores: { dog: 1, cat: 1 } },
      { answer: "Tādu, kurš prasa uzmanību", scores: { dog: 2, cat: 0 } },
    ],
  },
  {
    question: "Kāds ir tavs ikmēneša budžets mājdzīvniekam?",
    options: [
      { answer: "Zems (līdz €50)", scores: { cat: 2, dog: -1 } },
      { answer: "Vidējs (€50–100)", scores: { dog: 1, cat: 1 } },
      { answer: "Augsts (vairāk nekā €100)", scores: { dog: 2, cat: 1 } },
    ],
  },
];

const dogSuggestions = {
  apartment: ["French Bulldog", "Pug", "Cavalier King Charles Spaniel"],
  active: ["Border Collie", "Labrador Retriever", "Australian Shepherd"],
  calm: ["Golden Retriever", "Cocker Spaniel", "Havanese"],
  hypoallergenic: ["Poodle", "Maltese", "Portuguese Water Dog"],
};

const catSuggestions = {
  independent: ["British Shorthair", "Russian Blue", "American Shorthair"],
  social: ["Ragdoll", "Siamese", "Maine Coon"],
  hypoallergenic: ["Siberian", "Balinese", "Sphynx"],
};

const PetQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ dog: 0, cat: 0, none: 0 });
  const [showResults, setShowResults] = useState(false);
  const theme = useTheme();

  const handleAnswer = (selectedScores) => {
    const updated = { ...scores };
    Object.entries(selectedScores).forEach(([key, value]) => {
      updated[key] = (updated[key] || 0) + value;
    });
    setScores(updated);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setScores({ dog: 0, cat: 0, none: 0 });
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const renderResults = () => {
    const total = scores.dog + scores.cat + scores.none;
    const dogPercent = (scores.dog / total) * 100;
    const catPercent = (scores.cat / total) * 100;
    const nonePercent = (scores.none / total) * 100;

    const result = dogPercent > catPercent && dogPercent > nonePercent
      ? "Dog"
      : catPercent > nonePercent
      ? "Cat"
      : "None";

    const traits = {
      apartment: scores.dog < 5 && scores.cat > 5,
      active: scores.dog >= 7,
      calm: scores.cat > 5 && scores.dog < 6,
      hypoallergenic: scores.none > 1 || scores.cat < 2 || scores.dog < 2,
      independent: scores.cat >= 6 && scores.dog < 5,
      social: scores.dog >= 6 || scores.cat >= 6,
    };

    let breedList = [];
    if (result === "Dog") {
      if (traits.apartment) breedList.push(...dogSuggestions.apartment);
      if (traits.active) breedList.push(...dogSuggestions.active);
      if (traits.calm) breedList.push(...dogSuggestions.calm);
      if (traits.hypoallergenic) breedList.push(...dogSuggestions.hypoallergenic);
    }
    if (result === "Cat") {
      if (traits.independent) breedList.push(...catSuggestions.independent);
      if (traits.social) breedList.push(...catSuggestions.social);
      if (traits.hypoallergenic) breedList.push(...catSuggestions.hypoallergenic);
    }

    const uniqueBreeds = [...new Set(breedList)];

    return (
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>Jūsu ideālais mājdzīvnieks</Typography>
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
    <Pie
      data={[
        { name: 'Dog', value: dogPercent },
        { name: 'Cat', value: catPercent },
        { name: 'None', value: nonePercent }
      ]}
      cx="50%"
      cy="50%"
      outerRadius={80}
      dataKey="value"
    >
      <Cell fill="#A7C7E7" />  {/* Soft blue for Dog */}
      <Cell fill="#BFD8B8" />  {/* Soft green for Cat */}
      <Cell fill="#E0E0E0" />  {/* Light gray for None */}
    </Pie>
  </PieChart>
        </ResponsiveContainer>

        <Typography variant="h5" sx={{ mt: 2 }}>Suņi: {dogPercent.toFixed(1)}%</Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>Kaķi: {catPercent.toFixed(1)}%</Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>Neviens: {nonePercent.toFixed(1)}%</Typography>

         <Box mt={4}>

     <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
     Ieteicamās šķirnes:
         </Typography>
<Grid container spacing={2} justifyContent="center" mt={2}>
  
          {uniqueBreeds.map((breed, idx) => (
                  <Grid item key={idx} xs={12} sm={6} md={4}>
                    <Card
                      onClick={() => handleAnswer(breed.scores)}
                      sx={{
                        cursor: 'pointer',
                        height: 80,
                        minWidth: 120,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': { boxShadow: 6 },
                        backgroundColor: '#f0f8ff',
                        
                      }}
                    >
                      <CardContent>
                      <Typography align="center">{breed}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </Box>
        <Button onClick={resetQuiz} variant="contained" sx={{ mt: 4, backgroundColor: '#5B9BD5' }}>Mēģināt no jauna</Button>
      </Box>
    );
  };

  return (
     <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
  <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
  Dzīvnieka izvēles tests
      </Typography>
      {!showResults ? (
        <Box>
          <LinearProgress
            variant="determinate"
            value={(currentQuestion / questions.length) * 100}
            sx={{ mb: 4 }}
          />
       
                 <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
                 {questions[currentQuestion].question}
                      </Typography>
              <Grid container spacing={2} justifyContent="center">
                {questions[currentQuestion].options.map((option, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                      onClick={() => handleAnswer(option.scores)}
                      sx={{
                        cursor: 'pointer',
                        height: 140,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': { boxShadow: 6 },
                        backgroundColor: '#e3f2fd',

                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" align="center">{option.answer}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

        </Box>
      ) : (
        renderResults()
      )}
    </Container>
  );
};

export default PetQuiz;
