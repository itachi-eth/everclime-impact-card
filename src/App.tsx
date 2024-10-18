import React from 'react';
import ImpactCard from './components/card/ImpactCard';
import { mockCardData } from './config/config';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {mockCardData.slice(0, 3).map((card) => (
          <ImpactCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
