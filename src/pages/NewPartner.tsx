import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    NewPartnerLeftColumn,
    NewPartnerMiddleColumn,
    NewPartnerRightColumn,
} from '@/components/newPartner';
import '../styles/structure.css';

const NewPartner: React.FC = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        navigate('/partners');
    };

    return (
        <div className="flex">
            <div className="flex-1 ml-1/4">
                <div className="flex flex-col items-start pt-24">
                    <div className="responsive-container py-8">
                        <NewPartnerLeftColumn />
                        <NewPartnerMiddleColumn />
                        <NewPartnerRightColumn handleSave={handleSave} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPartner;
