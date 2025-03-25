import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanyCard, AddCompanyButton } from '@/components/home';

const HomeMiddleColumn: React.FC = () => {
    const navigate = useNavigate();

    const companies = [
        { id: 1, name: 'Razão Social Cadastrada', status: 'concluido' },
        { id: 2, name: 'Razão Social Cadastrada', status: 'pendente' as const },
        { id: 3, name: 'Razão Social Cadastrada', status: 'pendente' as const },
    ];

    const handleCompanyClick = (_id: number) => {
        navigate('/enterprise');
    };

    return (
        <div className="responsive-column pl-4 pr-20 space-y-4">
            <div className="flex justify-between items-start">
                <h1 className="responsive-page-title text-3xl font-bold">Suas empresas</h1>
                <AddCompanyButton />
            </div>
            {companies.map(company => (
                <div
                    key={company.id}
                    onClick={() => handleCompanyClick(company.id)}
                    className="cursor-pointer"
                >
                    <CompanyCard companyName={company.name} status={company.status} />
                </div>
            ))}
        </div>
    );
};

export default HomeMiddleColumn;
