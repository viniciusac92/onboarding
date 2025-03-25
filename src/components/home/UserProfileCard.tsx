import React from 'react';
import { Button } from '../ui/button';
import { Pencil, User } from 'lucide-react';
import { Card } from '../ui/card';
import { Label } from '../ui/label';

const UserProfileCard: React.FC = () => {
    return (
        <Card className="rounded-sm border-none gap-0 p-6">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-500 rounded-full mb-4">
                <User />
            </div>
            <Label className="text-base font-medium mt-2">Arthur Felipe Moitinho</Label>
            <div
                className="border-t my-6"
                style={{ borderColor: 'var(--global-section-divider-color)' }}
            />
            <Button
                variant="default"
                className="flex items-center justify-between gap-2 px-4 bg-blue-500 hover:bg-blue-600 w-full"
            >
                Editar perfil
                <Pencil size={16} />
            </Button>
        </Card>
    );
};

export default UserProfileCard;
