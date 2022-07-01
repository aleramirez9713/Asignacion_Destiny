import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, colors, Grid} from "@mui/material";
import { Link } from "react-router-dom";
import { DataForm } from "./DataForm";
import { ReferralForm } from "./ReferralForm";
import { ImagePlace } from "./ImagePlace";

const StepByStep = ({}) => {
  const steps = ["Datos del lugar", "Puntos de referencia", "Imagen del lugar"];
  const stepDescription = [<DataForm />, <ReferralForm/>, <ImagePlace/>];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;
  const allStepsCompleted = completedSteps === totalSteps;

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step} >
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
       <div>
                {allStepsCompleted ? 
                 (
         
                    <>
                        <Typography
                            sx={{ mt: 2, mb: 1 }}
                        >
                           Todos los datos han sido registrados
                        </Typography>
                        <Box
                            sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                        >
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button
                                variant="contained"
                                component={Link} to="/place/detail"
                            >
                                Ver lugar
                            </Button>
                        </Box>
                    </>
                            ) : (
                    <>
                       <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        >
                       {stepDescription[activeStep]}
                        </Grid>
                            
                     
                        <Box 
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between',pt: 2  }}
                        >
                            <Button
                                onClick={handleBack}
                                variant="contained"
                                disabled={activeStep === 0}
                                sx={{ mr: 1 }}
                            >
                                Atrás
                            </Button>
                            
                            <Button
                                onClick={handleNext}
                                variant="contained"
                            >
                                {completedSteps === totalSteps - 1 ? 'Terminar' : 'Siguiente'}
                            </Button>
                          
                        </Box> 
                    </>
                 )} 
            </div> 
    </Box>
  );
};

export default StepByStep;
