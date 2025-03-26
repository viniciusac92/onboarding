import LabeledInput from '../LabeledInput';

interface AddressFieldsProps {
    cep: string;
    cidade: string;
    estado: string;
    logradouro: string;
    bairro: string;
    numero: string;
    complemento: string;
}

const AddressFields: React.FC<AddressFieldsProps> = ({
    cep,
    cidade,
    estado,
    logradouro,
    bairro,
    numero,
    complemento,
}) => {
    return (
        <div className="mb-4">
            <div className="flex flex-row gap-4 mb-4">
                <LabeledInput label="CEP" value={cep} className="flex-1 max-w-[128px]" />
                <LabeledInput label="Cidade" value={cidade} className="flex-1" />
                <LabeledInput label="Estado" value={estado} className="flex-1 max-w-[47px]" />
            </div>
            <div className="flex flex-row gap-4 mb-4">
                <LabeledInput label="Logradouro" value={logradouro} className="flex-1" />
                <LabeledInput label="Bairro" value={bairro} className="flex-1 max-w-[205px]" />
                <LabeledInput label="Número" value={numero} className="flex-1 max-w-[53px]" />
            </div>
            <LabeledInput
                label="Complemento"
                value={complemento}
                className="flex-1 max-w-[262px]"
            />
            <div
                className="border-t my-4"
                style={{ borderColor: 'var(--global-section-divider-color)' }}
            />
        </div>
    );
};

export default AddressFields;
