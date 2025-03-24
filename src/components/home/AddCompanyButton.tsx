import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const AddCompanyButton: React.FC = () => {
    const navigate = useNavigate();

    const handleAddCompany = () => {
        // Navigate to register page to start the company registration process
        navigate('/register');
    };

    return (
        <Button 
            onClick={handleAddCompany}
            className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2"
        >
            <Plus size={16} />
            Nova Empresa
        </Button>
    );
};

export default AddCompanyButton;
