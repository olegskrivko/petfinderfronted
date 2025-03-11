import React, { useState } from 'react';
import { Container, FormControl, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

const PickTwoForm = () => {
  const [options, setOptions] = useState({
    cheap: false,
    fast: false,
    good: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;

    // Manage mutually exclusive behavior
    if (checked) {
      const selectedOptions = Object.keys(options).filter((key) => options[key]);
      if (selectedOptions.length === 2) {
        // Uncheck the first selected option if two are already checked
        const firstSelected = selectedOptions[0];
        setOptions((prevOptions) => ({
          ...prevOptions,
          [firstSelected]: false,
          [name]: true,
        }));
        return;
      }
    }

    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <Container style={{ marginTop: '20px', textAlign: 'center' }}>
            <div><svg
       id="chart"
       width="1000"
       height="500"
       viewBox="0 0 1000 500"
       xmlns="http://www.w3.org/2000/svg"
       >
       <path d="M 0,271.24815576685774 C 10.599999999999996,240.48688897649592 31.800000000000004,158.67494027213138 53,117.44182181504868 C 74.2,76.20870335796599 84.80000000000001,75.17380226445499 106,65.08256348144425 C 127.2,54.99132469843352 137.8,2.3375166629619457 159,66.98562789999504 C 180.2,131.63373913702813 190.79999999999998,367.39699461622166 212,388.3231196666097 C 233.2,409.24924471699785 243.8,230.5326737765239 265,171.6162531519355 C 286.2,112.69983252734713 296.8,88.54554102750788 318,93.74101654366785 C 339.2,98.93649205982783 349.8,186.35380781584786 371,197.5936307327354 C 392.2,208.83345364962292 402.8,173.57178815030994 424,149.94013112810546 C 445.2,126.30847410590097 455.8,86.12464938994711 477,79.43534562171294 C 498.2,72.74604185347877 508.8,102.00812370837183 530,116.49361228693465 C 551.2,130.97910086549746 561.8,146.70996863245625 583,151.86278851452704 C 604.2,157.01560839659783 614.8,105.06597744397455 636,142.25771169728864 C 657.2,179.44944595060275 667.8,352.8024986694471 689,337.8214597810976 C 710.2,322.84042089274806 720.8,103.54739853063538 742,67.35251725554093 C 763.2,31.157635980446486 773.8,130.46694719017148 795,156.84705340562533 C 816.2,183.2271596210792 826.8,166.55203838147713 848,199.2530483328103 C 869.2,231.95405828414346 879.8,290.7332238327917 901,320.3521031622911 C 922.2,349.9709824917905 932.8,334.22449767297155 954,347.3474449803073 C 975.2,360.470392287643 996.4,378.2429607552373 1007,385.9668396989698,L 1000 500,L 0 500Z" fill="#321834" />
       <path d="M 0,271.24815576685774 C 10.599999999999996,240.48688897649592 31.800000000000004,158.67494027213138 53,117.44182181504868 C 74.2,76.20870335796599 84.80000000000001,75.17380226445499 106,65.08256348144425 C 127.2,54.99132469843352 137.8,2.3375166629619457 159,66.98562789999504 C 180.2,131.63373913702813 190.79999999999998,367.39699461622166 212,388.3231196666097 C 233.2,409.24924471699785 243.8,230.5326737765239 265,171.6162531519355 C 286.2,112.69983252734713 296.8,88.54554102750788 318,93.74101654366785 C 339.2,98.93649205982783 349.8,186.35380781584786 371,197.5936307327354 C 392.2,208.83345364962292 402.8,173.57178815030994 424,149.94013112810546 C 445.2,126.30847410590097 455.8,86.12464938994711 477,79.43534562171294 C 498.2,72.74604185347877 508.8,102.00812370837183 530,116.49361228693465 C 551.2,130.97910086549746 561.8,146.70996863245625 583,151.86278851452704 C 604.2,157.01560839659783 614.8,105.06597744397455 636,142.25771169728864 C 657.2,179.44944595060275 667.8,352.8024986694471 689,337.8214597810976 C 710.2,322.84042089274806 720.8,103.54739853063538 742,67.35251725554093 C 763.2,31.157635980446486 773.8,130.46694719017148 795,156.84705340562533 C 816.2,183.2271596210792 826.8,166.55203838147713 848,199.2530483328103 C 869.2,231.95405828414346 879.8,290.7332238327917 901,320.3521031622911 C 922.2,349.9709824917905 932.8,334.22449767297155 954,347.3474449803073 C 975.2,360.470392287643 996.4,378.2429607552373 1007,385.9668396989698" fill="none" stroke="#FF1666" stroke-width="4px" />
    </svg></div>
      <Typography variant="h4" gutterBottom>
        Cheap, Fast, Good: Pick Two
      </Typography>
      <Typography variant="body1" gutterBottom>
        You can only select two options. The trade-offs will apply automatically.
      </Typography>
      <FormControl component="fieldset" style={{ marginTop: '20px' }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={options.cheap}
                onChange={handleChange}
                name="cheap"
                color="primary"
              />
            }
            label="Cheap"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={options.fast}
                onChange={handleChange}
                name="fast"
                color="primary"
              />
            }
            label="Fast"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={options.good}
                onChange={handleChange}
                name="good"
                color="primary"
              />
            }
            label="Good"
          />
        </FormGroup>
      </FormControl>
      <Typography variant="h6" style={{ marginTop: '20px', color: 'gray' }}>
        Selected:
        {options.cheap && ' Cheap'}
        {options.fast && ' Fast'}
        {options.good && ' Good'}
      </Typography>
      <Typography variant="body2" style={{ marginTop: '10px', color: 'gray' }}>
        {options.cheap && options.fast && 'Note: Choosing Cheap and Fast sacrifices Good quality.'}
        {options.fast && options.good && 'Note: Choosing Fast and Good sacrifices Cheap costs.'}
        {options.cheap && options.good && 'Note: Choosing Cheap and Good sacrifices Fast delivery.'}
      </Typography>
    </Container>
  );
};

export default PickTwoForm;
