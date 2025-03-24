import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewPartnerLeftColumn: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/partners');
    };

    return (
        <div className="responsive-column pl-20 pt-12 max-w-[320px]">
            <div className="flex flex-col space-y-6">
                <div className="flex items-center cursor-pointer" onClick={handleBack}>
                    <ArrowLeft size={16} />
                    <span className="ml-2">Voltar</span>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">Novo sócio</h1>
                    <p className="text-sm">
                        Compartilhe com seu sócio.
                        <br />
                        Você pode compartilhar essa página com
                        <br />
                        seu sócio, para que ele complete as
                        <br />
                        informações de qualquer lugar. 🙂
                    </p>
                    <button className="mt-4 flex items-center gap-2 bg-blue-100 text-blue-700 rounded px-3 py-1.5 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        Copiar link
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewPartnerLeftColumn;
