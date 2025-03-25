import React from 'react';
import HomeLeftColumn from '@/components/home/HomeLeftColumn';
import HomeMiddleColumn from '@/components/home/HomeMiddleColumn';

const Home: React.FC = () => {
    return (
        <div className="flex">
            <div className="flex-1 ml-1/4">
                <div className="flex flex-col items-start pt-24">
                    <div className="responsive-container py-8">
                        <HomeLeftColumn />
                        <HomeMiddleColumn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
