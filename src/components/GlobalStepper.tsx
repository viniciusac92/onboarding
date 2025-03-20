import * as React from 'react';
import '../styles/globalStepper.css';
import { User, Building, Users, HelpCircle } from 'lucide-react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import OnboardingInfoText from './OnboardingInfoText';
import { StepIconProps } from '@mui/material/StepIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

interface StepItem {
    label: string;
}

interface GlobalStepperProps {
    heading: string;
    paragraph: string;
    activeStep: number;
    steps: StepItem[];
}

function MyStepIcon(props: StepIconProps) {
    const { active, completed, icon } = props;

    const iconsMap: Record<string, React.ReactElement> = {
        '1': <User size={16} strokeWidth={1} />,
        '2': <Building size={16} strokeWidth={1} />,
        '3': <Users size={16} strokeWidth={1} />,
    };

    const chosenIcon = iconsMap[String(icon)] ?? <HelpCircle size={20} strokeWidth={2} />;

    return (
        <div
            className={`flex items-center justify-center ${active || completed ? 'text-sky-500' : 'text-gray-400'}`}
        >
            <div
                className={`flex items-center justify-center bg-white rounded-full w-10 h-10 transition-all duration-500 ease-out ${active || completed ? 'border-1 border-sky-500' : 'border border-gray-200'}`}
            >
                {chosenIcon}
            </div>
        </div>
    );
}

const CustomConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
        left: 'calc(-50% + 20px)',
        right: 'calc(50% + 20px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#0ea5e9',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#0ea5e9',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: 'border-gray-200',
        borderLeftWidth: 2,
        marginLeft: 6.8,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
}));

const HorizontalConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#0ea5e9',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#0ea5e9',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: 'border-gray-200',
        borderTopWidth: 2,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
}));

const GlobalStepper: React.FC<GlobalStepperProps> = ({ heading, paragraph, activeStep, steps }) => {
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <>
            <OnboardingInfoText heading={heading} paragraph={paragraph} />
            <div className="stepper-fixed">
                <Box>
                    <Stepper
                        activeStep={activeStep}
                        orientation={isMobile ? 'horizontal' : 'vertical'}
                        connector={isMobile ? <HorizontalConnector /> : <CustomConnector />}
                        sx={{
                            '.MuiStepLabel-label': {
                                display: isMobile ? 'none' : 'block',
                            },
                            '.MuiStepLabel-iconContainer': {
                                paddingRight: isMobile ? 0 : 1,
                            },
                        }}
                    >
                        {steps.map(step => (
                            <Step key={step.label}>
                                <StepLabel StepIconComponent={MyStepIcon}>{step.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
        </>
    );
};

export default GlobalStepper;
