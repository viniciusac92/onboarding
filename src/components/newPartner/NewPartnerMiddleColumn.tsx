import AddressContainer from '@/containers/AddressContainer';
import UserInfoContainer from '@/containers/UserInfoContainer';

const NewPartnerMiddleColumn: React.FC = () => {
    return (
        <div className="responsive-column px-4 space-y-4 md:space-y-6">
            <h1 className="responsive-page-title text-3xl font-bold mb-[12px]">Novo Sócio</h1>
            <UserInfoContainer />
            <AddressContainer />
        </div>
    );
};

export default NewPartnerMiddleColumn;
