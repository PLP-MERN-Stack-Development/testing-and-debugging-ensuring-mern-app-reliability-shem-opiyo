import React, { useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  const [bugsUpdated, setBugsUpdated] = useState(false);

  const handleBugAdded = () => setBugsUpdated(!bugsUpdated);

  return (
    <div>            
      <h1>Bug Tracker</h1>
      <ErrorBoundary>
        <BugForm onBugAdded={handleBugAdded} />
        <BugList key={bugsUpdated} />  {/* Force re-render on add */}
      </ErrorBoundary>
    </div>
  );
}


export default App;