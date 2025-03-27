import React, { useState, useCallback } from 'react';
import InfoDialog from '@/components/govAccess/InfoDialog';
import GovCredentials from '@/components/govAccess/GovCredentials';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const GovAccessContainer: React.FC = () => {
    const govCredentials = {
        cpf: '___.___.___-__',
        password: 'abcd1234',
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = useCallback(() => {
        setShowPassword(prev => !prev);
    }, []);

    const handleInfoClose = useCallback(() => {
        setShowPassword(false);
    }, []);

    return (
        <Card className="rounded-sm border-none gap-0">
            <CardHeader className="flex items-center text-base font-medium gap-2 pb-2">
                Acesso ao Gov.br
                <InfoDialog
                    title="Porque precisamos desse dado?"
                    description="Para avançarmos na abertura da sua empresa, precisamos acessar sua conta Gov.br. Essa informação é usada apenas para registro no sistema do Governo e não será armazenada, ok?"
                    onClose={handleInfoClose}
                />
            </CardHeader>
            <CardContent>
                <GovCredentials
                    cpf={govCredentials.cpf}
                    password={govCredentials.password}
                    showPassword={showPassword}
                    onToggleVisibility={togglePassword}
                />
            </CardContent>
        </Card>
    );
};

export default GovAccessContainer;
