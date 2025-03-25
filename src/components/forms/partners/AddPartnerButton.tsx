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
            className="flex items-center justify-between h-10 w-31 text-sm bg-[var(--default-blue-background)] rounded-md hover:bg-[var(--default-blue-hover)]"
        >
            <Plus size={16} />
            Novo Sócio
        </Button>
    );
};

export default AddCompanyButton;
