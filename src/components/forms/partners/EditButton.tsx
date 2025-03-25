import * as React from 'react';
import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EditButtonProps {
    onClick?: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
    return (
        <div className="flex justify-end items-center">
            <Button
                variant="default"
                className="flex items-center justify-between h-10 w-31 text-sm bg-[var(--default-blue-background)] rounded-md hover:bg-[var(--default-blue-hover)]"
                onClick={onClick}
            >
                Editar
                <Pencil />
            </Button>
        </div>
    );
};

export default EditButton;
