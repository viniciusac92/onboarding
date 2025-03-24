import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfileCard, CompanyCard, AddCompanyButton, WelcomeSection } from '@/components/home';
import obviaLogo from '../assets/obvia-logo.png';

const Home: React.FC = () => {
    const navigate = useNavigate();

    // Mock data for companies
    const companies = [
        { id: 1, name: 'Razão Social Cadastrada', status: 'concluido' as const },
        { id: 2, name: 'Razão Social Cadastrada', status: 'pendente' as const },
        { id: 3, name: 'Razão Social Cadastrada', status: 'pendente' as const },
    ];

    const handleCompanyClick = (_id: number) => {
        // Navigate to the appropriate page based on company status
        // For now, all companies will navigate to the enterprise page
        navigate('/enterprise');
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Main content */}
            <div className="flex px-8 gap-8 py-24">
                {/* Left column */}
                <div className="w-1/4">
                    <UserProfileCard />
                </div>

                {/* Right column */}
                <div className="w-3/4 pl-4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Suas empresas</h1>
                        <AddCompanyButton />
                    </div>

                    <WelcomeSection />

                    {/* Company list */}
                    <div className="mt-8">
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
                </div>
            </div>
        </div>
    );
};

export default Home;
