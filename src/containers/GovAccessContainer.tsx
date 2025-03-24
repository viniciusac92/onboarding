import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const GovAccessContainer: React.FC = () => {
    const login = 'E-mail';
    const password = '•••••••••••••••••••••';

    return (
        <div className="flex flex-col">
            <Card className="relative rounded-sm border-none gap-0">
                <CardHeader className="font-semibold text-base gap-0 pb-4">
                    Acesso ao Gov.br
                </CardHeader>
                <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
                    <div className="pb-4">
                        <Label className="font-medium pb-2">Login</Label>
                        <Input className="border-none" value={login} />
                    </div>
                    <div>
                        <Label className="font-medium pb-2">Senha</Label>
                        <Input className="border-none" value={password} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default GovAccessContainer;
