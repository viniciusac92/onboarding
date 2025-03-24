import React from 'react';
import EnterpriseIdentificationContainer from '@/containers/EnterpriseIdentificationContainer';
import EnterpriseAddressContainer from '@/containers/EnterpriseAddressContainer';
import EnterpriseSpecificationContainer from '@/containers/EnterpriseSpecificationContainer';

const EnterpriseMiddleColumn: React.FC = () => {
    return (
        <div className="responsive-column px-4 space-y-4 md:space-y-6">
            <h1 className="responsive-page-title text-3xl font-bold mb-[12px]">Sobre a empresa</h1>
            <EnterpriseIdentificationContainer />
            <EnterpriseAddressContainer />
            <EnterpriseSpecificationContainer />
        </div>
    );
};

export default EnterpriseMiddleColumn;
