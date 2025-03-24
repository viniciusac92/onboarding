import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PartnersLeftColumn,
    PartnersMiddleColumn,
    PartnersRightColumn,
} from '@/components/partners';
import '../styles/register.css';

const steps = [{ label: 'Seus dados' }, { label: 'Sobre a empresa' }, { label: 'Sócios' }];

const Partners: React.FC = () => {
    const navigate = useNavigate();
    // We'll use this constant directly without setting state since this page
    // is specifically for the Sócios step
    const activeStep = 2; // 'Sócios' is the third step (index 2)

    const handleNext = () => {
        // Navigate to completion or next page
        navigate('/home');
        console.log('Finalized');
    };

    return (
        <div className="flex">
            <div className="flex-1 ml-1/4">
                <div className="flex flex-col items-start pt-24">
                    <div className="responsive-container py-8">
                        <PartnersLeftColumn activeStep={activeStep} steps={steps} />
                        <PartnersMiddleColumn />
                        <PartnersRightColumn handleNext={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
