import * as React from 'react';
import '../styles/globalStepper.css';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import OnboardingInfoText from './OnboardingInfoText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MyStepIcon } from '@/styles/globalStepper';
import { VerticalConnector } from '@/styles/globalStepper';
import { HorizontalConnector } from '@/styles/globalStepper';

interface StepItem {
    label: string;
}

interface GlobalStepperProps {
    heading: string;
    paragraph: string;
    activeStep: number;
    steps: StepItem[];
}

const GlobalStepper: React.FC<GlobalStepperProps> = ({ heading, paragraph, activeStep, steps }) => {
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <div className="stepper-fixed">
            <OnboardingInfoText heading={heading} paragraph={paragraph} />
            <Box className="px-0">
                <Stepper
                    activeStep={activeStep}
                    orientation={isMobile ? 'horizontal' : 'vertical'}
                    connector={isMobile ? <HorizontalConnector /> : <VerticalConnector />}
                    sx={{
                        '.MuiStepLabel-root': {
                            paddingLeft: isMobile ? 'none' : '8px',
                        },
                        '.MuiStepLabel-label': {
                            display: isMobile ? 'none' : 'block',
                            fontSize: '20px',
                            fontWeight: 500,
                        },
                        '.MuiStepLabel-iconContainer': {
                            paddingRight: isMobile ? 0 : 1,
                        },
                    }}
                >
                    {steps.map(step => (
                        <Step key={step.label}>
                            <StepLabel StepIconComponent={MyStepIcon} className="font-xl">
                                {step.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    );
};

export default GlobalStepper;
