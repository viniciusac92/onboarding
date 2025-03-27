import * as React from 'react';

import PartnerCard from '@/components/partners/PartnerCard';

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
const mockPartners: Partner[] = [
    {
        id: '1',
        name: 'Roswell Alter',
        role: 'admin',
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
    },
    {
        id: '2',
        name: 'Jane Doe',
        role: 'client',
        cpf: '999.999.999-99',
        rg: '99.999-999',
        orgao: 'SSPSP',
        address: {
            cep: '11111-111',
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            logradouro: 'Avenida 2',
            bairro: 'Bairro 2',
            numero: '200',
            complemento: 'Apto 303',
        },
    },
    {
        id: '3',
        name: 'John Smith',
        role: 'client',
        cpf: '888.888.888-88',
        rg: '88.888-888',
        orgao: 'SSPRJ',
        address: {
            cep: '22222-222',
            cidade: 'Belo Horizonte',
            estado: 'MG',
            logradouro: 'Praça 3',
            bairro: 'Centro',
            numero: '30',
            complemento: 'Sala 505',
        },
    },
];

const PartnersOverviewContainer: React.FC = () => {
    return (
        <div className="flex-grow space-y-4">
            {mockPartners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
            ))}
        </div>
    );
};

export default PartnersOverviewContainer;
