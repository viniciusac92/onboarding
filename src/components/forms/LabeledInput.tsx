import { CustomDataLabel } from '../ui/customDataLabel';
import { Input } from '../ui/input';

interface LabeledInputProps {
    label: string;
    value: string;
    className?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ label, value, className }) => {
    return (
        <div className={className}>
            <CustomDataLabel>{label}</CustomDataLabel>
            <Input className="text-sm font-normal border-none" value={value} />
        </div>
    );
};

export default LabeledInput;
