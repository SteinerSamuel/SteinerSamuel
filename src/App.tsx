import React from 'react';

import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'
import Research from './components/Research'

const App: React.FC = () => {
  return (
    <div className="m-auto antialiased font-sans text-center flex overflow-clip w-screen">
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="overflow-y overflow-scroll absolute left-64">
        <About />
        <Projects />
        <Research />
      </div>
    </div>
  );
}

export default App;
