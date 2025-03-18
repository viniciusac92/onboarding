import React from 'react';
import UserInfoContainer from '../components/containers/UserInfoContainer';
import MaritalStatusContainer from '../components/containers/MaritalStatusContainer';
import ProfessionContainer from '@/components/containers/ProfessionContainer';
import ProfessionalLicenseContainer from '@/components/containers/ProfessionalLicenseContainer';
import Button from '@mui/material/Button';
import { ChevronRight } from 'lucide-react';
import AddressContainer from '@/components/containers/AddressContainer';
import GlobalStepper from '@/components/GlobalStepper';

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
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 ml-1/4">
        <div className="flex flex-col items-start">
          <div className="responsive-container pt-24 ">
            <div className="responsive-column pl-12 pt-12 max-w-[320px]">
              <GlobalStepper
                heading="Conta pra gente sobre o seu negócio!"
                paragraph="Nesta etapa, queremos saber um pouco mais sobre seu negócio. 💼"
                activeStep={activeStep}
                steps={steps}
              />
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
    </div>
  );
};

export default Enterprise;
