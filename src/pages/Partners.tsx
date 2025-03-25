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
    const activeStep = 2;

    const handleNext = () => {
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
                        {/* <PartnersRightColumn handleNext={handleNext} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
