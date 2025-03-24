import React from 'react';

const WelcomeSection: React.FC = () => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-1">Olá!</h2>
            <p className="text-gray-600">
                Aqui, você acompanha o andamento do<br />
                seu cadastro e atualiza informações.
            </p>
        </div>
    );
};

export default WelcomeSection;
