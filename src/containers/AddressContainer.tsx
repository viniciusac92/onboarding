import React from 'react';
import { FileUploadArea } from '@/components/uploadArea';
import { AddressFields } from '@/components/forms/address';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const AddressContainer: React.FC = () => {
    const cep = '00000-000';
    const cidade = 'São Paulo';
    const estado = 'SP';
    const logradouro = 'Rua 1';
    const bairro = 'Bairro 1';
    const numero = '1';
    const complemento = 'Complemento 1';

    return (
        <div className="flex flex-col">
            <Card className="rounded-sm border-none gap-0">
                <CardHeader className="font-semibold text-base gap-0 pb-4">Meu endereço</CardHeader>
                <CardContent className="pt-0 mt-0 flex-1 overflow-y-auto">
                    <AddressFields
                        cep={cep}
                        cidade={cidade}
                        estado={estado}
                        logradouro={logradouro}
                        bairro={bairro}
                        numero={numero}
                        complemento={complemento}
                    />
                    <FileUploadArea
                        title="Anexar Comprovante de Endereço"
                        subtitle="Se a sua empresa atua nesse local, utilize o IPTU como comprovante."
                        description="Arraste e solte"
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default AddressContainer;
