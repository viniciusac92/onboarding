import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import ProfessionContainer from '@/containers/ProfessionContainer';
import MaritalStatusContainer from '@/containers/MaritalStatusContainer';
import VoterRegistrationContainer from '@/containers/VoterRegistrationContainer';
import ProfessionalLicenseContainer from '@/containers/ProfessionalLicenseContainer';

interface RegisterRightColumnProps {
    handleNext: () => void;
}

const RegisterRightColumn: React.FC<RegisterRightColumnProps> = ({ handleNext }) => {
    return (
        <div className="responsive-column flex flex-col pt-12 mr-20 space-y-4 md:space-y-6 w-full md:max-w-[292px]">
            <MaritalStatusContainer />
            <ProfessionContainer />
            <ProfessionalLicenseContainer />
            <VoterRegistrationContainer />
            <div className="mt-auto">
                <Button
                    variant="default"
                    onClick={handleNext}
                    className="flex items-center justify-between w-full normal-case bg-[var(--default-blue-background)] rounded-md hover:bg-[var(--default-blue-hover)]"
                >
                    <span className="relative top-[1px]">Avançar</span>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
};

export default RegisterRightColumn;
