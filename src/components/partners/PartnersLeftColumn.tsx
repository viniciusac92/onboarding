import React from 'react';
import GlobalStepper from '../GlobalStepper';

interface PartnersLeftColumnProps {
    activeStep: number;
    steps: { label: string }[];
}

const PartnersLeftColumn: React.FC<PartnersLeftColumnProps> = ({ activeStep, steps }) => {
    return (
        <div className="responsive-column pl-20 pt-12 max-w-[320px]">
            <GlobalStepper
                heading="Networking é tudo!"
                paragraph="Agora, você pode incluir os sócios da sua empresa nessa etapa do cadastro. 😊"
                activeStep={activeStep}
                steps={steps}
            />
        </div>
    );
};

export default PartnersLeftColumn;
