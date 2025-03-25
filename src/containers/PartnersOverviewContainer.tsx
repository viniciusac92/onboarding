import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import CollapsiblePartnerCard from '@/components/forms/partners/CollapsiblePartnerCard';
import PartnerDetails from '@/components/forms/partners/PartnerDetails';
import EditButton from '@/components/forms/partners/EditButton';
import PartnerAddressFields from '@/components/forms/partners/PartnerAddressFields';

const PartnersOverviewContainer: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const partnerData = {
        name: 'Roswell Alter',
        cpf: 'xxx.xxx.xxx-xx',
        rg: 'xx.xxx-xxx',
        orgao: 'SSPMG',
        address: {
            cep: '00000-000',
            cidade: 'São Paulo',
            estado: 'SP',
            logradouro: 'Rua 1',
            bairro: 'Bairro 1',
            numero: '1',
            complemento: 'Complemento 1',
        },
    };

    const handleEdit = React.useCallback(() => {
        console.log('Edit button clicked');
    }, []);

    return (
        <>
            <Card className="rounded-sm border-none">
                <CardContent className="pt-0 mt-0 flex-1">
                    <CollapsiblePartnerCard
                        title={partnerData.name}
                        isOpen={isOpen}
                        onOpenChange={setIsOpen}
                    >
                        <PartnerDetails
                            cpf={partnerData.cpf}
                            rg={partnerData.rg}
                            orgao={partnerData.orgao}
                        />
                        <Label className="font-semibold text-base m-0 pb-6">Endereço</Label>
                        <PartnerAddressFields
                            cep={partnerData.address.cep}
                            cidade={partnerData.address.cidade}
                            estado={partnerData.address.estado}
                            logradouro={partnerData.address.logradouro}
                            bairro={partnerData.address.bairro}
                            numero={partnerData.address.numero}
                            complemento={partnerData.address.complemento}
                        />
                        <EditButton onClick={handleEdit} />
                    </CollapsiblePartnerCard>
                </CardContent>
            </Card>
            <Card className="rounded-sm border-none">
                <CardContent className="pt-0 mt-0 flex-1">
                    <CollapsiblePartnerCard
                        title={partnerData.name}
                        isOpen={isOpen}
                        onOpenChange={setIsOpen}
                    >
                        <PartnerDetails
                            cpf={partnerData.cpf}
                            rg={partnerData.rg}
                            orgao={partnerData.orgao}
                        />
                        <Label className="font-semibold text-base m-0 pb-6">Endereço</Label>
                        <PartnerAddressFields
                            cep={partnerData.address.cep}
                            cidade={partnerData.address.cidade}
                            estado={partnerData.address.estado}
                            logradouro={partnerData.address.logradouro}
                            bairro={partnerData.address.bairro}
                            numero={partnerData.address.numero}
                            complemento={partnerData.address.complemento}
                        />
                        <EditButton onClick={handleEdit} />
                    </CollapsiblePartnerCard>
                </CardContent>
            </Card>
        </>
    );
};

export default PartnersOverviewContainer;
