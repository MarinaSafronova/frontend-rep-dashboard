import React from 'react';
import Home from './pages/home';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/utils/router/privateRoute';
import AuthRootCoomponent from './components/auth/index'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LayoutComponent from './components/layout';
import WatchList from './pages/watchlist';
import NewsComponent from './pages/news';
import SettingsComponent from './pages/settings';
import SingleAssetPage from './pages/single-asset'

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
          <div className="App">
            <Routes>
              <Route element={<LayoutComponent/>}>
                <Route element={<PrivateRoute/>}>
                  <Route path='/' element={<Home />} />
                  <Route path='/watchlist' element={<WatchList />} />
                  <Route path='/news' element={<NewsComponent />} />
                  <Route path='/settings' element={<SettingsComponent />} />
                  <Route path="/single/:id" element={<SingleAssetPage />}
                  />
                </Route>
                <Route path='login' element={<AuthRootCoomponent/>} />
                <Route path='register' element={<AuthRootCoomponent/>} />
              </Route>
            </Routes>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
