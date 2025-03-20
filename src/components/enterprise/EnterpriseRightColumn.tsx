import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import ProfessionContainer from '@/containers/ProfessionContainer';
import MaritalStatusContainer from '@/containers/MaritalStatusContainer';
import ProfessionalLicenseContainer from '@/containers/ProfessionalLicenseContainer';

interface EnterpriseRightColumnProps {
    handleNext: () => void;
}

const EnterpriseRightColumn: React.FC<EnterpriseRightColumnProps> = ({ handleNext }) => {
    return (
        <div className="responsive-column flex flex-col pt-12 pb-24 pr-12 space-y-4 max-w-[340px]">
            <MaritalStatusContainer />
            <ProfessionContainer />
            <ProfessionalLicenseContainer />

            <div>
                <Button
                    variant="default"
                    onClick={handleNext}
                    className="flex items-center justify-between w-full normal-case"
                >
                    <span className="relative top-[1px]">Avançar</span>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
};

export default EnterpriseRightColumn;
