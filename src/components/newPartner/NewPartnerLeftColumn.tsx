import React from 'react';
import { ArrowLeft, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OnboardingInfoText from '../OnboardingInfoText';
import { Button } from '../ui/button';

const NewPartnerLeftColumn: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/partners');
    };

    return (
        <div className="responsive-column pl-20 pt-12 max-w-[320px]">
            <h2 className="text-lg font-medium pb-2">Compartilhe com seu sócio.</h2>
            <p className="font-light pb-2">
                Você pode compartilhar essa página com seu sócio, para que ele complete as
                informações de qualquer lugar. 🤝
            </p>
            <Button
                variant="default"
                className="w-fit text-[10px] bg-[var(--default-blue-background)] rounded-md hover:bg-[var(--default-blue-hover)]"
            >
                <Copy />
                <span className="relative top-[1px]">Copiar link</span>
            </Button>
        </div>
    );
};

export default NewPartnerLeftColumn;
