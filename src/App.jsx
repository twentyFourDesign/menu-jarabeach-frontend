import Dashboard from '@pages/dashboard/Dashboard';
import { Home } from '@pages/home';
import { ROUTES } from '@routes';
import { useSentry, useSetupAxios } from '@services';
import { AppContext } from '@useContext';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  useSetupAxios();
  useSentry();

  // eslint-disable-next-line no-unused-vars
  const [permissions, setPermissions] = useState('');

  return (
    <AppContext.Provider value={permissions}>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
