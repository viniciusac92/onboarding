import * as React from 'react';
import LabeledInput from '@/components/forms/LabeledInput';

interface PartnerDetailsProps {
    cpf: string;
    rg: string;
    orgao: string;
}

const PartnerDetails: React.FC<PartnerDetailsProps> = ({ cpf, rg, orgao }) => {
    return (
        <div className="flex flex-row gap-6 mb-6">
            <LabeledInput
                label="CPF"
                value={cpf}
                className="flex-1 max-w-[400px]"
            />
            <LabeledInput 
                label="RG" 
                value={rg} 
                className="flex-1 max-w-33.5" 
            />
            <LabeledInput 
                label="Órgão" 
                value={orgao} 
                className="flex-1 max-w-19" 
            />
        </div>
    );
};

export default PartnerDetails;
