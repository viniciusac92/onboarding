import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import ProfessionContainer from '@/containers/ProfessionContainer';
import MaritalStatusContainer from '@/containers/MaritalStatusContainer';
import ProfessionalLicenseContainer from '@/containers/ProfessionalLicenseContainer';

interface RegisterRightColumnProps {
    handleNext: () => void;
}

const RegisterRightColumn: React.FC<RegisterRightColumnProps> = ({ handleNext }) => {
    return (
        <div className="responsive-column flex flex-col pt-12 pr-20 space-y-6 min-h-screen max-w-[340px]">
            <MaritalStatusContainer />
            <ProfessionContainer />
            <ProfessionalLicenseContainer />
            <div className="mt-auto">
                <Button
                    variant="default"
                    onClick={handleNext}
                    className="flex items-center justify-between w-full normal-case bg-[var(--default-blue-background)] rounded hover:bg-[var(--default-blue-hover)]"
                >
                    <span className="relative top-[1px]">Avançar</span>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
};

export default RegisterRightColumn;
