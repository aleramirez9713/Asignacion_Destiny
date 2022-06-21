// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import { Referral } from './Referral';

// const steps = [
//   {
//     label: 'Punto de referencia 1',
//     description:  <Referral/>
//   },
//   {
//     label: 'Punto de referencia 2',
//     description:
//     <Referral/>
//   },
//   {
//     label: 'Punto de referencia 3',
//     description:
//     <Referral/>},
// ];
// export const ReferralForm = () => {

//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ maxWidth: 400 }}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {steps.map((step, index) => (
//           <Step key={step.label}>
//             <StepLabel
//               optional={
//                 index === 2 ? (
//                   <Typography variant="caption">Last step</Typography>
//                 ) : null
//               }
//             >
//               {step.label}
//             </StepLabel>
//             <StepContent>
//               <Typography>{step.description}</Typography>
//               <Box sx={{ mb: 2 }}>
//                 <div>
//                   <Button
//                     variant="contained"
//                     onClick={handleNext}
//                     sx={{ mt: 1, mr: 1 }}
//                   >
//                     {index === steps.length - 1 ? 'Finish' : 'Continue'}
//                   </Button>
//                   <Button
//                     disabled={index === 0}
//                     onClick={handleBack}
//                     sx={{ mt: 1, mr: 1 }}
//                   >
//                     Omitir
//                   </Button>
//                 </div>
//               </Box>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0} sx={{ p: 3 }}>
//           <Typography>All steps completed - you&apos;re finished</Typography>
//           <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//             Reset
//           </Button>
//         </Paper>
//       )}
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Referral } from "./Referral";
import { Grid } from "@mui/material";

const steps = [
  {
    label: "Primer punto de referencia",
    description: <Referral />,
  },
  {
    label: "Segundo punto de referencia",
    description: <Referral />,
  },
  {
    label: "Tercer punto de referencia",
    description: <Referral />,
  },
];

export const ReferralForm = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: "100vh", flexGrow: 1 , mb:10}}>
      <Grid
        container
        direction="column"
        spacing={0}
        xl={12}
        alignItems="center"
        // justifyContent="center"
        sx={{
          width: "100% ",
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mt: "30px", padding: "1px", alignItems: "center"}}
        >
          {steps[activeStep].label}
        </Typography>
      </Grid>
      <Box sx={{ height: 250, maxWidth: 1000, width: "100%", p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Agregar
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Volver
          </Button>
        }
      />
    </Box>
  );
};
