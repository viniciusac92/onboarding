import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    RegisterLeftColumn,
    RegisterMiddleColumn,
    RegisterRightColumn,
} from '@/components/register';
import '../styles/register.css';

const steps = [{ label: 'Seus dados' }, { label: 'Sobre a empresa' }, { label: 'Sócios' }];
const Register: React.FC = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(prev => prev + 1);
        } else {
            navigate('/enterprise');
        }
    };

    return (
        <div className="flex">
            <div className="flex-1 ml-1/4">
                <div className="flex flex-col items-start pt-24">
                    <div className="responsive-container py-8">
                        <RegisterLeftColumn activeStep={activeStep} steps={steps} />
                        <RegisterMiddleColumn />
                        <RegisterRightColumn handleNext={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
