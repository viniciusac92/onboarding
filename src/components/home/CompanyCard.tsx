import React from 'react';

interface CompanyCardProps {
    companyName: string;
    status: 'concluido' | 'pendente';
}

const CompanyCard: React.FC<CompanyCardProps> = ({ companyName, status }) => {
    return (
        <div className="bg-white rounded-lg p-4 flex justify-between items-center mb-4 shadow-sm hover:shadow transition-shadow duration-200">
            <div className="font-medium">[{companyName}]</div>
            <div className={`px-4 py-1 rounded-full text-sm ${status === 'concluido' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {status === 'concluido' ? 'Concluído' : 'Pendente'}
            </div>
        </div>
    );
};

export default CompanyCard;
