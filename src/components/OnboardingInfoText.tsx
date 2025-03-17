import React from 'react';

interface OnboardingInfoTextProps {
  heading: string;
  paragraph: string;
}

const OnboardingInfoText: React.FC<OnboardingInfoTextProps> = ({ heading, paragraph }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">{heading}</h2>
      <p className="text-sm text-gray-600 mb-2">{paragraph}</p>
    </div>
  );
};

export default OnboardingInfoText;
