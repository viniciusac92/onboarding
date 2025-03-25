import React from 'react';
import '../styles/containerStructure.css';
import { useNavigate } from 'react-router-dom';
import { PartnersLeftColumn, PartnersMiddleColumn } from '@/components/partners';

const steps = [{ label: 'Seus dados' }, { label: 'Sobre a empresa' }, { label: 'Sócios' }];

const Partners: React.FC = () => {
    const navigate = useNavigate();
    const activeStep = 2;

    const handleNext = () => {
        navigate('/home');
    };

    return (
        <div className="flex ">
            <div className="flex-1 ml-1/4">
                <div className="flex flex-col items-start pt-24 pb-5 h-screen">
                    <div className="responsive-container pt-8 h-full">
                        <PartnersLeftColumn activeStep={activeStep} steps={steps} />
                        <PartnersMiddleColumn handleNext={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
