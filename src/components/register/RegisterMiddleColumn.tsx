import AddressContainer from '@/containers/AddressContainer';
import GovAccessContainer from '@/containers/GovAccessContainer';
import UserInfoContainer from '@/containers/UserInfoContainer';

const RegisterMiddleColumn: React.FC = () => {
    return (
        <div className="responsive-column px-4 space-y-4 md:space-y-6">
            <h1 className="responsive-page-title text-3xl font-bold mb-3">Seus dados</h1>
            <UserInfoContainer />
            <AddressContainer />
            <GovAccessContainer />
        </div>
    );
};

export default RegisterMiddleColumn;
