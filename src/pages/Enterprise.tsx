import React from 'react';
import UserInfoContainer from '../components/UserInfoContainer';
import MaritalStatusContainer from '../components/MaritalStatusContainer';
import Header from '../layout/Header';
import ProfessionContainer from '@/components/ProfessionContainer';
import ProfessionalLicenseContainer from '@/components/ProfessionalLicenseContainer';
import OnboardingInfoText from '@/components/OnboardingInfoText';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import Button from '@mui/material/Button';
import { ChevronRight } from 'lucide-react';
import AddressContainer from '@/components/AddressContainer';

const steps = [
  {
    label: 'Seus dados',
  },
  {
    label: 'Sobre a empresa',
  },
  {
    label: 'Sócios',
  },
];

const Enterprise: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-start">

        <div className="responsive-container  pt-24 ">
          <div className="responsive-column pl-12 pt-12 max-w-[320px]">
            <div>
              <OnboardingInfoText heading="Conta pra gente sobre o seu negócio!" paragraph="Nesta etapa, queremos saber um pouco mais sobre seu negócio. 💼" />
              <div className="mt-8 space-y-8">
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical" connector={<StepConnector />}>
                    {steps.map((step, _) => (
                      <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
            </div>
          </div>

          <div className="responsive-column px-4">
            <UserInfoContainer />
            <AddressContainer />
          </div>
          <div className="responsive-column flex flex-col pt-12 pb-24 pr-12 space-y-4 max-w-[340px]">
            <MaritalStatusContainer />
            <ProfessionContainer />
            <ProfessionalLicenseContainer />
            <div>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  textTransform: 'none',
                }}
              >
                <span style={{ top: '1px' }}>Avançar</span>
                <ChevronRight />
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
