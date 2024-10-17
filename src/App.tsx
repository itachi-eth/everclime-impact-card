import React from 'react';
import ImpactCard from './components/card/ImpactCard';
import { mockCardData } from './config/config';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ImpactCard data={mockCardData[0]} />
    </div>
  );
};

export default App;
