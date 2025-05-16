import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Login from './components/Auth/Login';
import GroupList from './components/Groups/GroupList';
import EventList from './components/Events/EventList';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/groups" element={<GroupList />} />
          <Route path="/groups/:groupId/events" element={<EventList />} />
          <Route path="/" element={<Navigate to="/groups" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
