import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AddressContainer from '@/containers/AddressContainer';
import UserInfoContainer from '@/containers/UserInfoContainer';

const NewPartnerMiddleColumn: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="responsive-column px-4 space-y-4 md:space-y-6">
            <div className="flex justify-between items-center mb-3">
                <div className="flex justify-between items-center">
                    <Button
                        onClick={() => navigate('/partners')}
                        className="flex items-center justify-center h-10 w-10 p-0 mr-4 bg-white text-blue-500 hover:text-blue-600 hover:bg-white shrink-0 rounded-full shadow-none"
                    >
                        <ArrowLeft className="size-6" />
                    </Button>
                    <h1 className="responsive-page-title text-3xl font-bold">Novo Sócio</h1>
                </div>
            </div>
            <UserInfoContainer />
            <AddressContainer />
        </div>
    );
};

export default NewPartnerMiddleColumn;
