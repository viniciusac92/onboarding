import AddressContainer from '@/containers/AddressContainer';
import UserInfoContainer from '@/containers/UserInfoContainer';

const EnterpriseMiddleColumn: React.FC = () => {
    return (
        <div className="responsive-column px-4">
            <UserInfoContainer />
            <AddressContainer />
        </div>
    );
};

export default EnterpriseMiddleColumn;
