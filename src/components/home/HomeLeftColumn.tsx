import React from 'react';
import OnboardingInfoText from '../OnboardingInfoText';
import UserProfileCard from './UserProfileCard';

const HomeLeftColumn: React.FC = () => {
    return (
        <div className="responsive-column pl-20 pt-12 max-w-[320px]">
            <OnboardingInfoText
                heading="Olá!"
                paragraph="Aqui, você acompanha o andamento do seu cadastro e atualiza informações."
            />
            <UserProfileCard />
        </div>
    );
};

export default HomeLeftColumn;
