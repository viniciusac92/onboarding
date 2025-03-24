import { StepIconProps } from '@mui/material';
import { User, Building, Users, HelpCircle } from 'lucide-react';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';

export const MyStepIcon = (props: StepIconProps) => {
    const { active, completed, icon } = props;
    const iconsMap: Record<string, React.ReactElement> = {
        '1': <User size={16} strokeWidth={1} />,
        '2': <Building size={16} strokeWidth={1} />,
        '3': <Users size={16} strokeWidth={1} />,
    };
    const chosenIcon = iconsMap[String(icon)] ?? <HelpCircle size={20} strokeWidth={2} />;

    const iconContainerBehaviourSetup = {
        text: 'text-gray-400',
        border: 'border border-gray-200',
    };

    if (active) {
        iconContainerBehaviourSetup.text = 'text-yellow-500';
        iconContainerBehaviourSetup.border = 'border-2 border-yellow-500';
    }
    if (completed) {
        iconContainerBehaviourSetup.text = 'text-sky-500';
        iconContainerBehaviourSetup.border = 'border border-sky-500';
    }

    return (
        <div className={`flex items-center justify-center ${iconContainerBehaviourSetup.text}`}>
            <div
                className={`flex items-center justify-center bg-white rounded-full w-10 h-10 transition duration-1300 ease-out ${iconContainerBehaviourSetup.border}`}
            >
                {chosenIcon}
            </div>
        </div>
    );
};

export const VerticalConnector = styled(StepConnector)(() => ({
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
        marginLeft: 15.75,
        minHeight: '80px',
        borderColor: '#e5e7eb',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
}));

export const HorizontalConnector = styled(StepConnector)(() => ({
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
        borderColor: '#e5e7eb',
        borderTopWidth: 1,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
}));
