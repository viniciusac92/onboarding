import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AddCompanyButton: React.FC = () => {
    const navigate = useNavigate();

    const handleAddCompany = () => {
        navigate('/register');
    };

    return (
        <Button
            onClick={handleAddCompany}
            className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2"
        >
            <Plus size={16} />
            Novo Sócio
        </Button>
    );
};

export default AddCompanyButton;
