import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileUploadArea } from '@/components/uploadArea';
import LabeledInput from '@/components/forms/LabeledInput';

const UserInfoContainer: React.FC = () => {
    const name = 'Pietro Schirano';
    const cpf = 'xxx.xxx.xxx-xx';
    const rg = 'xx.xxx-xxx';
    const orgao = 'SSPMG';

    return (
        <div className="flex flex-col">
            <Card className="relative rounded-sm h-full flex-1 border-none">
                <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
                    <LabeledInput label="Nome" value={name} className="mb-4" />
                    <div className="flex flex-row gap-6 mb-6">
                        <LabeledInput label="CPF" value={cpf} className="flex-1 max-w-[400px]" />
                        <LabeledInput label="RG" value={rg} className="flex-1 max-w-33.5" />
                        <LabeledInput label="Órgão" value={orgao} className="flex-1 max-w-19" />
                    </div>
                    <FileUploadArea title="Anexar CNH ou RG" description="Arraste e solte" />
                </CardContent>
            </Card>
        </div>
    );
};

export default UserInfoContainer;
