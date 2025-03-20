import { Control } from 'react-hook-form';
import { Input } from '../../ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';

interface LoginFormValues {
    username: string;
    password: string;
    rememberMe: boolean;
}

interface TextFieldProps {
    control: Control<LoginFormValues>;
    name: keyof LoginFormValues;
    label: string;
    placeholder: string;
    type?: string;
    className?: string;
    register?: any;
}

const TextField: React.FC<TextFieldProps> = ({
    control,
    name,
    label,
    placeholder,
    type = 'text',
    className,
    register,
}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    <FormLabel className="mb-0">{label}</FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                            {...register}
                            className="mb-1"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default TextField;
