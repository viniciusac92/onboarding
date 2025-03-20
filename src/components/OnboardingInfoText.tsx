import React from 'react';

interface OnboardingInfoTextProps {
    heading: string;
    paragraph: string;
}

const OnboardingInfoText: React.FC<OnboardingInfoTextProps> = ({ heading, paragraph }) => {
    return (
        <>
            <h2 className="text-lg font-bold pb-2 pl-2">{heading}</h2>
            <p className="text-sm text-gray-600 pb-20 pl-2">{paragraph}</p>
        </>
    );
};

export default OnboardingInfoText;
