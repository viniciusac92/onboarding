import { UseFormReturn, SubmitHandler } from 'react-hook-form';
import { Form } from '../../ui/form';
import { TextField, RememberMeField } from './index';

interface LoginFormValues {
    username: string;
    password: string;
    rememberMe: boolean;
}

interface LoginFormProps {
    form: UseFormReturn<LoginFormValues>;
    onSubmit: SubmitHandler<LoginFormValues>;
}

const LoginForm: React.FC<LoginFormProps> = ({ form, onSubmit }) => {
    const { register, handleSubmit, control } = form;

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    control={control}
                    name="username"
                    label="E-mail"
                    placeholder="E-mail"
                    className="mb-2"
                    register={register}
                />
                <TextField
                    control={control}
                    name="password"
                    label="Senha"
                    placeholder="Senha"
                    type="password"
                    className="mb-4"
                    register={register}
                />
                <RememberMeField
                    control={control}
                    name="rememberMe"
                    label="Lembrar"
                    className="inline-block align-middle mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white mb-4 py-2 px-4 rounded hover:bg-blue-600"
                >
                    Entrar
                </button>
                <a href="#" className="underline">
                    Entre em contato
                </a>
            </form>
        </Form>
    );
};

export default LoginForm;
