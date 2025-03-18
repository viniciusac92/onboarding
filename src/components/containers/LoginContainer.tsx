import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'

interface LoginFormValues {
    username: string
    password: string
    rememberMe: boolean
}

interface LoginContainerProps {
    form: UseFormReturn<LoginFormValues>
    onSubmit: SubmitHandler<LoginFormValues>
}

const LoginContainer: React.FC<LoginContainerProps> = ({ form, onSubmit }) => {
    const {
        handleSubmit,
        control,
    } = form

    return (
        <div className="flex flex-row justify-end px-6 sm:px-20 pt-40">
            <div className="hidden sm:flex sm:flex-1 items-center">
                <div className="text-white max-w-[600px] ml-20">
                    <h1 className="text-[64px] leading-[1.5] font-thin mb-0">
                        Contabilidade não é
                        <br />
                        fácil pra ninguém.
                    </h1>
                    <h2 className="text-[64px] leading-[1.15] font-thin mt-0">
                        Pra gente, é <span className="font-bold">Obvia</span>.
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-start max-w-99.5 w-full">
                <h2 className="flex flex-start text-xl font-bold mb-4 text-white">
                    Entrar
                </h2>
                <div className="bg-white p-6 rounded w-full h-[302px]">
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormField
                                control={control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem className="mb-2">
                                        <FormLabel className="m-0">E-mail</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="mb-1"
                                                placeholder="E-mail"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel className="mb-0">Senha</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Senha"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="rememberMe"
                                render={({ field }) => (
                                    <FormItem className="inline-block align-middle mb-4">
                                        <FormControl className="inline-block align-middle">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 w-4 h-4"
                                            />
                                        </FormControl>
                                        <FormLabel className="inline-block align-middle ml-2">
                                            Lembrar
                                        </FormLabel>
                                    </FormItem>
                                )}
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
                </div>
            </div>
        </div>
    )
}

export default LoginContainer
