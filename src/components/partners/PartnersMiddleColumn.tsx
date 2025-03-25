import React from 'react';
import { Button } from '@/components/ui/button';
import AddPartnerButton from '../forms/partners/AddPartnerButton';
import PartnersOverviewContainer from '@/containers/PartnersOverviewContainer';
import { ChevronRight } from 'lucide-react';

interface PartnersMiddleColumnProps {
    handleNext: () => void;
}

const PartnersMiddleColumn: React.FC<PartnersMiddleColumnProps> = ({ handleNext }) => {
    return (
        <div className="responsive-column flex flex-col pl-4 pr-20 pb-5 space-y-4">
            <div className="flex justify-between items-start">
                <h1 className="responsive-page-title text-3xl font-bold">Seus sócios</h1>
                <AddPartnerButton />
            </div>
            <div className="flex-grow space-y-4">
                <PartnersOverviewContainer />
            </div>
            <div className="flex justify-end items-center">
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
