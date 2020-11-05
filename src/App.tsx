import React from 'react';

import GlobalStyle from './styles/global';
import DashBoard from './pages/Dashboard';

const App: React.FC = () => {
  return(
    <>
      <GlobalStyle/>
      <DashBoard/>
    </>
  );
};

export default App;
