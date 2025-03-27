import React, { useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/forms/InfoDialog';
import { Button } from '@/components/ui/button';
import { InfoNoCircle } from '@/assets/icons/InfoNoCircle';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import PasswordEnabledInput from '@/components/forms/PasswordEnabledInput';

const GovAccessContainer: React.FC = () => {
    const cpf = '___.___.___-__';
    const password = 'abcd1234';
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <Card className="rounded-sm border-none gap-0">
            <CardHeader className="flex items-center text-base font-medium gap-2 pb-2">
                Acesso ao Gov.br
                <Dialog>
                    <DialogTrigger asChild>
                        <span className="flex items-center justify-center bg-blue-100 rounded-full h-4 w-4 mt-[2px] cursor-pointer">
                            <InfoNoCircle />
                        </span>
                    </DialogTrigger>
                    <DialogContent className="p-4 bg-white shadow-none rounded-lg">
                        <DialogTitle className="text-lg font-semibold">
                            Porque precisamos desse dado?
                        </DialogTitle>
                        <DialogDescription className="text-sm font-normal text-gray-600 mt-2">
                            Para avançarmos na abertura da sua empresa, precisamos acessar sua conta
                            Gov.br. Essa informação é usada apenas para registro no sistema do
                            Governo e não será armazenada, ok?
                        </DialogDescription>
                        <div className="flex justify-end mt-4">
                            <DialogPrimitive.Close asChild>
                                <Button
                                    className="text-white text-xs bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md focus:outline-none focus-visible:ring-0"
                                    onClick={() => setShowPassword(false)}
                                >
                                    OK
                                </Button>
                            </DialogPrimitive.Close>
                        </div>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent className="space-y-2">
                <PasswordEnabledInput label="CPF" value={cpf} type="text" />
                <PasswordEnabledInput
                    label="Senha"
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    onToggleVisibility={togglePassword}
                    showVisibilityToggle
                />
            </CardContent>
        </Card>
    );
};

export default GovAccessContainer;
