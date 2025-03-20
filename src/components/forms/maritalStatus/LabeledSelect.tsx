import { Label } from '../../ui/label';
import { Select, SelectTrigger, SelectContent, SelectItem } from '../../ui/select';

interface SelectOption {
    value: string;
    label: string;
}

interface LabeledSelectProps {
    label: string;
    options: SelectOption[];
    defaultValue?: string;
    placeholder?: string;
}

const LabeledSelect: React.FC<LabeledSelectProps> = ({
    label,
    options,
    defaultValue,
    placeholder = 'Selecione...',
}) => {
    return (
        <div>
            <Label className="block font-bold mb-3.5">{label}</Label>
            <Select defaultValue={defaultValue}>
                <SelectTrigger className="w-full focus-visible:ring-0 bg-gray-100">
                    {options.find(opt => opt.value === defaultValue)?.label ?? placeholder}
                </SelectTrigger>
                <SelectContent>
                    {options.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                            {label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default LabeledSelect;
