import React from 'react';
import UserInfoContainer from '../components/UserInfoContainer';
import MaritalStatusContainer from '../components/MaritalStatusContainer';
import Header from '../layout/Header';
import ProfessionContainer from '@/components/ProfessionContainer';
import ProfessionalLicenseContainer from '@/components/ProfessionalLicenseContainer';

const Register: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row justify-between space-x-4 mt-4">
        <div className="w-88 px-12 pt-12">
          <div>
            <h2 className="text-lg font-bold text-black mb-2">
              Vamos abrir sua empresa!
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              Nesta primeira etapa, precisamos de alguns dados sobre você. 😊
            </p>

            {/* Steps */}
            <div className="mt-8 space-y-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#47B5FF] flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-[#47B5FF] font-medium">Seus dados</span>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-500">Sobre a empresa</span>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-500">Sócios</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 flex space-x-4">
          <UserInfoContainer />
          <div className="flex flex-col space-y-4">
            <ProfessionContainer />
            <MaritalStatusContainer />
            <ProfessionalLicenseContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
