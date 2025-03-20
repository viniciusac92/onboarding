import React from 'react';
import UserInfoContainer from '@/containers/UserInfoContainer';
import AddressContainer from '@/containers/AddressContainer';
import MaritalStatusContainer from '@/containers/MaritalStatusContainer';
import ProfessionContainer from '@/containers/ProfessionContainer';
import ProfessionalLicenseContainer from '@/containers/ProfessionalLicenseContainer';
import GlobalStepper from '@/components/GlobalStepper';

import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/* ------------------------------------------------------------------
 * Step definitions
 * ----------------------------------------------------------------*/
const steps = [{ label: 'Seus dados' }, { label: 'Sobre a empresa' }, { label: 'Sócios' }];

/* ------------------------------------------------------------------
 * SUBCOMPONENT: EnterpriseLeftColumn
 * Renders the GlobalStepper and any explanatory text.
 * ----------------------------------------------------------------*/
interface EnterpriseLeftColumnProps {
    activeStep: number;
    steps: { label: string }[];
}

const EnterpriseLeftColumn: React.FC<EnterpriseLeftColumnProps> = ({ activeStep, steps }) => {
    return (
        <div className="responsive-column pl-12 pt-12 max-w-[320px]">
            <GlobalStepper
                heading="Conta pra gente sobre o seu negócio!"
                paragraph="Nesta etapa, queremos saber um pouco mais sobre seu negócio. 💼"
                activeStep={activeStep}
                steps={steps}
            />
        </div>
    );
};

/* ------------------------------------------------------------------
 * SUBCOMPONENT: EnterpriseMiddleColumn
 * Renders the user info + address fields.
 * ----------------------------------------------------------------*/
const EnterpriseMiddleColumn: React.FC = () => {
    return (
        <div className="responsive-column px-4">
            <UserInfoContainer />
            <AddressContainer />
        </div>
    );
};

/* ------------------------------------------------------------------
 * SUBCOMPONENT: EnterpriseRightColumn
 * Renders other containers, plus the 'Avançar' button.
 * ----------------------------------------------------------------*/
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

/* ------------------------------------------------------------------
 * MAIN COMPONENT: Enterprise
 * Coordinates layout, state, and navigation.
 * ----------------------------------------------------------------*/
const Enterprise: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(prev => prev + 1);
        }
        // If you wanted to navigate or do something else once steps are exhausted,
        // you can add code here.
    };

    return (
        <div className="flex">
            <div className="flex-1 ml-1/4">
                <div className="flex flex-col items-start">
                    <div className="responsive-container pt-24">
                        {/* Left column: Stepper */}
                        <EnterpriseLeftColumn activeStep={activeStep} steps={steps} />

                        {/* Middle column: user + address info */}
                        <EnterpriseMiddleColumn />

                        {/* Right column: marital status, profession, license, and button */}
                        <EnterpriseRightColumn handleNext={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enterprise;

// import React from 'react';
// import UserInfoContainer from '@/containers/UserInfoContainer';
// import MaritalStatusContainer from '@/containers/MaritalStatusContainer';
// import ProfessionContainer from '@/containers/ProfessionContainer';
// import ProfessionalLicenseContainer from '@/containers/ProfessionalLicenseContainer';
// import Button from '@mui/material/Button';
// import { ChevronRight } from 'lucide-react';
// import AddressContainer from '@/containers/AddressContainer';
// import GlobalStepper from '@/components/GlobalStepper';

// const steps = [
//     {
//         label: 'Seus dados',
//     },
//     {
//         label: 'Sobre a empresa',
//     },
//     {
//         label: 'Sócios',
//     },
// ];

// const Enterprise: React.FC = () => {
//     const [activeStep, setActiveStep] = React.useState(0);

//     const handleNext = () => {
//         if (activeStep < steps.length - 1) {
//             setActiveStep(prevActiveStep => prevActiveStep + 1);
//         }
//     };

//     return (
//         <div className="flex">
//             <div className="flex-1 ml-1/4">
//                 <div className="flex flex-col items-start">
//                     <div className="responsive-container pt-24 ">
//                         <div className="responsive-column pl-12 pt-12 max-w-[320px]">
//                             <GlobalStepper
//                                 heading="Conta pra gente sobre o seu negócio!"
//                                 paragraph="Nesta etapa, queremos saber um pouco mais sobre seu negócio. 💼"
//                                 activeStep={activeStep}
//                                 steps={steps}
//                             />
//                         </div>
//                         <div className="responsive-column px-4">
//                             <UserInfoContainer />
//                             <AddressContainer />
//                         </div>
//                         <div className="responsive-column flex flex-col pt-12 pb-24 pr-12 space-y-4 max-w-[340px]">
//                             <MaritalStatusContainer />
//                             <ProfessionContainer />
//                             <ProfessionalLicenseContainer />
//                             <div>
//                                 <Button
//                                     variant="contained"
//                                     onClick={handleNext}
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                         width: '100%',
//                                         textTransform: 'none',
//                                     }}
//                                 >
//                                     <span style={{ top: '1px' }}>Avançar</span>
//                                     <ChevronRight />
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Enterprise;
