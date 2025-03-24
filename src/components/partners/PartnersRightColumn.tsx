import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PartnersRightColumnProps {
    handleNext: () => void;
}

const PartnersRightColumn: React.FC<PartnersRightColumnProps> = ({ handleNext }) => {
    const navigate = useNavigate();
    
    const handleAddNewPartner = () => {
        navigate('/new-partner');
    };

    return (
        <div className="responsive-column flex flex-col pt-12 pb-24 pr-20 space-y-6 max-w-[340px]">
            <Button 
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
                onClick={handleAddNewPartner}
            >
                <Plus size={16} />
                Novo Sócio
            </Button>

            <div className="mt-auto">
                <Button
                    variant="default"
                    onClick={handleNext}
                    className="flex items-center justify-between w-full normal-case bg-blue-500 hover:bg-blue-600"
                >
                    <span className="relative">Finalizar</span>
                    <ChevronRight size={16} />
                </Button>
            </div>
        </div>
    );
};

export default PartnersRightColumn;
