import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import ProfessionContainer from '@/containers/ProfessionContainer';
import MaritalStatusContainer from '@/containers/MaritalStatusContainer';
import CorporateInterestContainer from '@/containers/CorporateInterestContainer';

interface NewPartnerRightColumnProps {
    handleSave: () => void;
}

const NewPartnerRightColumn: React.FC<NewPartnerRightColumnProps> = ({ handleSave }) => {
    return (
        <div className="responsive-column flex flex-col pt-12 pr-20 space-y-4 md:space-y-6 min-h-screen max-w-[360px]">
            <MaritalStatusContainer />
            <ProfessionContainer />
            <CorporateInterestContainer />
            <div className="mt-auto">
                <Button
                    variant="default"
                    onClick={handleSave}
                    className="flex items-center justify-between w-full normal-case bg-[var(--default-blue-background)] rounded-md hover:bg-[var(--default-blue-hover)]"
                >
                    <span className="relative top-[1px]">Avançar</span>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
};

export default NewPartnerRightColumn;
