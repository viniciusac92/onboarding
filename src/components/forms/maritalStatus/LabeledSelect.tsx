import { CustomDataLabel } from '@/components/ui/customDataLabel';
import { Label } from '../../ui/label';
import { Select, SelectTrigger, SelectContent, SelectItem } from '../../ui/select';

interface SelectOption {
    value: string;
    label: string;
}

interface LabeledSelectProps {
    label: string;
    subtitle?: string;
    options: SelectOption[];
    defaultValue?: string;
    placeholder?: string;
}

const LabeledSelect: React.FC<LabeledSelectProps> = ({
    label,
    subtitle,
    options,
    defaultValue,
    placeholder = 'Selecione...',
}) => {
    return (
        <div>
            <CustomDataLabel className="pb-3.5 mb-0">{label}</CustomDataLabel>
            {subtitle && <Label className="font-normal pb-1.5">{subtitle}</Label>}
            <Select defaultValue={defaultValue}>
                <SelectTrigger className="w-full border-none focus-visible:ring-0 bg-gray-100">
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
