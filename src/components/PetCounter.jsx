import React, { useState } from 'react';
import CountUp from 'react-countup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';

const CounterBox = styled(Box)({
  textAlign: 'center',
});

const CountText = styled(Typography)({
  fontSize: '1.2rem',
  color: '#333',
});

const HighlightText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: '#22badf',
});

const PetCounter = ({ yearlyCount }) => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    onChange: (inView) => {
      if (inView) {
        setStartCount(true);
      }
    },
  });

  return (
    <CounterBox ref={ref}>
      <Box mt={2} textAlign="center" style={{ marginTop: '3rem' }}>
        <CountText>
        Katru gadu Latvijā tiek ziņots par ievērojamu skaitu pazudušu mājdzīvnieku, kopējais skaits ir
          <HighlightText style={{ marginLeft: '1rem', marginRight: '1rem', display: 'inline' }}>
            {startCount && <CountUp end={yearlyCount} duration={7} />}
          </HighlightText>
        </CountText>
      </Box>
    </CounterBox>
  );
};

export default PetCounter;
