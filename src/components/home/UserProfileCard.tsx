import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';

const UserProfileCard: React.FC = () => {
    return (
        <div className="bg-white rounded-lg p-6 w-full max-w-[264px] flex flex-col items-center">
            {/* User Avatar */}
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            
            {/* User Name */}
            <h3 className="text-base font-bold mb-6">Arthur Felipe Moitinho</h3>
            
            {/* Edit Profile Button */}
            <Button 
                variant="default" 
                className="bg-blue-500 hover:bg-blue-600 w-full flex items-center justify-center gap-2"
            >
                Editar perfil
                <Pencil size={16} />
            </Button>
        </div>
    );
};

export default UserProfileCard;
