import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import AddPartnerButton from '../forms/partners/AddPartnerButton';
import PartnersOverviewContainer from '@/containers/PartnersOverviewContainer';

interface PartnersMiddleColumnProps {
    handleNext: () => void;
}

const PartnersMiddleColumn: React.FC<PartnersMiddleColumnProps> = ({ handleNext }) => {
    const navigate = useNavigate();
    return (
        <div className="responsive-column flex flex-col pl-4 pr-20 space-y-4">
            <div className="flex justify-between items-center mb-3">
                <div className="flex justify-between items-center">
                    <Button
                        onClick={() => navigate('/enterprise')}
                        className="flex items-center justify-center h-10 w-10 p-0 mr-4 bg-white text-blue-500 hover:text-blue-600 hover:bg-white shrink-0 rounded-full shadow-none"
                    >
                        <ArrowLeft className="size-6" />
                    </Button>
                    <h1 className="responsive-page-title text-3xl font-bold">Seus sócios</h1>
                </div>
                <AddPartnerButton />
            </div>
            <PartnersOverviewContainer />
            <div className="flex justify-end items-center pb-6">
                <Button
                    variant="default"
                    className="flex items-center justify-between h-10 w-72.5 text-sm bg-[var(--default-blue-background)] rounded-md hover:bg-[var(--default-blue-hover)]"
                    onClick={handleNext}
                >
                    Finalizar
                    <ChevronRight size={16} />
                </Button>
            </div>
        </div>
    );
};

export default PartnersMiddleColumn;
