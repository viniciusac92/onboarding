import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import LabeledInput from '@/components/forms/LabeledInput';

const EnterpriseIdentificationContainer: React.FC = () => {
    const razaoSocial = 'empresa LTDA';
    const razaoSocialSegundaOpcao = 'empresa opçao 2 LTDA';
    const razaoSocialTerceiraOpcao = 'empresa opçao 2 LTDA';
    const tradingName = 'empresa de tecnologia';

    return (
        <Card className="rounded-sm border-none gap-0">
            <CardHeader className="font-semibold text-base gap-0 pb-2">Identificação</CardHeader>
            <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
                <Label className="text-sm pb-4">
                    Escolha três opções de nomes para identificar sua empresa, priorizando a
                    primeira para registro.
                </Label>
                <div className="pb-4">
                    <Label className="font-medium pb-1.5">Razão Social *</Label>
                    <Label className="font-normal pb-1.5">
                        Denominação social ou firma empresarial.
                    </Label>
                    <Input className="border-none" placeholder={razaoSocial} />
                </div>
                <div className="pb-4">
                    <LabeledInput label="Segunda opção" value={razaoSocialSegundaOpcao} />
                </div>
                <div className="pb-4">
                    <LabeledInput label="Terceira opção" value={razaoSocialTerceiraOpcao} />
                </div>
                <div
                    className="border-t pb-4"
                    style={{ borderColor: 'var(--global-section-divider-color)' }}
                />
                <div>
                    <Label className="font-bold mb-1.5">Nome fantasia</Label>
                    <Label className="font-normal pb-1.5">Como a empresa é conhecida?</Label>
                    <Input className="border-none" placeholder={tradingName} />
                </div>
            </CardContent>
        </Card>
    );
};

export default EnterpriseIdentificationContainer;
