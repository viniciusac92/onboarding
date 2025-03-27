import React from 'react';
import EnterpriseIdentificationContainer from '@/containers/EnterpriseIdentificationContainer';
import EnterpriseAddressContainer from '@/containers/EnterpriseAddressContainer';
import EnterpriseSpecificationContainer from '@/containers/EnterpriseSpecificationContainer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EnterpriseMiddleColumn: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="responsive-column px-4 space-y-4 md:space-y-6">
            <div className="flex items-center mb-3">
                <Button
                    onClick={() => navigate('/register')}
                    className="bg-white text-blue-500 hover:text-blue-600 hover:bg-white shrink-0 rounded-full shadow-none h-10 w-10 p-0 flex items-center justify-center mr-4"
                >
                    <ArrowLeft className="size-6" />
                </Button>
                <h1 className="responsive-page-title text-3xl font-bold ">Sobre a empresa</h1>
            </div>
            <EnterpriseIdentificationContainer />
            <EnterpriseAddressContainer />
            <EnterpriseSpecificationContainer />
        </div>
    );
};

export default EnterpriseMiddleColumn;
