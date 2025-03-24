import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { LabeledSelect } from '@/components/forms/maritalStatus';
import { CustomDataLabel } from '@/components/ui/customDataLabel';

interface SelectOption {
    value: string;
    label: string;
}

const LEGAL_TYPE_OPTIONS: SelectOption[] = [
    { value: 'mei', label: 'MEI' },
    { value: 'simples', label: 'Simples' },
    { value: 'eireli', label: 'Eireli' },
];

const ACTION_TYPE_OPTIONS: SelectOption[] = [
    { value: 'internet', label: 'Internet' },
    { value: 'varejo', label: 'Varejo' },
];
const EnterpriseSpecificationContainer: React.FC = () => {
    return (
        <Card className="rounded-sm border-none gap-0">
            <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
                <div className="flex gap-14 pb-10">
                    <div className="w-full">
                        <LabeledSelect
                            label="Natureza Jurídica"
                            subtitle="Selecione o tipo de empresa."
                            options={LEGAL_TYPE_OPTIONS}
                            defaultValue="mei"
                        />
                    </div>
                    <div className="w-full">
                        <LabeledSelect
                            label="Atuação"
                            subtitle="Como a sua empresa atua?"
                            options={ACTION_TYPE_OPTIONS}
                            defaultValue="internet"
                        />
                    </div>
                </div>
                <div className="flex gap-14 pb-10">
                    <div className="w-full">
                        <CustomDataLabel className="pb-2">Capital Social</CustomDataLabel>
                        <Label className="font-normal pb-3.5">
                            Valor investido inicialmente para abrir uma empresa. (Valor real)
                        </Label>
                        <Input className="border-none" placeholder="R$ 8.000.000,00" />
                    </div>
                    <div className="w-full">
                        <CustomDataLabel className="pb-2">Participação societária</CustomDataLabel>
                        <Label className="font-normal pb-3.5">
                            Informe o valor em percentual da sua participação na empresa.{' '}
                        </Label>
                        <Input className="border-none" placeholder="45%" />
                    </div>
                </div>
                <div className="">
                    <Label className="text-base font-medium mb-1.5">Objeto Social</Label>
                    <Label className="font-normal pb-1.5">
                        Descreva detalhadamente o negócio da sua empresa e quais atividades ela
                        realiza.
                    </Label>
                    <Input className="border-none" placeholder="Desenvolvimento de Software" />
                </div>
            </CardContent>
        </Card>
    );
};

export default EnterpriseSpecificationContainer;
