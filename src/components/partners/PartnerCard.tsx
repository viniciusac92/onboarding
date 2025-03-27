import * as React from 'react';

import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import EditButton from '@/components/forms/partners/EditButton';
import PartnerDetails from '@/components/forms/partners/PartnerDetails';
import PartnerAddressFields from '@/components/forms/partners/PartnerAddressFields';
import CollapsiblePartnerCard from '@/components/forms/partners/AccordionPartnerCard';

interface Address {
    cep: string;
    cidade: string;
    estado: string;
    logradouro: string;
    bairro: string;
    numero: string;
    complemento: string;
}

interface Partner {
    id: string;
    name: string;
    role: string;
    cpf: string;
    rg: string;
    orgao: string;
    address: Address;
}

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleEdit = React.useCallback(() => {
        console.log(`Edit button clicked for partner ${partner.id}`);
    }, [partner.id]);

    return (
        <Card className="rounded-sm border-none">
            <CardContent className="pt-0 mt-0 flex-1">
                <CollapsiblePartnerCard
                    title={partner.name}
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    role={partner.role}
                >
                    <PartnerDetails cpf={partner.cpf} rg={partner.rg} orgao={partner.orgao} />
                    <Label className="font-semibold text-base m-0 pb-6">Endereço</Label>
                    <PartnerAddressFields
                        cep={partner.address.cep}
                        cidade={partner.address.cidade}
                        estado={partner.address.estado}
                        logradouro={partner.address.logradouro}
                        bairro={partner.address.bairro}
                        numero={partner.address.numero}
                        complemento={partner.address.complemento}
                    />
                    <EditButton onClick={handleEdit} />
                </CollapsiblePartnerCard>
            </CardContent>
        </Card>
    );
};

export default PartnerCard;
