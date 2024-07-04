import React, { useState } from 'react';
import TestEventDetails from './components/eventdetails';

function App() {
  const [showEventDetails, setShowEventDetails] = useState(false);

  const handleClick = () => {
    setShowEventDetails(!showEventDetails);
  };

  return (
    <div>
      <h1>Überschrift</h1>
      <p
        onClick={handleClick}
        className="cursor-pointer badge badge-primary"
      >
        Event-Titel Event-Datum
      </p>
      {showEventDetails && <TestEventDetails />}
    </div>
  );
}

export default App;
