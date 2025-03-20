import { Card, CardContent } from '@/components/ui/card';
import { LabeledSelect } from '@/components/forms/maritalStatus';

interface SelectOption {
    value: string;
    label: string;
}

const MARITAL_STATUS_OPTIONS: SelectOption[] = [
    { value: 'solteiro', label: 'Solteiro' },
    { value: 'casado', label: 'Casado' },
    { value: 'divorciado', label: 'Divorciado' },
    { value: 'viuvo', label: 'Viúvo' },
];

const REGIME_PATRIMONIAL_OPTIONS: SelectOption[] = [
    { value: 'comunhao-parcial', label: 'Comunhão parcial de bens' },
    { value: 'comunhao-universal', label: 'Comunhão universal de bens' },
    { value: 'separacao-total', label: 'Separação total de bens' },
];

const MaritalStatusContainer: React.FC = () => {
    return (
        <Card className="relative rounded border-none">
            <CardContent>
                <LabeledSelect
                    label="Estado Civil"
                    options={MARITAL_STATUS_OPTIONS}
                    defaultValue="solteiro"
                />
                <div
                    className="border-t my-4"
                    style={{ borderColor: 'var(--global-section-divider-color)' }}
                />
                <LabeledSelect
                    label="Regime patrimonial"
                    options={REGIME_PATRIMONIAL_OPTIONS}
                    defaultValue="comunhao-parcial"
                />
            </CardContent>
        </Card>
    );
};

export default MaritalStatusContainer;
