import React from 'react';
import '../styles/register.css';
import UserInfoContainer from '../components/containers/UserInfoContainer';
import MaritalStatusContainer from '../components/containers/MaritalStatusContainer';
import ProfessionContainer from '@/components/containers/ProfessionContainer';
import Button from '@mui/material/Button';
import { ChevronRight } from 'lucide-react';
import AddressContainer from '@/components/containers/AddressContainer';
import GlobalStepper from '@/components/GlobalStepper';
import { useNavigate } from 'react-router-dom';
import GovAccessContainer from '@/components/containers/GovAccessContainer';
import ProfessionalLicenseContainer from '@/components/containers/ProfessionalLicenseContainer';

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

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      navigate('/enterprise');
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 ml-1/4">
        <div className="flex flex-col items-start pt-24">
          <div className="responsive-container py-8">
            <div className="responsive-column pl-12 pt-12 max-w-[320px]">
              <GlobalStepper
                heading="Vamos abrir sua empresa!"
                paragraph="Nesta etapa iremos coletar alguns dados importantes para o início da jornada. 📝"
                activeStep={activeStep}
                steps={steps}
              />
            </div>
            <div className="responsive-column px-4">
              <h1 className="responsive-page-title text-3xl font-bold mb-[12px]">Seus dados</h1>
              <UserInfoContainer />
              <AddressContainer />
              <GovAccessContainer />
            </div>
            <div className="responsive-column flex flex-col pt-12 pr-12 space-y-4 min-h-screen max-w-[340px]">
              <MaritalStatusContainer />
              <ProfessionContainer />
              <ProfessionalLicenseContainer />
              <div className="mt-auto">
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

export default Register;
