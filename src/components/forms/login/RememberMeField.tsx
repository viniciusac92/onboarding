import { Control } from 'react-hook-form';
import { Checkbox } from '../../ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel } from '../../ui/form';

interface LoginFormValues {
    username: string;
    password: string;
    rememberMe: boolean;
}

interface RememberMeFieldProps {
    control: Control<LoginFormValues>;
    name: keyof LoginFormValues;
    label: string;
    className?: string;
}

const RememberMeField: React.FC<RememberMeFieldProps> = ({ control, name, label, className }) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    <FormControl className="inline-block align-middle">
                        <Checkbox
                            checked={Boolean(field.value)}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 w-4 h-4"
                        />
                    </FormControl>
                    <FormLabel className="inline-block align-middle ml-2">{label}</FormLabel>
                </FormItem>
            )}
        />
    );
};

export default RememberMeField;
