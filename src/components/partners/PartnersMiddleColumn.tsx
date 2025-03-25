import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Share2, ChevronRight } from 'lucide-react';
import { Label } from '@/components/ui/label';
import AddPartnerButton from './AddPartnerButton';

interface Partner {
    name: string;
    cpf: string;
    rg: string;
    orgao: string;
    isAdmin: boolean;
    isExpanded: boolean;
    address: {
        cep: string;
        cidade: string;
        estado: string;
        logradouro: string;
        bairro: string;
        numero: string;
        complemento: string;
    };
}

const PartnersMiddleColumn: React.FC = () => {
    const [partners, setPartners] = useState<Partner[]>([
        {
            name: 'Arthur Felipe Moitinho',
            cpf: 'xxx.xxx.xxx-xx',
            rg: 'xx.xxx-xxx',
            orgao: 'SSPMG',
            isAdmin: true,
            isExpanded: false,
            address: {
                cep: '30431191',
                cidade: 'Pietro Schiriano',
                estado: 'MG',
                logradouro: 'Pietro Schiriano',
                bairro: 'Pietro Schiriano',
                numero: '2473',
                complemento: 'Pietro Schiriano',
            },
        },
    ]);

    const togglePartnerExpansion = (index: number) => {
        const updatedPartners = [...partners];
        updatedPartners[index].isExpanded = !updatedPartners[index].isExpanded;
        setPartners(updatedPartners);
    };

    const [showShareModal, setShowShareModal] = useState(false);

    return (
        <div className="responsive-column pl-4 pr-20 space-y-4">
            <div className="flex justify-between items-start">
                <h1 className="responsive-page-title text-3xl font-bold">Seus sócios</h1>
                <AddPartnerButton />
            </div>
            {showShareModal && (
                <Card className="relative rounded border-none mb-6">
                    <CardHeader className="font-bold text-[16px]">Preenchimento remoto</CardHeader>
                    <CardContent className="pt-0 mt-0">
                        <p className="text-sm mb-4">
                            Você pode compartilhar essa página para seu sócio preencher de onde
                            estiver!
                        </p>
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                className="flex-1 border-blue-500 text-blue-500"
                                onClick={() => setShowShareModal(false)}
                            >
                                Copy link
                            </Button>
                            <Button
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                                onClick={() => setShowShareModal(false)}
                            >
                                Continuar
                                <ChevronRight size={16} className="ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
            {partners.map((partner, index) => (
                <Card key={index} className="relative rounded border-none">
                    <CardHeader className="p-4 pb-0">
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-[16px]">{partner.name}</div>
                            <div className="flex items-center gap-2">
                                <div className="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded">
                                    Administrador
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="p-0 h-auto"
                                    onClick={() => togglePartnerExpansion(index)}
                                >
                                    {partner.isExpanded ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    {partner.isExpanded && (
                        <CardContent className="pt-4 mt-0">
                            <div className="mb-6">
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            CPF
                                        </Label>
                                        <div className="text-sm">{partner.cpf}</div>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            RG
                                        </Label>
                                        <div className="text-sm">{partner.rg}</div>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            Órgão
                                        </Label>
                                        <div className="text-sm">{partner.orgao}</div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <Label className="text-sm font-medium text-gray-500">
                                        Endereço
                                    </Label>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-2">
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            CEP
                                        </Label>
                                        <div className="text-sm">{partner.address.cep}</div>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            Cidade
                                        </Label>
                                        <div className="text-sm">{partner.address.cidade}</div>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            Estado
                                        </Label>
                                        <div className="text-sm">{partner.address.estado}</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-2">
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            Logradouro
                                        </Label>
                                        <div className="text-sm">{partner.address.logradouro}</div>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            Bairro
                                        </Label>
                                        <div className="text-sm">{partner.address.bairro}</div>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            Número
                                        </Label>
                                        <div className="text-sm">{partner.address.numero}</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="text-sm font-medium text-gray-500">
                                            Complemento
                                        </Label>
                                        <div className="text-sm">{partner.address.complemento}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-blue-500 text-blue-500"
                                >
                                    Editar
                                </Button>
                            </div>
                        </CardContent>
                    )}
                </Card>
            ))}
            <div className="mt-auto">
                <Button
                    variant="default"
                    className="flex flex-row items-center justify-right normal-case bg-blue-500 hover:bg-blue-600"
                >
                    <span className="relative">Finalizar</span>
                    <ChevronRight size={16} />
                </Button>
            </div>
        </div>
    );
};

export default PartnersMiddleColumn;
