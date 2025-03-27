import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import LabeledInput from '@/components/forms/LabeledInput';

const EnterpriseAddressContainer: React.FC = () => {
    const cep = '00000-000';
    const cidade = 'São Paulo';
    const estado = 'SP';
    const logradouro = 'Rua 1';
    const bairro = 'Bairro 1';
    const numero = '1';
    const complemento = 'apto 505';
    const areaTerreno = '600';
    const areaEdificada = '400';

    return (
        <Card className="rounded-sm border-none gap-0">
            <div className="flex items-center justify-between w-full pb-4">
                <CardHeader className="font-semibold text-base m-0 gap-0">Endereço</CardHeader>
                <div className="flex items-center pr-6">
                    <Checkbox
                        id="useMyAddress"
                        className="mr-2 data-[state=checked]:bg-blue-500 data-[state=checked]:border-none"
                    />
                    <Label htmlFor="useMyAddress" className="text-xs font-normal">
                        Usar meu endereço
                    </Label>
                </div>
            </div>
            <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
                <div className="flex gap-4 mb-4">
                    <LabeledInput label="CEP" value={cep} className="flex-1 max-w-[128px]" />
                    <LabeledInput label="Cidade" value={cidade} className="flex-1" />
                    <LabeledInput label="Estado" value={estado} className="flex-1 max-w-[80px]" />
                </div>
                <div className="flex gap-4 mb-4">
                    <LabeledInput label="Logradouro" value={logradouro} className="flex-1" />
                    <LabeledInput label="Bairro" value={bairro} className="flex-1 max-w-[205px]" />
                    <LabeledInput label="Número" value={numero} className="flex-1 max-w-[100px]" />
                </div>
                <div className="flex gap-4">
                    <LabeledInput
                        label="Complemento"
                        value={complemento}
                        className="flex-1 max-w-[262px]"
                    />
                </div>
                <div
                    className="border-t my-4"
                    style={{ borderColor: 'var(--global-section-divider-color)' }}
                />
                <div className="flex gap-4">
                    <LabeledInput
                        label="Área do terreno (Metros)"
                        value={areaTerreno}
                        className="flex-1 max-w-[262px]"
                    />
                    <LabeledInput
                        label="Área edificada (Metros)"
                        value={areaEdificada}
                        className="flex-1 max-w-[262px]"
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default EnterpriseAddressContainer;
