import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { IntroSection, LoginForm } from '@/components/forms/login';

interface LoginFormValues {
    username: string;
    password: string;
    rememberMe: boolean;
}

interface LoginContainerProps {
    form: UseFormReturn<LoginFormValues>;
    onSubmit: SubmitHandler<LoginFormValues>;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ form, onSubmit }) => {
    return (
        <div className="flex flex-row justify-end px-6 sm:px-20 pt-40">
            <IntroSection />
            <div className="flex flex-col items-start max-w-99.5 w-full">
                <h2 className="flex flex-start text-xl font-bold mb-4 text-white">Entrar</h2>
                <div className="bg-white p-6 rounded w-full h-[302px]">
                    <LoginForm form={form} onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default LoginContainer;
