import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PasswordEnabledInputProps {
    label: string;
    value: string;
    type: 'text' | 'password';
    showVisibilityToggle?: boolean;
    onToggleVisibility?: () => void;
}

const PasswordEnabledInput: React.FC<PasswordEnabledInputProps> = ({
    label,
    value,
    type,
    showVisibilityToggle,
    onToggleVisibility,
}) => (
    <div className="space-y-2">
        <Label className="font-medium">{label}</Label>
        <div className="relative">
            <Input
                value={value}
                type={type}
                className="pr-10 text-sm font-normal border-none"
                readOnly
            />
            {showVisibilityToggle && onToggleVisibility && (
                <button
                    type="button"
                    onClick={onToggleVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={`${type === 'password' ? 'Show' : 'Hide'} password`}
                >
                    {type === 'password' ? (
                        <Eye className="h-5 w-5" />
                    ) : (
                        <EyeOff className="h-5 w-5" />
                    )}
                </button>
            )}
        </div>
    </div>
);

export default PasswordEnabledInput;
