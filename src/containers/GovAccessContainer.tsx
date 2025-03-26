import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const GovAccessContainer: React.FC = () => {
    const login = 'E-mail';
    const password = 'abcd1234';
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col">
            <Card className="relative rounded-sm border-none gap-0">
                <CardHeader className="font-semibold text-base gap-0 pb-4">
                    Acesso ao Gov.br
                </CardHeader>
                <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
                    <div className="pb-4">
                        <Label className="font-medium pb-2">Login</Label>
                        <Input className="text-sm font-normal border-none" value={login} />
                    </div>
                    <div>
                        <Label className="font-medium pb-2">Senha</Label>
                        <div className="relative">
                            <Input
                                className="text-sm font-normal border-none pr-10"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                {showPassword ? (
                                    <Eye className="h-5 w-5" />
                                ) : (
                                    <EyeOff className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default GovAccessContainer;
