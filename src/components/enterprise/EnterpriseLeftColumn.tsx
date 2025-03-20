import GlobalStepper from '../GlobalStepper';

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

export default EnterpriseLeftColumn;
