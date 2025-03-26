import { useState } from 'react';
import { Control } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
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
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="flex items-center border border-input rounded-md px-3 py-2">
                            <input
                                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                                placeholder={placeholder}
                                {...field}
                                {...register}
                                className="flex-1 text-sm text-[var(--global-text-color)] bg-transparent focus:outline-none"
                            />
                            {isPassword && (
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showPassword ? (
                                        <Eye className="h-5 w-5" />
                                    ) : (
                                        <EyeOff className="h-5 w-5" />
                                    )}
                                </button>
                            )}
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default TextField;
