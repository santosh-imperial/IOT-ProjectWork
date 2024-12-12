import React from 'react';

interface WelcomeMessageProps {
  userName: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ userName }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Hi {userName}, Welcome Back!
      </h2>
    </div>
  );
};

export default WelcomeMessage;