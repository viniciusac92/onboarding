import React from 'react';

interface OnboardingInfoTextProps {
    heading: string;
    paragraph: string;
}

const OnboardingInfoText: React.FC<OnboardingInfoTextProps> = ({ heading, paragraph }) => {
    return (
        <>
            <h2 className="text-lg font-medium pb-2 pl-2">{heading}</h2>
            <p className="font-light pb-16 pl-2">{paragraph}</p>
        </>
    );
};

export default OnboardingInfoText;
