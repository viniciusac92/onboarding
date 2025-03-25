import LabeledInput from '../LabeledInput';

interface PartnerAddressFieldsProps {
    cep: string;
    cidade: string;
    estado: string;
    logradouro: string;
    bairro: string;
    numero: string;
    complemento: string;
}

const PartnerAddressFields: React.FC<PartnerAddressFieldsProps> = ({
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
                <LabeledInput label="Logradouro" value={logradouro} className="flex-1" />
            </div>
            <div className="flex flex-row gap-4 mb-4">
                <LabeledInput label="Bairro" value={bairro} className="flex-1 max-w-[205px]" />
                <LabeledInput label="Número" value={numero} className="flex-1 max-w-[53px]" />
                <LabeledInput
                    label="Complemento"
                    value={complemento}
                    className="flex-1 max-w-[262px]"
                />
            </div>
        </div>
    );
};

export default PartnerAddressFields;
