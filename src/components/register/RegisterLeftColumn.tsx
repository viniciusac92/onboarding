import GlobalStepper from '../GlobalStepper';

interface RegisterLeftColumnProps {
    activeStep: number;
    steps: { label: string }[];
}

const RegisterLeftColumn: React.FC<RegisterLeftColumnProps> = ({ activeStep, steps }) => {
    return (
        <div className="responsive-column pl-20 pt-12 max-w-[320px]">
            <GlobalStepper
                heading="Vamos abrir sua empresa!"
                paragraph="Nesta primeira etapa, precisamos de alguns dados sobre você. 😉"
                activeStep={activeStep}
                steps={steps}
            />
        </div>
    );
};

export default RegisterLeftColumn;
