import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    EnterpriseLeftColumn,
    EnterpriseMiddleColumn,
    EnterpriseRightColumn,
} from '@/components/enterprise';
import '../styles/structure.css';

const steps = [{ label: 'Seus dados' }, { label: 'Sobre a empresa' }, { label: 'Sócios' }];

const Enterprise: React.FC = () => {
    const navigate = useNavigate();
    const activeStep = 1;

    const handleNext = () => {
        navigate('/partners');
    };

    return (
        <div className="flex">
            <div className="flex-1 ml-1/4">
                <div className="flex flex-col items-start pt-24">
                    <div className="responsive-container py-8">
                        <EnterpriseLeftColumn activeStep={activeStep} steps={steps} />
                        <EnterpriseMiddleColumn />
                        <EnterpriseRightColumn handleNext={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enterprise;
